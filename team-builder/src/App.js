import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

function App() {
  const [newName, setName] = useState({
    name: "",
    email: "",
    role: ""
  });

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
