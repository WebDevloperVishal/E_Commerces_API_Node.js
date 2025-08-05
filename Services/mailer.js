import nodemailer from 'nodemailer';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const transporter = nodemailer.createTransport({
  host  : 'smtp.gmail.com',
  port  : 587,
  secure: false,
  auth  : {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail({ to, subject, text, html, attachments = [] }) {
  const mailOptions = {
    from : `"Aryan Sanam" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
    attachments,
  };

//   if (!attachments.length) {
//     mailOptions.attachments.push({
//       filename: 'data.pdf',
//       path    : join(__dirname, '..', '..', 'files', 'data.pdf'),
//     });
//   }

  const info = await transporter.sendMail(mailOptions);
  return info;
}