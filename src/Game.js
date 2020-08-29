import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './TicTacToe.css'

import Banner from './Banner'
import Board from './Board'
import Scores from './Scores'

function Game({ mode }) {
  // ENTIRE SESSION
  const [players, setPlayers] = useState(['Player', 'Computer'])
  const [status, setStatus] = useState('initial') // initial, playing, complete
  const [scores, setScores] = useState({ Player: 0, Computer: 0 })

  // EACH ROUND
  const [board, setBoard] = useState(['','','','','','','','',''])
  const [turn, setTurn] = useState('')
  const [result, setResult] = useState({ winner: '', blocks: [] })

  const checkWin = () => {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [6, 4, 2]
    ]

    for(let combo of combos){
      const x = board[combo[0]]
      const y = board[combo[1]]
      const z = board[combo[2]]

      if(x && x === y && y === z){
        const winner = x === 'X' ? players[0] : players[1]
        return { winner, blocks: combo }
      }
    }
  }


  useEffect(() => {
    setStatus('initial')
    setBoard(['','','','','','','','',''])
    setTurn('')
    setResult({ winner: '', blocks: [] })

    if(mode === 'Single') {
      setPlayers(['Player', 'Computer'])
      setScores({ Player: 0, Computer: 0 })
    } else {
      setPlayers(['Player 1', 'Player 2'])
      setScores({ 'Player 1': 0, 'Player 2': 0 })
    }
  }, [mode])



  const isFull = board.indexOf('') === -1
  const isEmpty = !board.some(item => item)
  const isOver = !!checkWin()

  useEffect(() => {
    // if it is the computer's turn
    if(status === 'playing' && !isFull && turn === ['X', 'O'][players.indexOf('Computer')]) {
      const options = board.map((square, index) => [square, index]).filter(option => !option[0])
      const random = options[Math.floor(Math.random() * options.length)][1]

      setTimeout(() => {
        play(random)
      }, Math.ceil(Math.random()) * 1000)
    }
  })

  const play = x => {
    if(status === 'playing' && !board[x]){
      board[x] = turn
      setBoard(board)
      setTurn(turn === 'X' ? 'O' : 'X')

      const gameOver = checkWin(board)

      if(gameOver) {
        const { winner } = gameOver
        setResult(gameOver)
        setStatus('complete')
        setScores({ ...scores, [winner]: scores[winner] + 1 })
      } else {
        if(board.indexOf('') === -1) {
          setStatus('complete')
        }
      }
    }
  }

  const startGame = () => {
    setStatus('playing')
    setTurn('X')
  }

  const resetGame = () => {
    setBoard(['','','','','','','','',''])
    setTurn('X')
  }

  const newGame = () => {
    setStatus('playing')
    setResult({ winner: '', blocks: [] })
    setBoard(['','','','','','','','',''])
    setTurn('X')
    setPlayers([players[1], players[0]])
  }

  const searchTree = board => {

  }

  const image = x => {
    switch (board[x]) {
      case 'X': return <Image src={require('./icons/X.png')} />
      case 'O': return <Image src={require('./icons/O.png')} />
      default:  return <div></div>
    }
  }


  const getMessage = () => {
    if(status === 'initial') return `${mode} Player`
    if(status === 'playing') {
      if(isEmpty) return players[0] + ' starts'
                  return (turn === 'X' ? players[0] : players[1]) + '\'s turn'
    }
    if(status === 'complete') {
      if(isOver)  return result.winner + ' wins!'
      if(isFull)  return 'Tie!'
    }
  }

  const message = getMessage()

  return (
    <Screen>
      <Banner status={status} message={message} startGame={startGame} newGame={newGame} resetGame={resetGame} />
      <Board play={play} image={image} />
      <Scores mode={mode} scores={scores} />
    </Screen>
  )
}

const Image = styled.img`
  height: 100%;
`;

const Screen = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 50px;
`

export default Game
