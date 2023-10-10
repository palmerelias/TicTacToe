import React from "react"
import Square from "./Square"
import "./App.css"

export default function Board() {
    const [turn, setTurn] = React.useState(true)
    const [squares, setSquares] = React.useState(newSquares())
    const [winner, setWinner] = React.useState(false)


    React.useEffect(() => {
        
        if (squares[0].value && squares[0].value === squares[1].value && squares[0].value === squares[2].value) {
            setWinner(squares[0].value)
        }   if (squares[3].value && squares[3].value === squares[4].value && squares[3].value === squares[5].value) {
            setWinner(squares[3].value)
        }   if (squares[6].value && squares[6].value === squares[7].value && squares[6].value === squares[8].value) {
            setWinner(squares[6].value)
        }   if (squares[0].value && squares[0].value === squares[3].value && squares[0].value === squares[6].value) {
            setWinner(squares[0].value)
        }   if (squares[1].value && squares[1].value === squares[4].value && squares[1].value === squares[7].value) {
            setWinner(squares[1].value)
        }   if (squares[2].value && squares[2].value === squares[5].value && squares[2].value === squares[8].value) {
            setWinner(squares[2].value)
        }   if (squares[0].value && squares[0].value === squares[4].value && squares[0].value === squares[8].value) {
            setWinner(squares[0].value)
        }   if (squares[2].value && squares[2].value === squares[4].value && squares[2].value === squares[6].value) {
            setWinner(squares[2].value)
        }
    
    }, [squares])

    function selectSquare(id) {
        if (winner) {
            return;
        }
        if (squares[id].value) {
            return;
        }
        setTurn(turn ? false : true);
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, value: turn ? "X" : "O"} : square
            })
        })
    }

    function newSquares() {
        const newSquares = []
        for (let i = 0; i < 10; i++) {
            newSquares.push({value: "", id: i, won: false})
        }
        return newSquares
    }    

    function clearBoard() {
        setSquares(newSquares)
        setTurn(true)
        setWinner(false)
    }

    return (
        <div>
            <div className="game-info">
                <h1>{turn ? "X" : "O"}'s Turn</h1>
                <h1>Winner - {!winner ? "none" : winner}</h1>
            </div>
            <div className="square-container">
                    <Square value={squares[0].value} clicked={() => selectSquare(squares[0].id)}/> 
                    <Square value={squares[1].value} clicked={() => selectSquare(squares[1].id)}/>
                    <Square value={squares[2].value} clicked={() => selectSquare(squares[2].id)}/>
                    <Square value={squares[3].value} clicked={() => selectSquare(squares[3].id)}/>
                    <Square value={squares[4].value} clicked={() => selectSquare(squares[4].id)}/>
                    <Square value={squares[5].value} clicked={() => selectSquare(squares[5].id)}/>               
                    <Square value={squares[6].value} clicked={() => selectSquare(squares[6].id)}/>
                    <Square value={squares[7].value} clicked={() => selectSquare(squares[7].id)}/>
                    <Square value={squares[8].value} clicked={() => selectSquare(squares[8].id)}/>                
            </div>  
            <div className="clear-board">
                <button className="clear-button" onClick={clearBoard}>Clear Board</button>
            </div>
        </div>
    )
}