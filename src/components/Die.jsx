import React from "react"

export default function Die(props) {
    const { value, isHeld, holdDie } = props;
    return (
        <div 
            className={isHeld === true? 'die dieHeld': 'die'}
            onClick={holdDie}
            >
            <span className="die-number">{value}</span>
        </div>
    )
}