import fs from 'fs';
import { FormData } from '../../interfaces/FormData';
import path from 'path';

type FormKeys = keyof FormData;

export function processEmailTemplate(formData: FormData): string {
  try {
    const templatePath = path.resolve(__dirname, process.env.EMAIL_TEMPLATE_PATH!);

    if (!fs.existsSync(templatePath)) {
      throw new Error("Email template not found");
    }

    const htmlContent = fs.readFileSync(templatePath, 'utf8');

    const replacedHtml = htmlContent.replace(/\[(.+?)\]/g, (match, p1) => {
      const key = p1 as FormKeys;
      return formData[key] !== undefined ? formData[key] : match;
    });

    return replacedHtml;
  } catch (error) {
    console.error("Error processing email template:", error);
    throw new Error("Error processing email template");
  }
}
