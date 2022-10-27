import SkyrmsText from "./SkyrmsModel/SkyrmsText";
import DeGrootText from "./DeGrootModel/DeGrootText";
import SkyrmsModelInterface from "./SkyrmsModel/SkyrmsModelInterface"

export const modelsData = [
  {
    title: "Динамика Скёрмса",
    text: <SkyrmsText />,
    modelInterface: <SkyrmsModelInterface />
  },
  {
    title: "Модель де Гроота",
    text: <DeGrootText />
  },
  {
    title: "Перевод в обратную польскую запись",
    // text:
  },
  {
    title: "Силлогистический калькулятор",
    // text:
  },
  {
    title: "DEL → EL",
    // text:,
    link: "https://github.com/sekhelscribere/newparser"
  },
  {
    title: "Перевод МакКинси-Тарского",
    // text: ,
    link: <a href="" target="_blank" />
  }
]