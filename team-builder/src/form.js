import React from "react";

// const ogPeople = [
//   {
//     id: uuid(),
//     name: "John Snow",
//     email: "iknownothing@gmail.com",
//     role: "Almost saved the world "
//   },
//   {
//     id: uuid(),
//     name: "Ayra Stark",
//     email: "I-know-Death@gmail.com",
//     role: "Bad Bitch"
//   }
// ];

function Everyone(props) {
  //   const [friends, setFriends] = useState(ogPeople);
  //   const [newName, setName] = useState({
  //     name: "",
  //     email: "",
  //     role: ""
  //   });

  //   const inputChange = event => {
  //     const changed = event.target.name;
  //     const newValue = event.target.value;
  //     setName({
  //       ...newName,
  //       [changed]: newValue
  //     });
  //   };

  //   const formSubmit = event => {
  //     event.preventDefault();

  //     const newerName = {
  //       id: uuid(),
  //       name: newName.name,
  //       email: newName.email,
  //       role: newName.role
  //     };

  //     setFriends([...friends, newerName]);
  //   };

  return (
    <form onSubmit={props.formSubmit}>
      <label>
        {" "}
        Name:
        <input
          onChange={props.inputChange}
          value={props.newName.name}
          name="name"
        />
      </label>
      <br />
      <label>
        {""}
        Email:
        <input
          onChange={props.inputChange}
          value={props.newName.email}
          name="email"
        />
      </label>
      <br />
      <label>
        {""}
        Role:
        <input
          onChange={props.inputChange}
          value={props.newName.role}
          name="role"
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default Everyone;
