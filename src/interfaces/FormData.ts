import { SubjectType } from "../enums/subjectType";

export interface FormData {
  name: string;
  email: string;
  subject: SubjectType;
  comment: string;
}
