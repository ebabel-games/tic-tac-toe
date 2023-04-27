import './App.css';
import CurrentPlayer from './components/CurrentPlayer';
import PlayerScores from './components/PlayerScores';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <h1 className="title">Tic Tac Toe</h1>
      <Row />
      <Row />
      <Row />
      <CurrentPlayer />
      <PlayerScores />
    </div>
  );
}

export default App;
