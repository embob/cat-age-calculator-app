import React from "react";
import "./App.scss";
import { Calculator } from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <main className="app">
      <Header />
      <Calculator />
      <Footer />
    </main>
  );
}

export default App;
