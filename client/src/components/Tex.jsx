import React from 'react'
import MathJax from 'react-mathjax';

const Tex = ({ formula }) => {
  <MathJax.Provider>
    <MathJax.Node formula={ formula } />
  </MathJax.Provider>
}
export default Tex