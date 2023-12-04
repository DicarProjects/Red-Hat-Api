import { FormData } from '../interfaces/FormData';
import nodemailer from 'nodemailer';
import { EMAIL_SUBJECT } from '../config/constants';
import { processEmailTemplate } from '../templates/processor/emailTemplateProcessor';


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.HOST_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
  authMethod: 'LOGIN',
});

export const sendEmail = async ({ name, email, subject, comment}: FormData) => {
    try {
      const htmlContent = processEmailTemplate({name, email, subject, comment});

      const options = {
        from: `"RHIT Solutions Notifications" <${process.env.HOST_EMAIL}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: EMAIL_SUBJECT,
        html: htmlContent,
      };

      const result = await transporter.sendMail(options);
      console.log("Email sent successfully:", result);
      return result;

    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };
