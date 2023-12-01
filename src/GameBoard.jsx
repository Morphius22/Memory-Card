import { useState, useEffect } from "react";
import Card from "./Card";

export default function GameBoard() {
  const [characters, setCharacters] = useState([]);
  const [gameWon, setGameWon] = useState();
  const [characterCount, setCharacterCount] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=2")
      .then(res => res.json())
      .then(data => {
        console.log(`return from api fetch: ${data.results}`)
        setCharacters(data.results)
      })
  },[])
  
  return(
    <div className="gameBoard">
      
      {characters.length > 0 && (characters.map(character => {
        return <Card key={character.id} character={character}/>
      }))}
    </div>
  )
}