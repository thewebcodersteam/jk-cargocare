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

// 1. Zod schema
const noScriptRegex = /<\s*script.*?>.*?<\s*\/\s*script\s*>/gi;

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Full Name is required and cannot be empty or only spaces.")
    .regex(/^[A-Za-z\s'-]+$/, "Full Name can only contain letters, spaces, apostrophes, and hyphens.")
    .refine((val) => val.trim().length > 0, {
      message: "Full Name is required and cannot be empty or only spaces.",
    })
    .refine((val) => !noScriptRegex.test(val), {
      message: "Full Name must not contain script tags.",
    }),

  email: z
    .string()
    .superRefine((val, ctx) => {
      if (val.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Email Address is required and cannot be empty or only spaces.",
        });
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Email Address must be in a valid format (e.g., name@example.com).",
        });
      } else if (noScriptRegex.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Email Address must not contain script tags.",
        });
      }
    }),

  company: z
    .string()
    .max(100, "Company Name must not exceed 100 characters.")
    .refine((val) => val.trim().length > 0 || val === "", {
      message: "Company Name is required and cannot be empty or only spaces.",
    })
    .refine((val) => !noScriptRegex.test(val), {
      message: "Company Name must not contain script tags.",
    })
    .optional(),

  service: z.enum(
    ["freight", "hazardous", "warehousing", "manpower", "multiple", "other"],
    {
      errorMap: () => ({
        message: "Please select a valid service option.",
      }),
    }
  ),

  message: z
    .string()
    .min(1, "Message is required and cannot be empty or only spaces.")
    .max(1000, "Message must not exceed 1000 characters.")
    .refine((val) => val.trim().length > 0, {
      message: "Message is required and cannot be empty or only spaces.",
    })
    .refine((val) => !noScriptRegex.test(val), {
      message: "Message must not contain script tags.",
    }),
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
      reset();
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
      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                required
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
                  required
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
              required
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
