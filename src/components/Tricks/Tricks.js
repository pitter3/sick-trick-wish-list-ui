import "./Tricks.css"
import Card from "../Card/Card"

function Tricks({tricks}) {

  const allCards = tricks.map((trick) => {
    return (
      <Card 
      key={trick.id}
      id={trick.id}
      name={trick.name}
      stance={trick.stance}
      obstacle={trick.obstacle}
      tutorial={trick.tutorial}
      />
    )
  })

  
  return (
    <div className="tricks">
      {allCards}
    </div>
  )
}

export default Tricks