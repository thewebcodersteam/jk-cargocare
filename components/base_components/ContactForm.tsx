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
import { Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Controller } from "react-hook-form";
import { Label } from "../ui/label";
import Spinner from "./Spinner";

// 1. Zod schema
const contactSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormSchema = z.infer<typeof contactSchema>;

export default function ContactForm() {
  // 2. useForm hook
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactSchema),
  });

  const [isValid, setIsValid] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: async function (data: ContactFormSchema) {
      const response = await axios.post(
        "http://localhost:3001/api/contact",
        data
      );
      return response.data;
    },
    onSuccess(data: { message: string }) {
      toast.success(data.message || "success");
    },
    onError(error: any) {
      toast.error(error?.message || "some error occurred");
    },
  });

  const { mutate: validateCaptcha } = useMutation({
    mutationKey: ["captcha"],
    mutationFn: async (token: string) => {
      const res = await axios.post("/api/verify-captcha", { token });
      return res.data;
    },
    onSuccess: () => {
      setIsValid(true);
      toast.success("reCAPTCHA verified!");
    },
    onError: () => {
      setIsValid(false);
      toast.error("reCAPTCHA verification failed.");
      recaptchaRef?.current?.reset();
    },
  });

  const handleChange = (token: string | null) => {
    if (token) {
      validateCaptcha(token);
    } else {
      setIsValid(false);
    }
  };

  // 3. Submit handler
  const onSubmit = (data: ContactFormSchema) => {
    mutate(data);
  };

  const handleExpired = () => {
    setIsValid(false);
  };

  return (
    <Card className="w-full h-full" id="contact-form">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Your full name"
                {...register("name")}
                style={{ borderColor: errors.name ? "red" : "" }}
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
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
              placeholder="Your company name"
              {...register("company")}
              style={{ borderColor: errors.company ? "red" : "" }}
            />
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
                    <SelectValue placeholder="Select a service" />
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
                {errors.service.message}
              </p>
            )}
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
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
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            ref={recaptchaRef}
            onChange={handleChange}
            onExpired={handleExpired}
          />

          <Button
            disabled={isPending || !isValid}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            <Send className="mr-2 h-4 w-4" />
            {isPending ? <Spinner /> : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
