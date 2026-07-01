import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '@shared/components/header/header';
import { Footer } from '@shared/components/footer/footer';
import { QuizEngineService } from '@quiz/services/quiz-engine.service';
import { ResultQuiz } from '@quiz/models/result.model';

@Component({
  selector: 'app-result-component',
  standalone: true,
  imports: [
    Header,
    Footer
  ],
  templateUrl: './result.html',
  styleUrls: ['./result.scss'],
})
export class ResultComponent {
  private readonly engine = inject(QuizEngineService);
  private readonly router = inject(Router);
  readonly result: ResultQuiz = this.engine.getResult();
  restart(): void { this.engine.reset(); this.router.navigate(['/quiz']); }
  share(): void {} //área de compartilhamento de resultados, pode ser implementada futuramente
}