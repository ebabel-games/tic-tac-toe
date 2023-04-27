import './CurrentPlayer.css';

function CurrentPlayer({ currentPlayer }) {
  return (
    <p className="current-player">Current Player: {currentPlayer}</p>
  )
}

export default CurrentPlayer;