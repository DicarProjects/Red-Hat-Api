
import { Request, Response } from 'express';
import { FormData } from '../interfaces/FormData';
import { sendEmail } from '../services/email';
import { isValidEmail } from '../validators/emailValidator';

export const runFormRecordProcess = async (req: Request, res: Response) => {
    try {
      const { name, email, subject, comment }: FormData = req.body;

      if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Invalid email address' })
      }

      // Send email
      const emailSent = await sendEmail({ name, email, subject, comment });

      return res.status(200).json({
        isEmailSent: !!emailSent,
      });

    } catch (error) {
      console.error("Error when trying to create the form: ", error);
      return res.status(500).json({ error: 'Error when trying to create the form' });
    }
};
