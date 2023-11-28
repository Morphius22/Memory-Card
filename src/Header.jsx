export default function Header({currentScore, bestScore}) {
  return (
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
  )
}