import nodemailer from "nodemailer";
import emailTemplate from "./emailTemplate";

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service: string;
  message?: string;
};

export async function sendEmail(data: ContactFormData): Promise<boolean> {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT!),
      secure: false,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Website Form" <${process.env.SMTP_USER!}>`,
      to: "sankalp.kalangutkar31@gmail.com",
      subject: `New Inquiry from ${data.firstName} ${data.lastName}`,
      html: emailTemplate(data),
    };

    // Send mail
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("ERROR SENDING EMAIL:", error);
    return false;
  }
}
