import React, {useState} from "react";
import ReactDom from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwitcher/>
    </div>
  );
};

const HookSwitcher = () => {
  const [color, setColor] = useState('gray');
  const [fontSize, setFontSize] = useState(14);

  return (
    <div style={{
      padding: '10px',
      backgroundColor: color,
      fontSize: `${fontSize}px`
    }}>
      Use State hook
      <button
        onClick={() => {
          setColor('gray')
        }}>Dark
      </button>
      <button
        onClick={() => {
          setColor('white')
        }}>Light
      </button>
      <button
        onClick={() => setFontSize((s) => s + 2)}>
        + 2px Size
      </button>
      <hr/>
    </div>

  );
};

ReactDom.render(<App/>, document.getElementById('root'));