import "./Form.css";
import { useState } from "react";

function Form({ addTrick }) {
  const [stance, setStance] = useState("");
  const [name, setName] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [tutorial, setTutorial] = useState("");

  function submitTrick(event) {
    event.preventDefault();
    const newTrick = {
      id: Date.now(),
      stance,
      name,
      obstacle,
      tutorial,
    };
    addTrick(newTrick);
    clearInput();
  }

  const clearInput = () => {
    setStance("");
    setName("");
    setObstacle("");
    setTutorial("");
  }

  return (
    <div className="Form">
      <form>
        <label>
          <select
            name="stance"
            value={stance}
            onChange={(event) => setStance(event.target.value)}
          >
            <option value="" disabled hidden>
              Choose Your Stance
            </option>
            <option value="Regular">Regular</option>
            <option value="Switch">Switch</option>
          </select>
        </label>

        <input
          type="text"
          placeholder="Name of Trick"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label>
          <select
            name="stance"
            value={stance}
            onChange={(event) => setStance(event.target.value)}
          >
            <option value="" disabled hidden>
              Choose your Obstacle
            </option>
            <option value="Flatground">Flatground</option>
            <option value="Ledge">Ledge</option>
            <option value="Rail">Rail</option>
            <option value="Stairs">Stairs</option>
            <option value="Pool">Pool</option>
          </select>
        </label>

        <input
          type="text"
          placeholder="Link to Tutorial"
          name="tutorial"
          value={tutorial}
          onChange={(event) => setTutorial(event.target.value)}
        />

        <br></br>

        <button onClick={(event) => submitTrick(event)}>Send It!</button>
      </form>
    </div>
  );
}

export default Form;
