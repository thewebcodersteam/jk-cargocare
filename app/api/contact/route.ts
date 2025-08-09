import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { z } from "zod";
import { sendEmail } from "@/lib/sendEmail";

const contactSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .nonempty()
    .regex(/^[a-zA-Z]+$/, "First name must contain only letters"),
  lastName: z
    .string()
    .min(1)
    .nonempty()
    .regex(/^[a-zA-Z]+$/, "Last name must contain only letters"),
  // Harden email validation – block common invalid cases like consecutive dots
  email: z
    .string()
    .email("Invalid email address")
    .refine((val) => {
      // Disallow consecutive dots and leading/trailing dots in local or domain
      if (/\.\./.test(val)) return false;
      const [local, domain] = val.split("@");
      if (!local || !domain) return false;
      if (local.startsWith(".") || local.endsWith(".")) return false;
      if (domain.startsWith(".") || domain.endsWith(".")) return false;
      return true;
    }, {
      message: "Invalid email address",
    }),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
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
    if (error instanceof z.ZodError) {
      const formattedErrors = error.errors.reduce((acc, curr) => {
        acc[curr.path[0] as string] = curr.message;
        return acc;
      }, {} as Record<string, string>);

      return NextResponse.json(
        { message: "Invalid form data", errors: formattedErrors },
        { status: 400 }
      );
    }
  }
}
