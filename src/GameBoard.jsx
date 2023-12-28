import { useState, useEffect } from "react";
import Card from "./Card";
import GameLost from "./GameLost";

export default function GameBoard() {
  const [characterList, setCharacterList] = useState([]);
  const [gameLost, setGameLost] = useState(false);
  const [removedCharacterList, setRemovedCharacterList] = useState([]);
	 const [currentScore, setCurrentScore] = useState(0);
	 const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=2")
      .then(res => res.json())
      .then(data => {
        console.log(`return from api fetch: ${data.results}`)
        const allCharacters = data.results;
        const doubledCharacters = [...allCharacters, ...allCharacters];
        const shuffledCharacters = doubledCharacters.sort(() => Math.random() - 0.5);
        setCharacterList(shuffledCharacters);
        console.log(gameLost);
      })
  },[])
  
  return(
			<div>
				<header className="header">
						<div className="headerColumn">
								<h1>Memory Card Game</h1>
								<p>Get points by clicking on an image but don't click on any more than once!
								</p>
						</div>
						<div className="headerColumn">
								<p>Current Score: {currentScore}</p>
								<p>Best Score: {bestScore}</p>
						</div>      
				</header>
      {gameLost && <GameLost setCharacterList={setCharacterList} setGameLost={setGameLost} setRemovedCharacterList={setRemovedCharacterList} setCurrentScore={setCurrentScore} />}
      {!gameLost &&       <div className="gameBoard">
        {characterList.length > 0 && (characterList.map((character,index) => {
          return <Card key={index} character={character} characterList={characterList} setCharacterList={setCharacterList} setGameLost={setGameLost} gameLost={gameLost} removedCharacterList={removedCharacterList} setRemovedCharacterList={setRemovedCharacterList} setBestScore={setBestScore} setCurrentScore={setCurrentScore} currentScore={currentScore}/>
        }))}
      </div>}
    </div>
  )
}