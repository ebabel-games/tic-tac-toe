import { useContext } from "react";
import PlayerContext from "../PlayerContext";
import './CurrentPlayer.css';

function CurrentPlayer() {
  const context = useContext(PlayerContext);

  return (
    <p className="current-player">Current Player: {context.currentPlayer}</p>
  )
}

export default CurrentPlayer;