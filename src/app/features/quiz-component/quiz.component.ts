import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeaderComponent } from '@shared/components/header-component/header.component';
import { FooterComponent } from '@shared/components/footer-component/footer.component';
import { UI_MESSAGES } from '@shared/constants/ui.constants';
import { Answer } from '@quiz/models/answer.model';
import { Question } from '@quiz/models/question.model';
import { QuizFacade } from '@quiz/facades/quiz.facade';

@Component({
  selector: 'app-quiz-component',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  private readonly facade = inject(QuizFacade);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  readonly headerMessage = UI_MESSAGES.HEADER.QUIZ;
  readonly footerMessage = UI_MESSAGES.FOOTER.QUIZ;
  currentQuestion!: Question;
  constructor() {
    this.facade.currentQuestion$
      .pipe( takeUntilDestroyed(this.destroyRef) )
      .subscribe( question => { this.currentQuestion = question; }
    );
    this.facade.finished$
      .pipe( takeUntilDestroyed(this.destroyRef) )
      .subscribe( finished => { if (finished) { this.router.navigate(['/result']); } }
    );
  }
  answers(answer: Answer): void { this.facade.answer(answer); }
}