import { Question } from '@quiz/models/question.model';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Você encontra uma carteira na rua...',
    answers: [
      {
        id: 1,
        text: 'Procura o dono',
        score: 3
      },
      {
        id: 2,
        text: 'Entrega para a polícia',
        score: 2
      },
      {
        id: 3,
        text: 'Fica com o dinheiro',
        score: -3
      },
      {
        id: 4,
        text: 'Só entrega se tiver recompensa',
        score: -1
      }
    ]
  },

  {
    id: 2,
    question: 'Seu amigo está sendo injustiçado...',
    answers: [
      {
        id: 1,
        text: 'Defende imediatamente',
        score: 3
      },
      {
        id: 2,
        text: 'Tenta conversar',
        score: 2
      },
      {
        id: 3,
        text: 'Filma para postar depois',
        score: -2
      },
      {
        id: 4,
        text: 'Sai andando',
        score: -3
      }
    ]
  }
];