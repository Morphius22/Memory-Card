export default function Card({ character, characterList, setCharacterList, setGameLost, gameLost, removedCharacterList, setRemovedCharacterList, setBestScore, setCurrentScore, currentScore }) {

  // Function to handle the click event on a character card
  function handleCardClick(character) {
    // Check if the character has already been removed
    if (removedCharacterList.some(c => c.id === character.id)) {
      // Set gameLost state to true if character has been removed before
      setGameLost(true);
      console.log('you lost!');
						setBestScore(currentScore);
      return;
    }

    // Find the index of the clicked character in the characterList array
    const index = characterList.findIndex((c) => c.id === character.id);
    console.log(`index: ${index}`);
    if (index !== -1) {
      // If the character exists in characterList, remove it from the list and add it to removedCharacterList
      const clickedCharacter = characterList[index];
      console.log(clickedCharacter);
      const newCharacterList = [...characterList];
      newCharacterList.splice(index, 1);
      setCharacterList(newCharacterList);
      console.log("character removal is running");
      setRemovedCharacterList([...removedCharacterList, clickedCharacter]);
					 setCurrentScore(currentScore + 1);
    }

    // Log removedCharacterList, characterList, the clicked character, and gameLost state to console
    console.log("removed character list:");
    console.log(removedCharacterList);
    console.log("character list:");
    console.log(characterList);
    console.log(character);
    console.log(`this is gameLost: ${gameLost}`);
  }

  // Return the card UI with the character's image and name
  return (
    <div className="card" onClick={() => handleCardClick(character)}>
      <img src={character.image} alt={character?.name}></img>
      <p>{character.name}</p>
    </div>
  );
}