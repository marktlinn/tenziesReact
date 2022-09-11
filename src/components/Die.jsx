import React from "react"

export default function Die(props) {
    const { value } = props;
    return (
        <div className="die">
            <span className="die-number">{value}</span>
        </div>
    )
}