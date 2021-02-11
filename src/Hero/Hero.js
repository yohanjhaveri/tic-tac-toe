import React from 'react'
import './hero.css'

// <span id='dot1'></span>
// <span id='dot3'></span>
// <span id='dot4'></span>

function Hero({ setPage }){
    return (
        <div id='hero'>
            <div id='introduction'>
                <img id='logo' src={require('./../img/png/ghost.png')} />
                <h1 id='head'>React Games</h1>
            </div>

            <div id='selection'>
                <div onClick={() => setPage('TICTACTOE')}>
                    <img src={require('./../img/png/019-tic-tac-toe-5.png')} />
                    <div> Tic Tac Toe </div>
                </div>

                <div onClick={() => setPage('CONNECT')}>
                    <img src={require('./../img/png/connect.png')} />
                    <div> Connect 4 </div>
                </div>

                <div onClick={() => setPage('CHESS')}>
                    <img src={require('./../img/png/chess.png')} />
                    <div> Chess </div>
                </div>

                <div onClick={() => setPage('SUDOKU')}>
                    <img src={require('./../img/png/sudoku.png')} />
                    <div> Sudoku </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
