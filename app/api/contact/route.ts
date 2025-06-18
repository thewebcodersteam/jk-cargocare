import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { z } from "zod";
import { sendEmail } from "@/lib/sendEmail";

const contactSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(1, "Message is required"),
  token: z.string().min(1, "reCAPTCHA token is required"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { message: "Server misconfiguration: missing reCAPTCHA secret key." },
        { status: 500 }
      );
    }

    const verifyResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: data.token,
        },
      }
    );

    if (!verifyResponse.data.success) {
      return NextResponse.json(
        { message: "Failed CAPTCHA verification" },
        { status: 403 }
      );
    }

    const { token, ...emailData } = data;
    const emailSuccess = await sendEmail(emailData);

    if (emailSuccess) {
      return NextResponse.json(
        { message: "Form submitted successfully" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  } catch (error: any) {
    console.error("API ERROR:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
