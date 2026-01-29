import { Resend } from 'resend';
import { ContactFormValues } from '../validation/contact';

// Use a dummy key if not present to avoid runtime crashes during development
const resend = new Resend(process.env.RESEND_API_KEY || 're_123');
const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';

export async function sendContactEmail(data: ContactFormValues) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY is missing. Mocking email send.');
    return { success: true, id: 'mock-id' };
  }

  try {
    const { name, email, subject, message } = data;

    const emaildata = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      // Prevent header injection by removing newlines and control characters
      replyTo: email
        .replace(/[\r\n\t\0\x00-\x1F\x7F]/g, "")
        .trim()
        .slice(0, 254), // RFC 5321 max email length
      subject: `New Contact Form Submission: ${subject || 'No Subject'} - from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject || 'N/A'}

Message:
${message}
      `,
    });

    if (emaildata.error) {
       console.error("Resend API Error:", emaildata.error)
       return { success: false, error: emaildata.error }
    }
    
    return { success: true, data: emaildata.data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}
