import React, { useState } from "react";
import Square from "./Squre";

function Board() {
  const [value, setValue] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function handleSquare(i) {
    if (calculateWinner(value) || value[i]) {
      return;
    }
    const nextSquare = value.slice();
    nextSquare[i] = isXNext ? "X" : "O";
    setValue(nextSquare);
    setIsXNext(!isXNext);
  }

  const winner = calculateWinner(value);
  let status;
  if (winner) {
    status = "Winner" + winner;
  } else {
    status = "NextPlayer" + (isXNext ? "X" : "O");
  }
  function calculateWinner(value) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (value[a] && value[a] === value[b] && value[a] === value[c]) {
        return value[a];
      }
    }
    return null;
  }
  const resetGame = () => {
    setValue(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-4 text-2xl font-bold">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {value.map((val, i) => (
          <Square key={i} value={val} onSquareClick={() => handleSquare(i)} />
        ))}
      </div>

      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default Board;
