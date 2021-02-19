export default (str) => {
  str = str.replace(/&|\^| and/gi, '∧');
  str = str.replace(/ v | or/gi, ' ∨ '); // 'v' letter => or symbol
  str = str.replace(/~| not/gi, '¬');
  str = str.replace(/<->| iff/gi, '↔');
  str = str.replace(/->/g, '→');
  str = str.replace(/\[\]/g, '□');
  str = str.replace(/<>|◊/g, '◇');
  str = str.replace(/\(A([s-z])\)/, '∀$1'); // (Ax) => ∀x
  str = str.replace(/\(E([s-z])\)/, '∃$1'); // (Ex) => ∃x
  str = str.replace(/(?:^|\W)\(([s-z])\)/, '∀$1'); // (x) => ∀x, but not f(x) => f∀x
  str = str.replace(/\\?forall[\{ ]?\}?/g, '∀');
  str = str.replace(/\\?exists[\{ ]?\}?/g, '∃');
  str = str.replace(/(\\neg|\\lnot)[\{ ]?\}?/g, '¬');
  str = str.replace(/(\\vee|\\lor)[\{ ]?\}?/g, '∨');
  str = str.replace(/(\\wedge|\\land)[\{ ]?\}?/g, '∧');
  str = str.replace(/(\\to|\\rightarrow)[\{ ]?\}?/g, '→');
  str = str.replace(/\\leftrightarrow[\{ ]?\}?/g, '↔');
  str = str.replace(/\\[Bb]ox[\{ ]?\}?/g, '□');
  str = str.replace(/\\[Dd]iamond[\{ ]?\}?/g, '◇');
  return str;
};
