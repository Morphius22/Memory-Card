import { useState, useEffect } from "react";
import Card from "./Card";

export default function GameBoard() {
  const [characterList, setCharacterList] = useState([]);
  const [gameWon, setGameWon] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=2")
      .then(res => res.json())
      .then(data => {
        console.log(`return from api fetch: ${data.results}`)
        setCharacterList(data.results)
      })
  },[])
  
  return(
    <div className="gameBoard">
      {characterList.length > 0 && (characterList.map(character => {
        return <Card key={character.id} character={character} characterList={characterList} setCharacterList={setCharacterList}/>
      }))}
    </div>
  )
}