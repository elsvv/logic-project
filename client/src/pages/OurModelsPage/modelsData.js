import SkyrmsText from "./SkyrmsModel/SkyrmsText";
import DeGrootText from "./DeGrootModel/DeGrootText";
import RevPolish from "./RevPolish";
import SyllogCalc from "./SyllogCalc";

export const modelsData = [
  {
    title: "Динамика Скёрмса",
    text: <SkyrmsText />,
    link: "https://vlrshvchnk.github.io/skyrms-model/",
    // modelInterface: <SkyrmsModelInterface />
  },
  {
    title: "Модель де Гроота",
    text: <DeGrootText />,
    link: "https://vlrshvchnk.github.io/degroot-model/",
  },
  {
    title: "Перевод в обратную польскую запись",
    text: <RevPolish />,
    link: "https://vanhalsteen.github.io/Polish-notation/revpolish.html",
  },
  {
    title: "Силлогистический калькулятор",
    text: <SyllogCalc />,
    link: "https://vanhalsteen.github.io/syllogistic-calculator/syllogismhtml.html",
  },
  // {
  //   title: "DEL → EL",
  //   // text:,
  //   link: "https://github.com/sekhelscribere/newparser"
  // },
  // {
  //   title: "Перевод МакКинси-Тарского",
  //   // text: ,
  //   link: <a href="" target="_blank" />
  // }
];
