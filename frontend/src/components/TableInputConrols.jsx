import React from 'react';
import { Button } from 'antd';
import TexInline from './TexInline';
import { OPERATORS } from '../config';

export default ({ handleClick }) => {
  return (
    <div className='controls__wrap'>
      {OPERATORS.map(({ oper, tex }) => (
        <Button onClick={() => handleClick(oper)} key={oper}>
          <TexInline formula={tex} />
        </Button>
      ))}
    </div>
  );
};
