import { sendEmail } from '../services/mailer.js';

export const sendMailController = async (req, res) => {
  try {
    const { to, subject, text, html } = req.body;
    const info = await sendEmail({ to, subject, text, html });
    res.json({ message: 'Email sent', info });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to send email' });
  }
};