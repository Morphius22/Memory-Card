import { useState } from 'react';
import './App.css'
import Header from './Header'
import Card from './Card'

export default function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  return (
    <main>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <div className="card-container">
        <Card />
      </div>
    </main>
  )
}

