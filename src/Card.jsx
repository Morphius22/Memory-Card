import { useEffect, useState } from "react"

export default function Card({character, characterList, setCharacterList}) {

  const handleCardClick = (characterId, character) => {
    const newCharacterList = [...characterList];
    const filteredCharacterList = newCharacterList.filter(character => characterId !== character.id);
    setCharacterList(filteredCharacterList);
  };

  return (
    <div className="card" onClick={() => handleCardClick(character.id, character)}>
          <img src={character.image} alt={character?.name}></img>
          <p>{character.name}</p>
    </div>
  )
}