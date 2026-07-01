import { ResultQuiz } from '@features/quiz-component/models/result.model';
import { ResultType } from '@features/quiz-component/enums/result-type.enum';

export const RESULTS: ResultQuiz[] = [
  {
    type: ResultType.ANTI_HERO,
    title: '🎭 ANTI-HERÓI',
    description: 'Você vive entre a luz e a escuridão.',
    message:
      'Suas decisões dependem da situação. Você pode salvar o dia... ou causar um pequeno caos no caminho.',
    image: 'assets/images/results/anti-heroes.png'
  },
  {      
    type: ResultType.HERO,
    title: '🦸 HERÓI',
    description: 'Você sempre procura fazer a coisa certa.',
    message:
      'Coragem, empatia e senso de justiça definem suas escolhas. Mesmo quando ninguém está olhando, você prefere agir pelo bem.',
    image: 'assets/images/results/heroes.png'
  },
  {
    type: ResultType.HENCHMAN,
    title: '🦹 VILÃO',
    description: 'O caos parece ser sua linguagem favorita.',
    message:
      'Você adora quebrar regras, provocar confusão e transformar qualquer situação em uma boa história para contar.',
    image: 'assets/images/results/henchman.png'
  }
];