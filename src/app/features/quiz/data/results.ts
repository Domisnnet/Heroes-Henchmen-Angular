import { Result } from '@quiz/models/result.model';
import { ResultType } from '@quiz/enums/result-type.enum';

export const RESULTS: Result[] = [
  {
    type: ResultType.HERO,
    title: 'HERÓI',
    description: 'Sempre faz o que considera correto.',
    message: 'Você nasceu para proteger os outros.',
    image: 'assets/images/results/heroes.png'
  },
  {
    type: ResultType.ANTI_HERO,
    title: 'ANTI-HERÓI',
    description: 'Age conforme sua própria moral.',
    message: 'Nem herói. Nem vilão.',
    image: 'assets/images/results/heroes.png'
  },
  {
    type: ResultType.HENCHMAN,
    title: 'HENCHMAN',
    description: 'O caos é sua segunda natureza.',
    message: 'Você faria um excelente braço direito de um supervilão.',
    image: 'assets/images/results/heroes.png'
  }
];