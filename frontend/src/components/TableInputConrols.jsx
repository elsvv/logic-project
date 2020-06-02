import React from "react";
import { Button } from "antd";
import TexInline from "./TexInline";

const operators = [
  { oper: "&", tex: "\\land" },
  { oper: "v", tex: "\\vee" },
  { oper: "~", tex: "\\neg" },
  { oper: ">", tex: "\\to" },
  { oper: "=", tex: "\\equiv" },
  { oper: "+", tex: "\\veebar" },
  { oper: "|", tex: "\\shortmid" },
  { oper: "!", tex: "\\downarrow" },
];

export default ({ handleClick }) => {
  return (
    <div className="controls__wrap">
      {operators.map(({ oper, tex }) => (
        <Button onClick={() => handleClick(oper)} key={oper}>
          <TexInline formula={tex} />
        </Button>
      ))}
    </div>
  );
};
