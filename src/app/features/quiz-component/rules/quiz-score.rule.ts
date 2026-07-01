import { QUIZ_CONSTANTS } from '@features/quiz-component/constants/quiz.constants';
import { ResultType } from '@features/quiz-component/enums/result-type.enum';

export class QuizScoreRule {
  static resolve(score: number): ResultType {
    if (score >= QUIZ_CONSTANTS.INITIAL_SCORE.hero) { return ResultType.HERO; }
    if (score <= QUIZ_CONSTANTS.INITIAL_SCORE.hench) { return ResultType.HENCHMAN; }
    return ResultType.ANTI_HERO;
  }
}   