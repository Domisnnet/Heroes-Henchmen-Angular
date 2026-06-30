import { Answer } from "@quiz/models/answer.model";
export interface Question {
  id: number;
  question: string;
  answers: Answer[];
  image?: string;
  category?: 'hero' | 'henchman';
}