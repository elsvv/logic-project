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
    title: "Построение таблицы истинности, СДНФ, СКНФ, полином Жегалкина",
    img: zhekalkin,
    text: "Калькулятор для таблиц истинности. Он может строить таблицу истинности по функции или двоичному вектору, строит СКНФ, СДНФ, полином Жегалкина (методами Паскаля, треугольника, неопределённых коэффициентов), карту Карно, минимизирует ДНФ и КНФ, ищет фиктивные переменные, определяет принадлежность функции к каждому из пяти классов Поста. На сайте есть видеоинструкция к калькулятору.",
    link: "https://programforyou.ru/calculators/postroenie-tablitci-istinnosti-sknf-sdnf"
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
  {
    title: "Logic Calculator: Truth Tables",
    img: logicCalc,
    text: "Калькулятор строит таблицы истинности и выводит значение для всех связок или только значение главного знака формулы. В калькуляторе есть интерактивное дополнение: фиолетовый монстр и утка. Чтобы построить таблицу, нужно нажать на утку. Чтобы стереть один знак, нужно нажать на монстра, а чтобы стереть всю формулу – нажать на него дважды. Есть возможность вводить несколько формул через запятую.",
    link: "https://www.erpelstolz.at/gateway/TruthTable.html"
  },
  {
    title: "Таблица истинности",
    img: booleanTruthTable,
    text: "Калькулятор для таблиц истинности, который считает значения для главной формулы и для подформул. Есть возможность строить булевы уравнения из таблиц истинности.",
    link: "https://www.dcode.fr/boolean-truth-table"
  },
  {
    title: "Truth Table Generator (one more)",
    img: truthTableTool,
    text: "Калькулятор для таблиц истинности. Выводит значения переменных и главной формулы.",
    link: "https://web.stanford.edu/class/cs103/tools/truth-table-tool/"
  },
  {
    title: "Truth Table Generator (mobile app)",
    img: truthTableApp,
    text: "Калькулятор для таблиц истинности, который выводит значения для всех подформул и главной формулы. Доступен в App Store и Google Play.",
    link: "https://trutabgen.com/"
  },
  {
    title: "Калькулятор логических выражений",
    img: logicCalcSimple,
    text: "Калькулятор для упрощения логических выражений. Есть возможность вывода результата в разных форматах (ДНФ, КНФ и др.). Внизу дан справочный материал.",
    link: "https://www.dcode.fr/boolean-expressions-calculator"
  },
  {
    title: "PHI 251 FitchFX Proof Constructor",
    img: prover,
    text: "Прувер для фитчевского натурального вывода. Генерирует код вывода для LaTex.",
    link: "https://mrieppel.github.io/FitchFX/"
  },
  {
    title: "Natural deduction proof editor and checker",
    img: deductionProver,
    text: "Прувер для фитчевского натурального вывода. К калькулятору дана подробная инструкция и упражнения.",
    link: "https://mrieppel.github.io/FitchFX/"
  },
  {
    title: "Tableaux'method for S4",
    img: s4Prover,
    text: "Прувер для модальной логики в системе S4. Расписывает по шагам доказательство от противного с указанием правил для каждого шага.",
    link: "http://teachinglogic.univ-grenoble-alpes.fr/TableauxS4/index.php"
  },
  {
    title: "Tree Proof Generator",
    img: treeCalc,
    text: "Калькулятор аналитических таблиц. Можно проверять формулы классической логики высказываний, логики предикатов, модальной логики, выводимость из посылок.",
    link: "https://www.umsu.de/trees/"
  },
  {
    title: "Modal logic playground",
    img: modalLogic,
    text: "Прувер для модальной логики, который оценивает формулу в модели Крипке. Модель Крипке можно редактировать, добавляя оценку пропозициональных переменных и отношения достижимости на возможных мирах. Калькулятор позволяет варьировать количество пропозициональных переменных в возможных мирах от 1 до 5. Внизу страницы даны справочные материалы.",
    link: "https://rkirsling.github.io/modallogic/"
  },
  {
    title: "ELVis (Epistemic Logic Visualizer)",
    img: elvis,
    text: "Самый масштабный прувер для эпистемической логики: классической эпистемической логики (EL), логики публичных объявлений (PAL) и динамической эпистемической логики (DEL). Для каждой логики приводятся справочные материалы и калькулятор секвенциальных исчислений с возможностью выбора аксиом (T, D, B, 4, 5), а также код для LaTex’a. Есть возможность строить модели и оценивать на них формулы. Кроме того, для DEL приведен редактор для событийных моделей.",
    link: "https://nomuras.github.io/ELVis/"
  }
];
