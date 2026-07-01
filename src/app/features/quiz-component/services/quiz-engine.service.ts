import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Answer } from '@features/quiz-component/models/answer.model';
import { Question } from '@features/quiz-component/models/question.model';
import { ResultQuiz } from '@features/quiz-component/models/result.model';
import { QUIZ_CONSTANTS } from '@features/quiz-component/constants/quiz.constants';
import { QuestionRepository } from '@features/quiz-component/repository/question.repository';
import { ResultRepository } from '@features/quiz-component/repository/result.repository';
import { QuizScoreRule } from '@features/quiz-component/rules/quiz-score.rule';

@Injectable({
    providedIn: 'root'
})
export class QuizEngineService {
  private currentIndex = QUIZ_CONSTANTS.INITIAL_QUESTION;
  private readonly currentQuestionSubject: BehaviorSubject<Question>;
  private readonly scoreSubject = new BehaviorSubject<number>(QUIZ_CONSTANTS.INITIAL_SCORE.hero);
  private readonly finishedSubject = new BehaviorSubject<boolean>(false);
  readonly currentQuestion$;
  readonly score$ = this.scoreSubject.asObservable();
  readonly finished$ = this.finishedSubject.asObservable();
    constructor(
      private readonly questionRepository: QuestionRepository,
      private readonly resultRepository: ResultRepository
    ) {
      this.currentQuestionSubject = new BehaviorSubject<Question>(this.questionRepository.getFirst());
      this.currentQuestion$ = this.currentQuestionSubject.asObservable();
    }

    answer(answer: Answer): void {
      if (this.finished) { return; }
      this.addScore(answer);
      this.nextQuestion();
    }

    reset(): void {
      this.currentIndex = QUIZ_CONSTANTS.INITIAL_QUESTION;
      this.scoreSubject.next(QUIZ_CONSTANTS.INITIAL_SCORE.hero);
      this.finishedSubject.next(false);
      this.loadCurrentQuestion();
    }

    getResult(): ResultQuiz {
      const type = QuizScoreRule.resolve(this.score);
      return this.resultRepository.getByType(type)!;
    }

    get currentQuestion(): Question { return this.currentQuestionSubject.value; }
    get score(): number { return this.scoreSubject.value; }
    get finished(): boolean { return this.finishedSubject.value; }

    private addScore(answer: Answer): void { this.scoreSubject.next(this.score + answer.heroPoints); }
    private nextQuestion(): void {
      this.currentIndex++;
      if (this.currentIndex >= this.questionRepository.getTotal()) {
        this.finishedSubject.next(true);
        return;
      }
      this.loadCurrentQuestion();
    }

    private loadCurrentQuestion(): void {
      const question = this.questionRepository.getByIndex(this.currentIndex);
      if (!question) { return; }
      this.currentQuestionSubject.next(question);
    }
}