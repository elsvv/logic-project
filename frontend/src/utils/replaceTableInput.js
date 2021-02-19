import { OPERATORS_BASE } from "../config";

export default (str) => {
  str = str.replace(
    /&|\^| ?and|(\\wedge|\\land)[\{ ]?\}?/gi,
    OPERATORS_BASE.conjunction
  );
  str = str.replace(
    / v | or|(\\vee|\\lor)[\{ ]?\}?/gi,
    OPERATORS_BASE.disjunction
  );
  str = str.replace(/\\veebar[\{ ]?\}?/gi, OPERATORS_BASE.sdisjunction);
  str = str.replace(/\\shortmid[\{ ]?\}?/gi, OPERATORS_BASE.sheffer);
  str = str.replace(/\\downarrow[\{ ]?\}?/gi, OPERATORS_BASE.pierce);
  str = str.replace(
    /~| not|(\\neg|\\lnot)[\{ ]?\}?/gi,
    OPERATORS_BASE.negation
  );
  str = str.replace(
    /<->| ?iff|\\leftrightarrow[\{ ]?\}?/gi,
    OPERATORS_BASE.equivalence
  );
  str = str.replace(
    /->|(\\to|\\rightarrow)[\{ ]?\}?/gi,
    OPERATORS_BASE.implication
  );
  // str = str.replace(/\[\]/g, "□");
  // str = str.replace(/<>|◊/g, "◇");
  // str = str.replace(/\(A([s-z])\)/, "∀$1"); // (Ax) => ∀x
  // str = str.replace(/\(E([s-z])\)/, "∃$1"); // (Ex) => ∃x
  // str = str.replace(/(?:^|\W)\(([s-z])\)/, "∀$1"); // (x) => ∀x, but not f(x) => f∀x
  // str = str.replace(/\\?forall[\{ ]?\}?/g, "∀");
  // str = str.replace(/\\?exists[\{ ]?\}?/g, "∃");
  // str = str.replace(/(\\neg|\\lnot)[\{ ]?\}?/g, OPERATORS_BASE.negation);
  // str = str.replace(/(\\vee|\\lor)[\{ ]?\}?/g, OPERATORS_BASE.disjunction);
  // str = str.replace(/(\\wedge|\\land)[\{ ]?\}?/g, OPERATORS_BASE.conjunction);
  // str = str.replace(/(\\to|\\rightarrow)[\{ ]?\}?/g, "→");
  // str = str.replace(/\\leftrightarrow[\{ ]?\}?/g, OPERATORS_BASE.equivalence);
  // str = str.replace(/\\[Bb]ox[\{ ]?\}?/g, "□");
  // str = str.replace(/\\[Dd]iamond[\{ ]?\}?/g, "◇");
  return str;
};
