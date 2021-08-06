import { useState } from "react";
import "./styles.css";

export default function App() {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    password: ""
  });

  const handleChange = (event) => {
    setUser({ name: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setUser({ password: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user.name);
    console.log(user.password);
  };

  return (
    <div className="App">
      {console.log(user)}
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Username:
          <input type="text" onChange={(event) => handleChange(event)} />
        </label>
        <label>
          Password:
          <input
            type="text"
            onChange={(event) => handlePasswordChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}
