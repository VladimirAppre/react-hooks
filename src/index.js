import React, {useState} from "react";
import ReactDom from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  );
};

const HookSwitcher = () => {
  const [color, setColor] = useState('white');

  return (
    <div style={{padding: '10px', backgroundColor: color}}>
      <button onClick={() => {
        setColor('black')
      }}>Dark
      </button>
      <button onClick={() => {
        setColor('white')
      }}>Light
      </button>
    </div>
  );
};

ReactDom.render(<App/>, document.getElementById('root'));