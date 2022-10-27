import React from "react";
import TeX from "@matejmazur/react-katex";
import MathJax from 'react-mathjax';

// const TexInline = ({ formula }) => <TeX>{formula}</TeX>;

const TexInline = ({ tex }) => {
  <MathJax.Node inline formula={ tex } />
}

export default TexInline;
