import React, { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import Everyone from "../src/form";

const ogPeople = [
  {
    id: uuid(),
    name: "John Snow",
    email: "iknownothing@gmail.com",
    role: "Almost saved the world "
  },
  {
    id: uuid(),
    name: "Ayra Stark",
    email: "I-know-Death@gmail.com",
    role: "The baddest "
  }
];

function App() {
  const [friends, setFriends] = useState(ogPeople);
  const [newName, setName] = useState({
    name: "",
    email: "",
    role: ""
  });

  const inputChange = event => {
    const changed = event.target.name;
    const newValue = event.target.value;
    setName({
      ...newName,
      [changed]: newValue
    });
  };

  const formSubmit = event => {
    event.preventDefault();

    const newerName = {
      id: uuid(),
      name: newName.name,
      email: newName.email,
      role: newName.role
    };

    setFriends([...friends, newerName]);
  };

  return (
    <div className="App">
      <Everyone
        inputChange={inputChange}
        newName={newName}
        formSubmit={formSubmit}
      />

      <h3>People:</h3>
      {friends.map(item => (
        <div key={item.id}>
          {item.name}
          <br />
          {item.email}
          <br />
          {item.role}
        </div>
      ))}
    </div>
  );
}

export default App;
