import React, {useState} from "react";
import ReactDom from "react-dom";
import PersonUseState from "./components/person(useState)";
import Child, {MyContext} from "./components/use-context";
import {UseEffectApp} from "./components/use-effect";

const App = () => {
  return (
    <>
      <PersonUseState />
      <hr/>
      <MyContext.Provider value='значение в провайдере'>
        <Child />
      </MyContext.Provider>
      <hr/>
      <UseEffectApp />
    </>
  );
};


ReactDom.render(<App />, document.getElementById('root'));