import React, { useState } from 'react';
import { Board } from './Board';


export const Game = () => {    
    const [stepNumber, setStepNumber] = React.useState(0);
    const [isXNext, setIsXNext] = useState(true);
    const [gameHistory, setGameHistory] = useState([{squares: Array(9).fill(null)}]);

    const handleClick = (i) => {
        const history = gameHistory.slice(0, stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = isXNext ? 'X' : 'O';

        setGameHistory(history.concat([{
            squares: squares,
        }]));
        setStepNumber(history.length);
        setIsXNext(!isXNext);
    }

    const jumpTo = (step) => {
        setStepNumber(step);
        setIsXNext((step % 2) === 0 );
    }

    const history = gameHistory;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (<li ley={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>);
    });

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    }
    else {
        status = 'Next player: ' + (isXNext ? 'X' : 'O');
    }
    return (<div className="game">
        <div className="game-board">
            <Board squares={current.squares} onClick={(i) => handleClick(i)} />
        </div>
        <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
        </div>
    </div>);
}


export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}