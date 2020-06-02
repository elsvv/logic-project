import React from "react";
import { Context, Node } from "react-mathjax2";

export default ({ formula }) => (
  <Context input="tex">
    <Node inline>{formula}</Node>
  </Context>
);
