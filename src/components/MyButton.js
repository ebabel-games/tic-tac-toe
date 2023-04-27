import { useState, useContext } from 'react';
import './MyButton.css';

function MyButton({ players, onToggle }) {
  const [face, setFace] = useState('');

  const handleClick = () => {
    setFace(() => {
      if (face) return face; // That face has already been set by player 1 or 2.

      // Toggle player 1 to 2 and vice versa.
      //player.currentPlayer = player.currentPlayer === 1 ? 2 : 1;
      onToggle();

      return players.currentPlayer % 2 === 0 ? "O" : "X";
    });
  }
  
  return (
    <button className='button' onClick={handleClick}>
      {face || ''}
    </button>
  );
}

export default MyButton;