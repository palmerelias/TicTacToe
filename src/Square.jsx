import React from "react"
import './App.css'

export default function Square(props) {
    return (
        <>
            <button className="square-buttons" onClick={props.clicked}>{props.value}</button>
        </>
    )
}