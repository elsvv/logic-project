import booleanTruthTable from "../assets/boolean-truth-table.png";
import deductionProver from "../assets/deduction-prover.png";
import elvis from "../assets/elvis.png";
import historyOfPhilosophy from "../assets/history-of-philosophy.png";
import llfpLogo from "../assets/llfp-logo.png";
import logicCalcSimple from "../assets/logic-calc-simple.png";
import logicCalc from "../assets/logic-calc.png";
import modalLogic from "../assets/modal-logic.png";
import philosophersWeb from "../assets/philosophers-web.png";
import philosophy_of_mind from "../assets/philosophy_of_mind.png";
import prover from "../assets/prover.png";
import s4Prover from "../assets/s4-prover.png";
import sqema from "../assets/sqema.png";
import treeCalc from "../assets/tree-calc.png";
import truthTable2 from "../assets/truth-table-2.png";
import truthTableApp from "../assets/truth-table-app.png";
import truthTableGen from "../assets/truth-table-gen.png";
import truthTableTool from "../assets/truth-table-tool.png";
import truthTable from "../assets/truth-table.png";
import zhekalkin from "../assets/zhekalkin.png";

export const modelsData = [
  {
    title: "Philosopher's Web",
    img: philosophersWeb,
    text: "Интерактивная карта философского знания, которая построена на основе Википедии. В карте есть множество метрик и параметров, благодаря которым можно по-разному визуализировать связи. Узлы в карте различаются по цвету (в зависимости от исторического периода) и размеру (в зависимости от количества связей узла с другими), данные параметры можно изменять. Кроме того, на сайте можно создавать собственные интерактивные карты, пройдя предварительную бесплатную регистрацию. Для собственного проекта доступны различные шаблоны, можно добавлять описание, тэги, импортировать информацию из других источников. ",
    link: "https://kumu.io/GOliveira/philosophers-web#map-b9Ts7W5r",
  },
  {
    title: "Philosophy of Mind, Interactive Mind Map",
    img: philosophy_of_mind,
    text: "Карта философии сознания представляет визуализацию иерархий концептов, идей и направлений в философии сознания. Карта составлена на основе статьи в Википедии, посвященной философии сознания. По карте нельзя перейти на внешние ссылки, чтобы ознакомиться с конкретной темой. ",
    link: "http://www.gogeometry.com/brain/philosophy_of_mind_mindmap.html",
  },
  {
    title: "History of Philosophy (formalized & visualised)",
    img: historyOfPhilosophy,
    text: "Интерактивный таймлайн с философами, упорядоченными по хронологии. Карта визуализирует связи между авторами и их идеями, которые представлены в виде краткого тезиса. Каждый тезис связан с тезисами других авторов: красным цветом обозначена критика, а зелёным – согласующиеся тезисы и расширяющие исходный.",
    link: "https://www.denizcemonduygu.com/philo/browse",
  },
  {
    title: "SQEMA",
    img: sqema,
    text: "Калькулятор, который сопоставляет модальным формулам формулы логики предикатов первого порядка; вычисляет является ли формула «салквистовой формулой» (подробнее про «салквистовые формулы» можно прочитать тут). Формулы первого порядка не всегда выводятся в сокращенном виде. 	",
    link: "https://store.fmi.uni-sofia.bg/fmi/logic/sqema/sqema_gwt_20180317_2/K45/SQEMA.html",
  },
  {
    title: "Truth Table Generator",
    img: truthTableGen,
    text: "Калькулятор для построения таблиц истинности. В нём есть несколько опций для вывода значений: 0/1, T/F или ⊤/⊥, и несколько вариантов для ввода будевых связок, который указаны под панелью ввода. Калькулятор может выводить либо всю таблицу, либо значение главных связок. Кроме того, калькулятор генерирует таблицу в виде текста, а также код для построения таблицы в LaTex’е. Есть возможность вводить несколько формул через запятую.",
    link: "http://mrieppel.net/prog/truthtable.html",
  },
  {
    title: "Таблица истинности",
    img: truthTable,
    text: "Калькулятор для таблиц истинности на основе Wolfram’а. Выводит значение для каждой переменной и главного знака формулы.",
    link: "https://allcalc.ru/node/745",
  },
  {
    title: "Truth Table Generator (LaTex)",
    img: truthTable2,
    text: "Калькулятор строит таблицы истинности для каждой подформулы. Есть возможность сгенерировать таблицу для LaTex, HTML, ASCII.",
    link: "https://cs.uwaterloo.ca/~cbright/logic/truthtable.php?formula=p%26%7Ep&output=latex",
  },
];
