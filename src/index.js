import React, {useState} from "react";
import ReactDom from "react-dom";
import PersonUseState from "./components/person(useState)";

const App = () => {
  return (
    <>
      <PersonUseState />
    </>
  );
};


ReactDom.render(<App />, document.getElementById('root'));