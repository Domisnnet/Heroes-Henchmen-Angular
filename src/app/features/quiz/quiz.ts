import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Header } from '@shared/components/header/header';
import { Footer } from '@shared/components/footer/footer';
import { Question } from '@features/quiz/models/question.model';
import { Answer } from '@features/quiz/models/answer.model';
import { QuizEngineService } from '@features/quiz/services/quiz-engine.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    Footer
  ],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss'
})
export class Quiz {
  private readonly quizEngine = inject(QuizEngineService);
  private readonly router = inject(Router);
  currentQuestion!: Question;
  constructor() {
    this.quizEngine.currentQuestion$.subscribe(question => { this.currentQuestion = question; });
    this.quizEngine.finished$.subscribe(finished => { 
      if (finished) { this.router.navigate(['/result']); } });
  }
  answer(answer: Answer): void { this.quizEngine.answer(answer); }
}