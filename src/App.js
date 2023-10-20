import { useState } from "react";
import "./App.css";

const App = function () {
  const [dice, setDice] = useState(0);
  const [imagePath, setImagePath] = useState(null);
  const rollDice = () => {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    setDice(randomNumber);
    console.log(randomNumber);
    setImagePath(`dice-${dice}.png`);
    const diceEl = document.querySelector(".dice");
    diceEl.classList.remove("hidden");
  };
  return (
    <main>
      <section className="player player--0 player--active">
        <h2 className="name" id="name--0">
          Player 1
        </h2>
        <p className="score" id="score--0">
          43
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">
            0
          </p>
        </div>
      </section>
      <section className="player player--1">
        <h2 className="name" id="name--1">
          Player 2
        </h2>
        <p className="score" id="score--1">
          24
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--1">
            0
          </p>
        </div>
      </section>

      <img src={imagePath} alt="playing-dice" className="dice hidden" />
      <button className="btn btn--new">🔄 New game</button>
      <button className="btn btn--roll" onClick={rollDice}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold">📥 Hold</button>
    </main>
  );
};

export default App;
