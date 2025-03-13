import { Resend } from 'resend';

const resend = new Resend(process.env.INTERESTED_FORM);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { 
      fullName, 
      email, 
      journeyStage, 
      services, 
      budget, 
      weeklyHours, 
      considerations 
    } = req.body;

    try {
      const data = await resend.emails.send({
        from: 'contact@mymaternalhub.co.uk',
        to: ['contact@mymaternalhub.co.uk'],
        subject: 'New Consultation Booking Request',
        html: `
          <h2>New Consultation Booking Request, please contact them asap to setup a call</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Journey Stage:</strong> ${journeyStage}</p>
          <p><strong>Requested Services:</strong> ${services.join(', ')}</p>
          <p><strong>Expected Budget:</strong> £${budget}</p>
          <p><strong>Requested Weekly Hours:</strong> ${weeklyHours}</p>
          <p><strong>Main Considerations:</strong> ${considerations.join(', ')}</p>
        `,
      });

      return res.status(200).json({ message: 'Booking request sent successfully', data });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending booking request', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
