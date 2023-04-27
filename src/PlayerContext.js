import { createContext } from 'react';

const PlayerContext = createContext({
  currentPlayer: 1,
  players: [
    {
      id: 1,
      score: 0
    },
    {
      id: 2,
      score: 0
    }
  ]
});

export default PlayerContext;
