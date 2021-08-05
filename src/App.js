import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState();

  return (
    <div className="App">
      {console.log(name)}
      <form>
        <label>
          Username:
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
