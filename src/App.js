import React from "react";
import "./App.css";
import { Header, Home, About, Skills, Services, Qualifications } from "./components/index";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
      </main>
    </>
  );
}

export default App;
