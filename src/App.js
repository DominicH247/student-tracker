import React from "react";
import "./App.css";
import Title from "./components/Title";
import StudentList from "./components/StudentList";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Router>
        <Home path="/" />
        <StudentList path="/students/*" />
      </Router>
    </div>
  );
}

export default App;
