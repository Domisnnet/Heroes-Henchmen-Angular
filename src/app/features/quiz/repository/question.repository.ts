import { Injectable } from '@angular/core';

import { QUESTIONS } from '@quiz/data/questions';
import { Question } from '@quiz/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionRepository {
  getAll(): Question[] { return QUESTIONS; }
  getFirst(): Question { return QUESTIONS[0]; }
  getByIndex(index: number): Question | undefined { return QUESTIONS[index]; }
  getById(id: number): Question | undefined { return QUESTIONS.find(question => question.id === id); }
  getTotal(): number { return QUESTIONS.length; }
}