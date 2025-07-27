import * as Brevo from "@getbrevo/brevo";


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
    const apiKey = process.env.BREVO_API_KEY!;
    const templateId = parseInt(process.env.BREVO_TEMPLATE_ID!);

    const apiInstance = new Brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

    await apiInstance.sendTransacEmail({
      sender: {
        name: "Website Form",
        email: "thewebcoders.team@gmail.com",
      },
      to: [
        {
          email: "nykshriraj4nov@gmail.com",
          name: "Shriraj Naik",
        },
      ],
      subject: `New Inquiry from ${data.firstName} ${data.lastName}`,
      templateId,
      params: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        company: data.company || "N/A",
        service: data.service,
        message: data.message || "No message provided.",
      },
    });

    return true;
  } catch (error) {
    console.error("ERROR SENDING EMAIL:", error);
    return false;
  }
}
