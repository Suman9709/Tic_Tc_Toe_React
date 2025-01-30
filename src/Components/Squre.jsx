import React from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="w-24 h-24 flex items-center justify-center border-4 border-gray-600 text-4xl font-bold text-white"
      style={{
        backgroundColor: value
          ? value === "X"
            ? "#f57c00"
            : "#388e3c"
          : "#ffffff",
      }}
    >
      {value}
    </button>
  );
}

export default Square;
