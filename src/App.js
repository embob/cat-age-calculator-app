import "./App.css";
import React from "react";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App__title">💁‍♀️ Human to Cat age calculator 🐈</h1>
        <a href="https://github.com/embob/cat-age-calculator-app">View the code on <span className="icon icon--github">Github</span></a>
      </header>
      <Calculator />
    </div>
  );
}

export default App;
