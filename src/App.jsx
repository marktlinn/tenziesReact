import React from "react"
// import Confetti from "react-confetti"
import Die from "./components/Die"

function App() {
  return (
    <main>
      <h1 className="titleText">Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-section">
        <Die num={1}/>
        <Die num={1}/>
        <Die num={1}/>
        <Die num={1}/>
        <Die num={1}/>
        <Die num={1}/>
        <Die num={1}/>
        <Die num={1}/>
        <Die num={1}/>
        <Die num={1}/>

      </div>
    </main>

  )
}


export default App