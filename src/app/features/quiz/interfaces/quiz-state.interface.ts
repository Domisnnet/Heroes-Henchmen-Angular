import { Question } from '@quiz/models/question.model';

export interface QuizState {
  questions: Question[];
  currentQuestion: number;
  score: number;
  finished: boolean;
}