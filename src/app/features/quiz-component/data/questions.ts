import { Question } from '@features/quiz-component/models/question.model';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Você encontra uma carteira na rua...',
    answers: [
      {
        id: 1,
        text: 'Procura o dono',
        score: 3,
        message: 'Você prefere fazer a coisa certa.'
      },
      {
        id: 2,
        text: 'Entrega para a polícia',
        score: 2,
        message: 'Você acredita na justiça.'
      },
      {
        id: 3,
        text: 'Fica com o dinheiro',
        score: -3,
        message: 'Tentador demais para resistir.'
      },
      {
        id: 4,
        text: 'Só entrega se tiver recompensa',
        score: -1,
        message: 'Nada é totalmente de graça.'
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
        score: 3,
        message: 'Você enfrenta o problema sem pensar duas vezes.'
      },
      {
        id: 2,
        text: 'Tenta conversar',
        score: 2,
        message: 'Você prefere resolver conflitos com diálogo.'
      },
      {
        id: 3,
        text: 'Filma para postar depois',
        score: -2,
        message: 'O entretenimento veio antes da ajuda.'
      },
      {
        id: 4,
        text: 'Sai andando',
        score: -3,
        message: 'Você prefere não se envolver.'
      }
    ]
  }
];