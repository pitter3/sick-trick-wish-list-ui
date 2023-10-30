import "./Card.css"

function Card({id, name, stance, obstacle, tutorial}) {
  return (
    <div className="card">
      <p>{name}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to Tutorial:<br></br>{tutorial}</p>
    </div>
  )
}

export default Card