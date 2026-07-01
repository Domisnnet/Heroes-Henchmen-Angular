import { Answer } from './answer.model';
import { QuestionCategory } from '@quiz/enums/question-category.enum';
export interface Question {
  id: number;
  question: string;
  category: QuestionCategory;
  image?: string;
  answers: Answer[];
}