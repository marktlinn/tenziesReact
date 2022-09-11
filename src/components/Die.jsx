import React from "react"

export default function Die(props) {
    const { num: value } = props;
    return (
        <div className="die">
            <span className="die-number">{value}</span>
        </div>
    )
}