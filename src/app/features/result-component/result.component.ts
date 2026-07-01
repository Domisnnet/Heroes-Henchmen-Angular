import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UI_MESSAGES } from '@shared/constants/ui.constants';
import { HeaderComponent } from '@shared/components/header-component/header.component';
import { FooterComponent } from '@shared/components/footer-component/footer.component';
import { QuizFacade } from '@features/quiz-component/facades/quiz.facade';
import { ResultQuiz } from '@features/quiz-component/models/result.model';

@Component({
  selector: 'app-result-component',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  readonly headerMessage = UI_MESSAGES.HEADER.RESULT;
  readonly footerMessage = UI_MESSAGES.FOOTER.RESULT;
  private readonly facade = inject(QuizFacade);
  private readonly router = inject(Router);
  readonly result: ResultQuiz = this.facade.getResult();
  restart(): void { this.facade.reset(); this.router.navigate(['/quiz']); }
  share(): void { } //área de compartilhamento de resultados, pode ser implementada futuramente
}