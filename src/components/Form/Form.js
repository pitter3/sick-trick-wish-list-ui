import "./Form.css"
import { useState } from "react"




function Form({addTrick}) {
const [stance, setStance] = useState("");
const [name, setName] = useState("");
const [obstacle, setObstacle] = useState("");
const [tutorial, setTutorial] = useState("");

function submitTrick(event) {
  event.preventDefault()
  const newTrick = {
      id: Date.now(),
      stance,
      name,
      obstacle,
      tutorial
  }
  addTrick(newTrick)
  clearInput()
}
const clearInput = () => {
  setStance("")
  setName("")
  setObstacle("")
  setTutorial("")
}

return (
  <div className="Form">
    <form>
      <input
        type="text"
        placeholder="Stance"
        name="stance"
        value={stance}
        onChange={(event) => setStance(event.target.value)}
      />

      <input
        type="text"
        placeholder="Name of Trick"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="text"
        placeholder="Obstacle"
        name="obstacle"
        value={obstacle}
        onChange={(event) => setObstacle(event.target.value)}
      />

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