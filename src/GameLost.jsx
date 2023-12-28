export default function GameLost({setCharacterList, setRemovedCharacterList, setGameLost, setCurrentScore}) {
	function restartGame() {
		setRemovedCharacterList([]);
		setGameLost(false);
		setCurrentScore(0);
		fetch("https://rickandmortyapi.com/api/character/?page=2")
						.then(res => res.json())
						.then(data => {
								const allCharacters = data.results;
								const doubledCharacters = [...allCharacters, ...allCharacters];
								const shuffledCharacters = doubledCharacters.sort(() => Math.random() - 0.5);
								setCharacterList(shuffledCharacters);
						})
		console.log("restarting game");
		
		}
	
	// display a popup that says game lost with options to restart
	return (
		<div className="gameLostCard">
			<h1>You Lost!</h1>
			<p>You clicked the same character twice. Try again!</p>
			<button onClick={restartGame}>Restart</button>
		</div>
	);
}
