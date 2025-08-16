"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import { Exo } from "next/font/google";
export const exo = Exo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
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
  email: z
    .string()
    .min(1, "Email is required.")
    .nonempty()
    .email("Invalid email address."),
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
        <h2
          id="contact-form-heading"
          className="text-2xl font-bold text-gray-800 mb-6"
        >
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          aria-labelledby="contact-form-heading"
        >
          <fieldset className="border-0 p-0 m-0">
            <legend className="sr-only">Contact Information</legend>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <Label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  {...register("firstName")}
                  style={{ borderColor: errors.firstName ? "red" : "" }}
                  aria-describedby={
                    errors.firstName ? "firstName-error" : undefined
                  }
                  aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName && (
                  <p id="firstName-error" className="text-sm text-red-600 mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="col-span-2 md:col-span-1">
                <Label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  {...register("lastName")}
                  style={{ borderColor: errors.lastName ? "red" : "" }}
                  aria-describedby={
                    errors.lastName ? "lastName-error" : undefined
                  }
                  aria-invalid={errors.lastName ? "true" : "false"}
                />
                {errors.lastName && (
                  <p id="lastName-error" className="text-sm text-red-600 mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div className="col-span-2">
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@company.com"
                  {...register("email")}
                  inputMode="email"
                  // Basic RFC-like email pattern to avoid cases like "test..test@domain.com"
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  style={{ borderColor: errors.email ? "red" : "" }}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-required="true"
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-600 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
          </fieldset>

          <div>
            <Label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Company Name
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="Enter your company name"
              {...register("company")}
              style={{ borderColor: errors.company ? "red" : "" }}
              aria-describedby={errors.company ? "company-error" : undefined}
              aria-invalid={errors.company ? "true" : "false"}
            />
            {errors.company && (
              <p id="company-error" className="text-sm text-red-600 mt-1">
                {errors.company.message}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Service Interest <span className="text-red-500">*</span>
            </Label>

            <Controller
              name="service"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  // Ensure SSR/CSR consistent markup by using a single controlled value
                  value={field.value ?? ""}
                >
                  <SelectTrigger
                    id="service"
                    style={{ borderColor: errors.service ? "red" : "" }}
                    aria-describedby={
                      errors.service ? "service-error" : undefined
                    }
                    aria-invalid={errors.service ? "true" : "false"}
                  >
                    <SelectValue placeholder="Select a service interest" />
                  </SelectTrigger>
                  <SelectContent className={exo.className}>
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
              <p id="service-error" className="text-sm text-red-600 mt-1">
                {"Please select a service interest."}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Please describe your logistics requirements..."
              {...register("message")}
              style={{ borderColor: errors.message ? "red" : "" }}
              aria-describedby={errors.message ? "message-error" : undefined}
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-red-600 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Security Verification <span className="text-red-500">*</span>
            </Label>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              onChange={handleCaptchaChange}
              onExpired={handleExpired}
            />
            {captchaError && (
              <p className="text-sm text-red-600" role="alert">
                {captchaError}
              </p>
            )}
          </div>

          <Button
            // Explicitly mark as submit to avoid any ambiguity with custom Button component
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 hover:bg-blue-700"
            aria-label={
              isPending
                ? "Sending message, please wait"
                : "Send contact form message"
            }
          >
            {isPending ? <Spinner /> : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
