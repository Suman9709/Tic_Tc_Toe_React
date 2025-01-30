import React, { useState } from "react";
// Styles
import "./tailwind.output.css";
import Board from "./Components/Board";
// import Square from "./Components/Squre";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-400">
      <Board />
    </div>
  );
};

export default App;
