import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [value, setValue] = useState('stretch');
  return (
    <>
      <Radio.Group
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }}
        style={{ marginBottom: 16 }}
      >
        <Radio value='stretch' >左上角</Radio>
        <Radio value='center-1'>居中对齐</Radio>
        <Radio value='right-1'>右上角</Radio>
        <Radio value='left-2'>垂直居中-左</Radio>
        <Radio value='center-2'>垂直居中</Radio>
        <Radio value='right-2'>垂直居中-右</Radio>
        <Radio value='left-3' >底部-左</Radio>
        <Radio value='center-3' >底部居中</Radio>
        <Radio value='right-3' >底部-右</Radio>
      </Radio.Group>

      <div className={`container ${value}`} >
        <div className="dot"></div>
      </div>
    </>
  );
};

export default () => <App />;