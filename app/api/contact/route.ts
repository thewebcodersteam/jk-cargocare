import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  const contactSchema = z.object({
    name: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(1, "Message is required"),
  });
  const submission = await req.json();

  const isValid = contactSchema.safeParse({ submission });

  return NextResponse.json({ message: "Success" }, { status: 200 });
}
