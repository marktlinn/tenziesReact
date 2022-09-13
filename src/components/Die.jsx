import React from "react"

export default function Die(props) {
    const { value, isHeld, holdDie } = props;
    return (
        <div 
            className={isHeld === true ?'diceSection dieHeld' : 'diceSection'}
            onClick={holdDie}
        >
            {value===1 && 
                <div 
                className={isHeld===true? 'die die-one dieHeld' : "die die-one"}>
                    <span className="dot"></span>
                </div>}
            
            {value===2 && 
                <div 
                className={isHeld===true? 'die die-two dieHeld' : "die die-two"}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>}

            {value===3 && 
            <div 
            className={isHeld===true? 'die die-three dieHeld' : "die die-three"}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
            </div>}

            {value===4 && 
            
            <div 
            className={isHeld===true? 'die die-four dieHeld' : "die die-four"}>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>}

            {value===5 && 
            
            <div 
            className={isHeld===true? 'die die-five dieHeld' : "die die-five"}>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div class="column">
                    <span class="dot"></span>
                </div>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>}
            {value===6 && 
            
            <div 
            className={isHeld===true? 'die die-six dieHeld' : "die die-six"}>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>}
        </div>
    )
}