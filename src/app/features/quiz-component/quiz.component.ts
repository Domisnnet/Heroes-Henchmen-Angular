import { Component, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '@shared/components/header-component/header.component';
import { FooterComponent } from '@shared/components/footer-component/footer.component';
import { UI_MESSAGES } from '@shared/constants/ui.constants';
import { Answer } from '@quiz/models/answer.model';
import { QuizFacade } from '@quiz/facades/quiz.facade';
import { QUESTION_CATEGORY_INFO } from '@quiz/models/question.model';
import { CHAPTERS } from '@quiz/constants/chapter.constants';

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
  readonly headerMessage = UI_MESSAGES.HEADER.QUIZ;
  readonly footerMessage = UI_MESSAGES.FOOTER.QUIZ;
  readonly currentQuestion = this.facade.currentQuestion;

  readonly chapterInfo = computed(() => {
    const question = this.currentQuestion();
    if (!question) return null;
    const catInfo = QUESTION_CATEGORY_INFO[question.category];
    const chap = CHAPTERS[catInfo.chapter];
    return {
      title: chap.title,
      subtitle: chap.subtitle,
      categoryTitle: catInfo.title
    };
  });

  constructor() {
    this.watchQuizCompletion();
  }
  private watchQuizCompletion(): void {
    effect(() => { if (this.facade.finished()) { this.router.navigate(['/result']); } });
  }
  answers(answer: Answer): void { this.facade.answer(answer); }
}