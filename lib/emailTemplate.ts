export default function emailTemplate(data: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service: string;
  message?: string;
}) {
  return `
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 32px 24px; text-align: center;">
      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">New Inquiry Received</h1>
    </div>

    <!-- Content -->
    <div style="padding: 32px 24px;">
      
      <!-- Inquiry Details -->
      <div style="margin-bottom: 24px;">
        <div style="margin-bottom: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 16px;">
          <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">First Name</p>
          <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 500;">${
            data.firstName
          }</p>
        </div>

        <div style="margin-bottom: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 16px;">
          <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Last Name</p>
          <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 500;">${
            data.lastName
          }</p>
        </div>

        <div style="margin-bottom: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 16px;">
          <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
          <p style="margin: 0; color: #667eea; font-size: 16px; font-weight: 500; word-break: break-all;">${
            data.email
          }</p>
        </div>

        <div style="margin-bottom: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 16px;">
          <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Company</p>
          <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 500;">${
            data.company || "N/A"
          }</p>
        </div>

        <div style="margin-bottom: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 16px;">
          <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Service Interested In</p>
          <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 500;">${
            data.service
          }</p>
        </div>

        <div>
          <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
          <p style="margin: 0; color: #1f2937; font-size: 16px; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">${
            data.message || "No message provided."
          }</p>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div style="background-color: #f9fafb; padding: 24px; text-align: center; border-top: 1px solid #e5e7eb;">
      <p style="margin: 0; color: #9ca3af; font-size: 13px; line-height: 1.5;">This is an automated message. Please do not reply to this email.</p>
    </div>

  </div>
</body>`;
}
