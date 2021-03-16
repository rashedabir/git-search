import React from "react";
import github from "./img/github.jpg";
import "./App.css";
import Profile from "./component/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={github} className="App-logo" alt="logo" />
      </header>
      <Profile />
    </div>
  );
}

export default App;
