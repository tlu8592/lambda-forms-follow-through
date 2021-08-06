import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(password);
  };

  return (
    <div className="App">
      {console.log({ name })}
      {console.log({ password })}
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
