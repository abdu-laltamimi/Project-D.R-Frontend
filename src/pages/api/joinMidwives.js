// pages/api/joinMidwives.js
import { Resend } from 'resend';

const resend = new Resend(process.env.INTERESTED_FORM);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, phone, experience, message } = req.body;

    try {
      const data = await resend.emails.send({
        from: 'contact@mymaternalhub.co.uk', // ✅ Your verified sender email
        to: ['contact@mymaternalhub.co.uk'], // ✅ The email where you receive applications
        subject: 'New Midwife Application Submission',
        html: `
        <p>You Received A New Midwife Application Submission, please review the application and get back to them as soon as possible.</p>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      return res.status(200).json({ message: 'Application sent successfully', data });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending application', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
