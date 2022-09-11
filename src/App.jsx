import React from "react"
// import Confetti from "react-confetti"
import Die from "./components/Die"
import {nanoid} from 'nanoid'

function App() {
  const [dice, setDieNum] = React.useState(allNewDice())
// function to generate a random number between 1-6
  function allNewDice (){
    const nums =  []
      for(let i = 0; i<10; i++){
      nums.push({
        value: Math.floor(Math.random() * (6 - 1 + 1) + 1), 
        isHeld: false,
        id: nanoid()
      })
    } 
    return nums
  }
  
  function holdDie(dieId){
    setDieNum(prev=> prev.map(die=> {
      return die.id === dieId ? {...die, isHeld: !die.isHeld} : die; 
    }))
  }

  function rollDice(){
    setDieNum(allNewDice());
  }

console.log(dice)
  const dieSet = dice.map(elem=> {
  return <Die 
  key={elem.id}
  value={elem.value}
  isHeld={elem.isHeld}
  holdDie={()=>holdDie(elem.id)}
  />
})
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