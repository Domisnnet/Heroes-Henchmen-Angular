import { Injectable, inject } from '@angular/core';
import { Answer } from '@quiz/models/answer.model';
import { ResultQuiz } from '@quiz/models/result.model';
import { QuizEngineService } from '@quiz/services/quiz-engine.service';

@Injectable({
  providedIn: 'root'
})
export class QuizFacade {
  private readonly engine = inject(QuizEngineService);
  readonly currentQuestion$ = this.engine.currentQuestion$;
  readonly score$ = this.engine.score$;
  readonly finished$ = this.engine.finished$;
  answer(answer: Answer): void { this.engine.answer(answer); }
  reset(): void { this.engine.reset(); }
  getResult(): ResultQuiz { return this.engine.getResult(); }
  get currentQuestion() { return this.engine.currentQuestion; }
  get score() { return this.engine.score; }
  get finished() { return this.engine.finished; }
}