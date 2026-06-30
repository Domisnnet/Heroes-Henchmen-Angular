import { ResultType } from '@quiz/enums/result-type.enum';

export interface ResultQuiz {
  type: ResultType;
  title: string;
  description: string;
  message: string;
  image: string;
}