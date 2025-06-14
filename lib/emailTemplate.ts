export default function emailTemplate({
  name,
  email,
  company,
  service,
  message,
}: {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>📩 New Contact Form Submission</h2>
      <p>You have received a new message from your website contact form.</p>
      
      <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; margin-top: 16px;">
        <tr style="background-color: #f4f4f4;">
          <td><strong>Name</strong></td>
          <td>${name}</td>
        </tr>
        <tr>
          <td><strong>Email</strong></td>
          <td>${email}</td>
        </tr>
        ${
          company
            ? `<tr style="background-color: #f4f4f4;">
                <td><strong>Company</strong></td>
                <td>${company}</td>
              </tr>`
            : ""
        }
        <tr>
          <td><strong>Interested Service</strong></td>
          <td>${service}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td><strong>Message</strong></td>
          <td>${message.replace(/\n/g, "<br/>")}</td>
        </tr>
      </table>

      <p style="margin-top: 24px;">Please respond to <a href="mailto:${email}">${email}</a> at your earliest convenience.</p>
    </div>
  `;
}
