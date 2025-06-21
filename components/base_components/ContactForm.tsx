"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Controller } from "react-hook-form";
import { Label } from "../ui/label";
import Spinner from "./Spinner";

const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "Please enter your first name.")
    .nonempty()
    .regex(/^[a-zA-Z]+$/, "First name must contain only letters."),
  lastName: z
    .string()
    .min(1, "Please enter your last name.")
    .nonempty()
    .regex(/^[a-zA-Z]+$/, "Last name must contain only letters."),
  email: z.string().nonempty("Email is required").email("Invalid email address."),
  company: z.string().optional(),
  service: z
    .string()
    .nonempty("Please select a service.")
    .min(1, "Please select a service.")
    .refine((val) => val !== "", {
      message: "Please select a service.",
    }),
  message: z.string().optional(),
});

type ContactFormSchema = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: async function (data: ContactFormSchema & { token: string }) {
      const response = await axios.post("/api/contact", data);
      return response.data;
    },
    onSuccess(data: { message: string }) {
      toast.success(data.message || "Message sent!");
      setCaptchaError("");
      setCaptchaToken(null);
      reset({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
      recaptchaRef?.current?.reset();
    },
    onError(error: any) {
      const message =
        error?.response?.data?.message || error.message || "An error occurred";
      toast.error(message);
      if (message.toLowerCase().includes("captcha")) {
        setCaptchaError("CAPTCHA validation failed. Please try again.");
        setCaptchaToken(null);
        recaptchaRef?.current?.reset();
      }
    },
  });

  const onSubmit = (formData: ContactFormSchema) => {
    if (!captchaToken) {
      setCaptchaError("Please complete the CAPTCHA before submitting.");
      return;
    }
    mutate({ ...formData, token: captchaToken });
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaError("");
    setCaptchaToken(token);
  };

  const handleExpired = () => {
    setCaptchaError("CAPTCHA expired. Please try again.");
    setCaptchaToken(null);
  };

  return (
    <Card className="w-full h-full" id="contact-form">
      <CardContent className="lg:p-6 md:p-4 p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Enter your first name"
                {...register("firstName")}
                style={{ borderColor: errors.firstName ? "red" : "" }}
              />
              {errors.firstName && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <Label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Enter your last name"
                {...register("lastName")}
                style={{ borderColor: errors.lastName ? "red" : "" }}
              />
              {errors.lastName && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div className="col-span-2">
              <Label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                placeholder="your.email@company.com"
                {...register("email")}
                style={{ borderColor: errors.email ? "red" : "" }}
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </Label>
            <Input
              type="text"
              placeholder="Enter your company name"
              {...register("company")}
              style={{ borderColor: errors.company ? "red" : "" }}
            />
            {errors.company && (
              <p className="text-sm text-red-600 mt-1">
                {errors.company.message}
              </p>
            )}
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Service Interest <span className="text-red-500">*</span>
            </Label>

            <Controller
              name="service"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger
                    style={{ borderColor: errors.service ? "red" : "" }}
                  >
                    <SelectValue placeholder="Select a service." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="freight">Freight Brokerage</SelectItem>
                    <SelectItem value="hazardous">
                      Hazardous & Bulk Cargo
                    </SelectItem>
                    <SelectItem value="warehousing">
                      Warehousing & Inventory
                    </SelectItem>
                    <SelectItem value="manpower">
                      Manpower & Field Operations
                    </SelectItem>
                    <SelectItem value="multiple">Multiple Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.service && (
              <p className="text-sm text-red-600 mt-1">
                {"Please select a service interest."}
              </p>
            )}
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </Label>
            <Textarea
              rows={5}
              placeholder="Please describe your logistics requirements..."
              {...register("message")}
              style={{ borderColor: errors.message ? "red" : "" }}
            />
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={handleCaptchaChange}
            onExpired={handleExpired}
          />
          {captchaError && (
            <p className="text-sm text-red-600">{captchaError}</p>
          )}

          <Button
            disabled={isPending}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {isPending ? <Spinner /> : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
