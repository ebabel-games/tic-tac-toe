import './App.css';
import CurrentPlayer from './components/CurrentPlayer';
import PlayerScores from './components/PlayerScores';
import MyButton from './components/MyButton';
import { useReducer, createContext } from 'react';

function App() {
  const [players, dispatch] = useReducer(
    playersReducer,
    initialPlayers
  );

  function handleToggle() {
    dispatch({
      type: 'toggle'
    });
  }

  return (
    <form className="App" onSubmit={(e) => { e.preventDefault() }}>
      <h1 className="title">Tic Tac Toe</h1>
      <CurrentPlayer currentPlayer={players.currentPlayer} />
      {[0,1,2].map(r => (
        <p className='row' key={r}>
          {[0,1,2].map(i => <MyButton key={i} className="button" players={players} onToggle={handleToggle} />)}
        </p>
      ))}
      <PlayerScores />
    </form>
  );
}

function playersReducer(players, action) {
  if (!action || !action.type) throw Error(`Incorrectly formated action: ${action.toString()}`);

  switch (action.type) {
    case 'toggle': {
      let currentPlayer = players.currentPlayer += 1;
      if (currentPlayer > players.allPlayers.length) currentPlayer = 1;
      return {
        ...players,
        currentPlayer: currentPlayer,
        allPlayers: players.allPlayers
      }
    }
    default: {
      throw Error(`Unexpected action type: ${action.type}`);
    }
  }
}

export const initialPlayers = {
  currentPlayer: 1,
  allPlayers: [
    { id: 1, score: 0 },
    { id: 2, score: 0 },
  ],
};

export const PlayerContext = createContext(initialPlayers);

export default App;
