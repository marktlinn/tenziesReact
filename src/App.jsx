import React from "react"
// import Confetti from "react-confetti"
import Die from "./components/Die"

function App() {
  const [dice, setDieNum] = React.useState(allNewDice())

// function to generate a random number between 1-6
  function allNewDice (){
    const nums =  []
      for(let i = 0; i<10; i++){
      nums.push(Math.floor(Math.random() * (6 - 1 + 1) + 1))
    } 
    return nums
  }
  function rollDice(){
    setDieNum(allNewDice());
  }


  const dieSet = dice.map(elem=> <Die value={elem}/>)
  console.log(dieSet)
  return (
    <main>
      <h1 className="titleText">Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div 
        className="dice-section">
          {dieSet}
      </div>
      <button
      onClick={rollDice}
      >Roll Dice</button>
    </main>

  )
}


export default App