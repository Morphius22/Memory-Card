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
        // console.log(data.results);
        setCharacters(data.results)
      })
  },[])
  
  return(
    <div className="gameBoard">
      
      {characters.length > 0 && (characters.map(character => {
        console.log("this is what characters is set to:")
        console.log(characters)
        console.log("this is what character is set to:")
        console.log(character)
        console.log("this is what character id is set to:")
        console.log(character.id)
        console.log("this is what character name is set to:")
        console.log(character.name)

        return <Card key={character.id} character={character}/>
      }))}
    </div>
  )
}