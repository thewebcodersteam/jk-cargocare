import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, service, company, message } = await req.json();
  console.log(name, email, service, company, message);
  return NextResponse.json({ message: "Success" }, { status: 200 });
}
