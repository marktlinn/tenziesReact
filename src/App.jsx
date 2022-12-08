import React from "react";
import Confetti from "react-confetti";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Footer from "./components/Footer";
function App() {
  const [dice, setDieNum] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [timer, setTimer] = React.useState(0);
  const [gameStarted, setGameStarted] = React.useState(false);
  const [score, setScore] = React.useState(() => {
    return JSON.parse(localStorage.getItem("score")) || 0;
  });

  //determined if the game is won: all dice are the same
  React.useEffect(() => {
    let won = dice.every(die => {
      if (die.isHeld === true && die.value === dice[0].value) {
        return true;
      }
    });
    if (won === true) {
      setTenzies(true);
      setGameStarted(false);
    }
  }, [dice]);

  //starts the timer if the game isn't won and has been started, otherwise stops the timer
  React.useEffect(() => {
    let interval = null;
    if (!tenzies && gameStarted === true) {
      interval = setInterval(() => {
        setTimer(prevCount => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      console.log("finished");
    }
    return () => {
      clearInterval(interval);
    };
  }, [gameStarted]);
  // setting the last score:
  React.useEffect(() => {
    if (tenzies === true) {
      if (timer <= score || score === 0) {
        console.log("setting new score in local storage: ", score);
        localStorage.setItem("score", JSON.stringify(timer));
        setScore(timer);
      }
    }
  }, [tenzies]);

  function newDie() {
    return {
      value: Math.floor(Math.random() * (6 - 1 + 1) + 1),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const nums = [];
    for (let i = 0; i < 10; i++) {
      nums.push(newDie());
    }
    return nums;
  }

  function holdDie(dieId) {
    setDieNum(prev =>
      prev.map(die => {
        return die.id === dieId ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }
  //Timer functions

  function rollDice() {
    if (!tenzies) {
      if (!gameStarted) {
        setGameStarted(true);
      }
      return setDieNum(
        dice.map(die => {
          return die.isHeld === true ? die : newDie();
        })
      );
    } else {
      if (tenzies === true) {
        setTenzies(false);
        setDieNum(allNewDice());
        console.log("game complete", timer);
        setTimer(0);
      }
    }
  }

  const dieSet = dice.map(elem => {
    return (
      <Die
        key={elem.id}
        value={elem.value}
        isHeld={elem.isHeld}
        holdDie={() => holdDie(elem.id)}
      />
    );
  });
  return (
    <div className="container">
      <main>
        {tenzies && <Confetti width={Window.innerWidth} />}
        <h1 className="titleText">Tenzies</h1>
        <p className="text">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-section">{dieSet}</div>
        <button onClick={rollDice}>
          {(tenzies && "Play Again") || "Roll Dice"}
        </button>
        <div className="score-section">
          {score > 0 ? (
            <p className="score">
              <strong>Best Time: </strong> {score}
            </p>
          ) : (
            <p className="best-score">
              <strong>No Previous Best Time</strong>
            </p>
          )}
          <p className="score">
            <strong>Current Time: </strong>
            {timer}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
