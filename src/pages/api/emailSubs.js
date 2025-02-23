// pages/api/joinMidwives.js
import { Resend } from 'resend';

const resend = new Resend(process.env.INTERESTED_FORM);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const data = await resend.emails.send({
        from: 'contact@mymaternalhub.co.uk', // ✅ Your verified sender email
        to: ['contact@mymaternalhub.co.uk'], // ✅ The email where you receive applications
        subject: 'New Email Subscriber',
        html: `
        <p>You Received A New Email Subscriber, please add them to a future newsletter.</p>
          
          <p><strong>Email:</strong> ${email}</p>
        `,
      });

      return res.status(200).json({ message: 'Thank you for subscribing to our newsletter', data });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
