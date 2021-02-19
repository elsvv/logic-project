export const preformulas = ["(p∧(q∨r))→¬(s|t)", "p→q→p"];

export const OPERATORS_BASE = {
  conjunction: "∧",
  disjunction: "∨",
  negation: "¬",
  implication: "→",
  equivalence: "≡",
  sdisjunction: "⊻",
  sheffer: "|",
  pierce: "↓",
};

export const OPERATORS = [
  { oper: OPERATORS_BASE.conjunction, tex: "\\land" },
  { oper: OPERATORS_BASE.disjunction, tex: "\\vee" },
  { oper: OPERATORS_BASE.negation, tex: "\\neg" },
  { oper: OPERATORS_BASE.implication, tex: "\\to" },
  { oper: OPERATORS_BASE.equivalence, tex: "\\equiv" },
  { oper: OPERATORS_BASE.sdisjunction, tex: "\\veebar" },
  { oper: OPERATORS_BASE.sheffer, tex: "\\shortmid" },
  { oper: OPERATORS_BASE.pierce, tex: "\\downarrow" },
];

export const VALUE_FORMAT = ["1/0", "T/F", "⊤/⊥"];
