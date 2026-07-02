import { Answer } from './answer.model';
import { QuestionCategory } from '@quiz/enums/question-category.enum';
export interface Question {
  id: number;
  question: string;
  category: QuestionCategory;
  image?: string;
  answers: Answer[];
}

export const QUESTION_CATEGORY_INFO = {
  [QuestionCategory.AMBITION]: { title: 'A Tentação', chapter: 2 },
  [QuestionCategory.DESTINY]: { title: 'Seu Destino', chapter: 3 },
  [QuestionCategory.EMPATHY]: { title: 'O Resgate', chapter: 2 },
  [QuestionCategory.LOYALTY]: { title: 'O Inimigo', chapter: 2 },
  [QuestionCategory.LEADERSHIP]: { title: 'O Líder', chapter: 3 },
  [QuestionCategory.MORAL]: { title: 'A Honestidade', chapter: 1 },
  [QuestionCategory.JUSTICE]: { title: 'A Justiça', chapter: 1 },
  [QuestionCategory.POWER]: { title: 'O Artefato', chapter: 1 },
  [QuestionCategory.SACRIFICE]: { title: 'O Sacrifício', chapter: 2 },
  [QuestionCategory.RESPONSIBILITY]: { title: 'A Responsabilidade', chapter: 3 },
} as const;