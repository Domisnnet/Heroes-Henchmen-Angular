export interface Answer {
  id: number;
  text: string;
  questionId?: number;
  score: number;
  message: string;
}