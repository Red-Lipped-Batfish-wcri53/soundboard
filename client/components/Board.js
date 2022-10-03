import React, { useState } from 'react';
import Button from './Button';

// create a function to pull info from DB to create initial btnKey & sound state
const getBtnKeys = async () => {
  const state = await fetch('/');
  // edit state?
  return state;
}

const getSound = async () => {
  const state = await fetch('/');
  return state;
}

// create a function to make patch request to update database when we update state


function Board() {
  // pass evaluated result of getSound and getBtnKEys to useState for our initial state
  const [btnKey, changeKey] = useState(["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]);
  const [sound, changeSound] = useState(["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]);

  console.log(btnKey);
  console.log(sound);
  const board = []
  for (let i = 0; i < 9; i++) {
    board.push(<Button key={i} btnKeyVal={btnKey[i]} soundVal={sound[i]} />)
  }
  return (
    <div>
      <div className="bg-slate-400 py-2 px-2 border-b-8 border-slate-500 rounded-xl border">
        <h1 className="font-bold text-3xl text-center text-slate-300">SoundBoard</h1>
        <div className="grid grid-cols-3 gap-4">
          {board}
        </div>
      </div>
    </div>
  )
}

export default Board;