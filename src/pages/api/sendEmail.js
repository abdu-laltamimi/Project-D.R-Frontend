
import { Resend } from 'resend';

const resend = new Resend(process.env.INTERESTED_FORM);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, phone, message } = req.body;

    try {
      const data = await resend.emails.send({
        from: 'contact@mymaternalhub.co.uk', // Sender email from your verified domain
        to: ['contact@mymaternalhub.co.uk'], // Your recipient email(s)
        subject: 'URGENT: New BookingForm Submission!!',
        html: `
        <p>URGENT: New Booking Form Submission From A Potential Customer Who Is Interested In Booking A Call With You!!</p>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.status(200).json({ message: 'Email sent successfully', data });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
