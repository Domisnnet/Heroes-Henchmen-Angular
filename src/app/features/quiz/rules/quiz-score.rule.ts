import { QUIZ_CONSTANTS } from '@quiz/constants/quiz.constants';
import { ResultType } from '@quiz/enums/result-type.enum';

export class QuizScoreRule {
  static resolve(score: number): ResultType {
    if (score >= QUIZ_CONSTANTS.HERO_SCORE) { return ResultType.HERO; }
    if (score <= QUIZ_CONSTANTS.HENCHMAN_SCORE) { return ResultType.HENCHMAN; }
    return ResultType.ANTI_HERO;
  }
}