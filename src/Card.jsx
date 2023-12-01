import { useEffect, useState } from "react"

export default function Card({character}) {
  return (
    <div className="card">
          <img src={character.image} alt={character?.name}></img>
          <p>{character.name}</p>
    </div>
  )
}