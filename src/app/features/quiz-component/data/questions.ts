import { QuestionCategory } from '@quiz/enums/question-category.enum';
import { Question } from '@quiz/models/question.model';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: QuestionCategory.MORAL,
    question:
      'Enquanto caminha por um parque, você encontra uma carteira contendo documentos, cartões e uma grande quantia em dinheiro. O que faz?',
    answers: [
      {
        id: 1,
        questionId: 1,
        text: 'Procuro imediatamente o dono.',
        heroPoints: 3,
        henchPoints: 0,
        feedback: 'Você acredita que honestidade vale mais do que qualquer recompensa.'
      },
      {
        id: 2,
        questionId: 1,
        text: 'Entrego a carteira às autoridades.',
        heroPoints: 2,
        henchPoints: 1,
        feedback: 'Você prefere seguir os caminhos corretos e confiar nas instituições.'
      },
      {
        id: 3,
        questionId: 1,
        text: 'Espero que o dono ofereça alguma recompensa.',
        heroPoints: 1,
        henchPoints: 2,
        feedback: 'Você ajuda, mas espera receber algo em troca.'
      },
      {
        id: 4,
        questionId: 1,
        text: 'Fico com o dinheiro e descarto a carteira.',
        heroPoints: 0,
        henchPoints: 3,
        feedback: 'O benefício pessoal falou mais alto que o dever.'
      }
    ]
  },
  {
    id: 2,
    category: QuestionCategory.JUSTICE,
    question:
      'Durante uma reunião, um colega é acusado injustamente por um erro que você sabe que ele não cometeu. Como reage?',
    answers: [
      {
        id: 1,
        questionId: 2,
        text: 'Defendo meu colega imediatamente.',
        heroPoints: 3,
        henchPoints: 0,
        feedback: 'Você não permanece em silêncio diante de uma injustiça.'
      },
      {
        id: 2,
        questionId: 2,
        text: 'Apresento os fatos com calma antes de acusar alguém.',
        heroPoints: 2,
        henchPoints: 1,
        feedback: 'Você acredita que justiça exige responsabilidade e equilíbrio.'
      },
      {
        id: 3,
        questionId: 2,
        text: 'Prefiro não me envolver no problem.',
        heroPoints: 1,
        henchPoints: 2,
        feedback: 'Evitar conflitos parece mais seguro do que enfrentá-los.'
      },
      {
        id: 4,
        questionId: 2,
        text: 'Aproveito a situação para ganhar vantagem.',
        heroPoints: 0,
        henchPoints: 3,
        feedback: 'Você transforma a dificuldade dos outros em oportunidade.'
      }
    ]
  },
  {
    id: 3,
    category: QuestionCategory.POWER,
    question:
      'Na volta para casa, um estranho artefato cai do céu. Ao tocá-lo, uma energia percorre seu corpo e você percebe que adquiriu habilidades extraordinárias. Qual é sua primeira decisão?',
    answers: [
      {
        id: 1,
        questionId: 3,
        text: 'Aprender a controlar meus poderes antes de agir.',
        heroPoints: 3,
        henchPoints: 0,
        feedback: 'Você entende que grandes poderes exigem autocontrole.'
      },
      {
        id: 2,
        questionId: 3,
        text: 'Usá-los apenas quando realmente forem necessários.',
        heroPoints: 2,
        henchPoints: 1,
        feedback: 'Você prefere agir com responsabilidade e cautela.'
      },
      {
        id: 3,
        questionId: 3,
        text: 'Testar meus limites para descobrir até onde consigo chegar.',
        heroPoints: 1,
        henchPoints: 2,
        feedback: 'A curiosidade fala mais alto do que a prudência.'
      },
      {
        id: 4,
        questionId: 3,
        text: 'Agora ninguém poderá me impedir.',
        heroPoints: 0,
        henchPoints: 3,
        feedback: 'O poder rapidamente se tornou um instrumento de domínio.'
      }
    ]
  },
  {
    id: 4,
    category: QuestionCategory.EMPATHY,
    question:
      'Poucos dias depois, o mundo começa a perceber suas habilidades. Durante uma emergência, um edifício desaba e você só consegue salvar um dos grupos antes que tudo desmorone. Qual é sua escolha?',
    answers: [
      {
        id: 1,
        questionId: 4,
        text: 'Resgato as crianças presas no último andar.',
        heroPoints: 3,
        henchPoints: 0,
        feedback: 'Você protege primeiro aqueles que não conseguem se defender.'
      },
      {
        id: 2,
        questionId: 4,
        text: 'Salvo a equipe de bombeiros para que possam continuar o resgate.',
        heroPoints: 2,
        henchPoints: 1,
        feedback: 'Você pensa no impacto coletivo das suas decisões.'
      },
      {
        id: 3,
        questionId: 4,
        text: 'Procuro quem possa ser mais útil no futuro.',
        heroPoints: 1,
        henchPoints: 2,
        feedback: 'Você mede o valor das pessoas pelos resultados que podem oferecer.'
      },
      {
        id: 4,
        questionId: 4,
        text: 'Vou atrás do responsável pelo desastre.',
        heroPoints: 0,
        henchPoints: 3,
        feedback: 'Punir o culpado parece mais importante do que salvar as vítimas.'
      }
    ]
  },
  {
    id: 5,
    category: QuestionCategory.SACRIFICE,
    question:
      'Após salvar inúmeras pessoas, você descobre que cada vez que utiliza o artefato parte da sua própria energia vital desaparece. Quanto mais usa seus poderes, menos consegue viver uma vida normal. O que decide?',
    answers: [
      {
        id: 1,
        questionId: 5,
        text: 'Continuo ajudando, custe o que custar.',
        heroPoints: 3,
        henchPoints: 0,
        feedback: 'Você coloca o bem coletivo acima da própria vida.'
      },
      {
        id: 2,
        questionId: 5,
        text: 'Usarei meus poderes apenas quando realmente forem necessários.',
        heroPoints: 2,
        henchPoints: 1,
        feedback: 'Você busca equilibrar responsabilidade e sobrevivência.'
      },
      {
        id: 3,
        questionId: 5,
        text: 'Reservo meus poderes para situações que me beneficiem.',
        heroPoints: 1,
        henchPoints: 2,
        feedback: 'Seu instinto de autopreservação começa a dominar suas escolhas.'
      },
      {
        id: 4,
        questionId: 5,
        text: 'Nunca mais ajudarei ninguém.',
        heroPoints: 0,
        henchPoints: 3,
        feedback: 'Seu próprio bem-estar tornou-se mais importante que qualquer outra vida.'
      }
    ]
  },
  {
    id: 6,
    category: QuestionCategory.LOYALTY,
    question:
      'Seu primeiro grande inimigo finalmente é derrotado. Ferido e sem forças para reagir, ele pede sua ajuda e promete nunca mais cruzar seu caminho. Qual é sua decisão?',
    answers: [
      {
        id: 1,
        questionId: 6,
        text: 'Socorro o inimigo e o entrego às autoridades.',
        heroPoints: 3,
        henchPoints: 0,
        feedback: 'Sua compaixão é maior que seu desejo de vingança.'
      },
      {
        id: 2,
        questionId: 6,
        text: 'Prendo o inimigo e deixo a justiça decidir.',
        heroPoints: 2,
        henchPoints: 1,
        feedback: 'Você acredita que todos devem responder pelos próprios atos.'
      },
      {
        id: 3,
        questionId: 6,
        text: 'Vou embora e deixo que ele decida seu próprio destino.',
        heroPoints: 1,
        henchPoints: 2,
        feedback: 'Você prefere não assumir a responsabilidade por seu inimigo.'
      },
      {
        id: 4,
        questionId: 6,
        text: 'Acabo definitivamente com a ameaça.',
        heroPoints: 0,
        henchPoints: 3,
        feedback: 'Você acredita que algumas ameaças nunca merecem uma segunda chance.'
      }
    ]
  },
  {
    id: 7,
    category: QuestionCategory.AMBITION,
    question:
      'Com o passar dos anos, seus poderes continuam evoluindo. Você percebe que nenhum exército, governo ou herói seria capaz de derrotá-lo. O futuro da humanidade depende apenas da decisão que tomar agora.',
    answers: [
      {
        id: 1,
        questionId: 7,
        text: 'Continuo protegendo o mundo sem esperar nada em troca.',
        heroPoints: 3,
        henchPoints: 0,
        feedback: 'Você entende que poder existe para servir, não para governar.'
      },
      {
        id: 2,
        questionId: 7,
        text: 'Aceito aconselhar os líderes, mas sem controlá-los.',
        heroPoints: 2,
        henchPoints: 1,
        feedback: 'Você prefere influenciar pelo exemplo, não pela força.'
      },
      {
        id: 3,
        questionId: 7,
        text: 'Uso minha influência para garantir que tudo aconteça do meu jeito.',
        heroPoints: 1,
        henchPoints: 2,
        feedback: 'Você acredita que seus objetivos justificam controlar os acontecimentos.'
      },
      {
        id: 4,
        questionId: 7,
        text: 'Assumo o controle do mundo. Ninguém pode me impedir.',
        heroPoints: 0,
        henchPoints: 3,
        feedback: 'O poder deixou de ser um meio e tornou-se seu objetivo.'
      }
    ]
  },
  {
    id: 8,
    category: QuestionCategory.RESPONSIBILITY,
    question:
      'Após anos protegendo a humanidade, cientistas desenvolvem uma tecnologia capaz de prever praticamente todos os crimes antes que aconteçam. Porém, para funcionar, ela monitorará permanentemente toda a população. Você apoia essa decisão?',
    answers: [
      {
        id: 1,
        questionId: 8,
        text: 'Não. A liberdade é mais importante.',
        heroPoints: 3,
        henchPoints: 0,
        feedback: 'Você acredita que proteger as pessoas nunca deve custar sua liberdade.'
      },
      {
        id: 2,
        questionId: 8,
        text: 'Apenas sob rígido controle e fiscalização.',
        heroPoints: 2,
        henchPoints: 1,
        feedback: 'Você procura equilibrar segurança e direitos individuais.'
      },
      {
        id: 3,
        questionId: 8,
        text: 'Se reduzir o crime, vale o sacrifício.',
        heroPoints: 1,
        henchPoints: 2,
        feedback: 'Os resultados parecem justificar algumas limitações.'
      },
      {
        id: 4,
        questionId: 8,
        text: 'Sim. Quanto mais controle, melhor.',
        heroPoints: 0,
        henchPoints: 3,
        feedback: 'Você acredita que ordem é mais importante do que liberdade.'
      }
    ]
  },
  {
    id: 9,
    category: QuestionCategory.LEADERSHIP,
    question:
      'Sua equipe captura um criminoso extremamente perigoso. Alguns acreditam que ele jamais poderá ser preso novamente. A decisão final sobre seu destino será apenas sua.',
    answers: [
      {
        id: 1,
        questionId: 9,
        text: 'Ele deve responder perante a justiça.',
        heroPoints: 3,
        henchPoints: 0,
        feedback: 'Você acredita que ninguém está acima da lei.'
      },
      {
        id: 2,
        questionId: 9,
        text: 'Mantê-lo preso permanentemente é a melhor solução.',
        heroPoints: 2,
        henchPoints: 1,
        feedback: 'Você prefere impedir novos riscos sem ultrapassar certos limites.'
      },
      {
        id: 3,
        questionId: 9,
        text: 'Exilo o criminoso para que nunca mais retorne.',
        heroPoints: 1,
        henchPoints: 2,
        feedback: 'Você procura uma solução prática, mesmo que controversa.'
      },
      {
        id: 4,
        questionId: 9,
        text: 'Elimino a ameaça definitivamente.',
        heroPoints: 0,
        henchPoints: 3,
        feedback: 'Para você, algumas decisões dispensam julgamento.'
      }
    ]
  },
  {
    id: 10,
    category: QuestionCategory.DESTINY,
    question:
      'A batalha terminou. O mundo inteiro acompanha sua última declaração. Sua história será lembrada pelas próximas gerações. Como deseja ser lembrado?',
    answers: [
      {
        id: 1,
        questionId: 10,
        text: 'Como alguém que inspirou esperança.',
        heroPoints: 3,
        henchPoints: 0,
        feedback: 'Seu maior legado é mostrar que sempre existe uma escolha melhor.'
      },
      {
        id: 2,
        questionId: 10,
        text: 'Como alguém que fez o necessário para proteger todos.',
        heroPoints: 2,
        henchPoints: 1,
        feedback: 'Você aceita carregar o peso das decisões difíceis.'
      },
      {
        id: 3,
        questionId: 10,
        text: 'Como alguém que nunca permitiu ser desafiado.',
        heroPoints: 1,
        henchPoints: 2,
        feedback: 'Respeito e poder caminham lado a lado na sua visão.'
      },
      {
        id: 4,
        questionId: 10,
        text: 'Como alguém que conquistou tudo o que desejou.',
        heroPoints: 0,
        henchPoints: 3,
        feedback: 'Seu legado é medido pelas conquistas, não pelos sacrifícios.'
      }
    ]
  }
];