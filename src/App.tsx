import React from "react";

import LoginPage from "pages/Login";

import "./App.css";

import { firebaseAuth } from "./firebaseApp";

function App() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
