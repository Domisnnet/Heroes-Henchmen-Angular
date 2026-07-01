import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Answer } from '@quiz/models/answer.model';
import { QuizEngineService } from '@quiz/services/quiz-engine.service';
@Injectable({
  providedIn: 'root'
})
export class QuizFacade {
  private readonly engine = inject(QuizEngineService);
  readonly currentQuestion = toSignal(this.engine.currentQuestion$, { initialValue: this.engine.currentQuestion });
  readonly score = toSignal(this.engine.score$, { initialValue: this.engine.score });
  readonly finished = toSignal(this.engine.finished$, { initialValue: this.engine.finished });
  answer(answer: Answer): void { this.engine.answer(answer); }
  reset(): void { this.engine.reset(); }
  getResult() { return this.engine.getResult(); }
}