import React, {useState} from "react";
import ReactDom from "react-dom";
import PersonUseState from "./components/person(useState)";
import Child, {MyContext} from "./components/use-context";
import {UseEffectApp} from "./components/use-effect";
import PlanetInfoMyHook from "./components/hookPlanetInfo";
import {UseEffectApp2} from "./components/useCallBack-UseMemo";

const App = () => {
  return (
    <>
      <PersonUseState />
      <hr/>
      <MyContext.Provider value='значение в провайдере'>
        <Child />
      </MyContext.Provider>
      <hr/>
      {/*<UseEffectApp />*/}
      <hr/>
      <PlanetInfoMyHook id={1} />
      <hr/>
      <UseEffectApp2/>
    </>
  );
};


ReactDom.render(<App />, document.getElementById('root'));