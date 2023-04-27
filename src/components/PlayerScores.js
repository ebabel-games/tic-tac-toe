import { useContext } from "react";
import PlayerContext from "../PlayerContext";
import './PlayerScores.css';

function PlayerScores() {
  const context = useContext(PlayerContext);

  const players = context.players
    .map(player => <li key={player.id}>Player {player.id}: {player.score} point{player.score > 1 ? 's' : ''}</li>);

  return <><h2 className="score-title">Scores</h2><ul className="scores">{players}</ul></>;
}

export default PlayerScores;