import { useEffect, useState } from "react"

export default function Card() {

  const [character, setCharacter] = useState({})

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/2")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const character = data;
        setCharacter(character)
      })
  },[])

  return (
    <div className="card">
      <img src={character.image} alt={character.name}></img>
      <p>{character.name}</p>
    </div>
  )
}