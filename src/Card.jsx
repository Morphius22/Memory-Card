import { useEffect, useState } from "react"

export default function Card({character}) {
  console.log("this is the character value within card")
  console.log(character)
  console.log("this is what character id is set to in card:")
  console.log(character.id)
  console.log("this is what character name is set to in card:")
  console.log(character.name)
  console.log("this is what character image is set to in card:")
  console.log(character.image)

  return (
    <div className="card">
          <img src={character.image} alt={character?.name}></img>
          <p>{character.name}</p>
    </div>
  )
}