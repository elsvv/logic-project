import React from "react";
import TeX from "@matejmazur/react-katex";
import MathJax from 'react-mathjax';
import Autolatex from "react-autolatex";

const TexInline = ({ formula }) => <TeX>{formula}</TeX>;

// const TexInline = ({ tex }) => {
//   <MathJax.Provider>
//     <MathJax.Node inline formula={ tex } />
//   </MathJax.Provider>
// }

export default TexInline;
