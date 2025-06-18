import * as Brevo from "@getbrevo/brevo";
import emailTemplate from "./emailTemplate";

export type EmailContent = {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
};

export async function sendEmail(data: EmailContent): Promise<boolean> {
  try {
    const apiKey = process.env.BREVO_API_KEY!;
    const apiInstance = new Brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

    await apiInstance.sendTransacEmail({
      sender: {
        name: "Sankalp Kalangutkar",
        email: "sankalpkalangutkar51@gmail.com",
      },
      to: [
        {
          email: "sankalp.kalangutkar31@gmail.com",
          name: "Sankalp",
        },
      ],
      subject: `New Inquiry from ${data.name}`,
      htmlContent: emailTemplate(data),
      params: {
        name: data.name,
        email: data.email,
        company: data.company,
        service: data.service,
        message: data.message,
      },
    });

    return true;
  } catch (error) {
    console.error("ERROR SENDING EMAIL:", error);
    return false;
  }
}
