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
  const [scores, setScores] = useState({ x: 0, o: 0 })

  // EACH ROUND
  const [starts, setStarts] = useState('')
  const [board, setBoard] = useState(['','','','','','','','',''])
  const [turn, setTurn] = useState('')
  const [winner, setWinner] = useState('')

  useEffect(() => {
    setStatus('initial')
    setBoard(['','','','','','','','',''])
    setTurn('')
    setWinner('')
    setScores({ x: 0, o: 0 })

    mode === 'Single'
      ? setPlayers(['Player', 'Computer'])
      : setPlayers(['Player 1', 'Player 2'])
  }, [mode])

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
        return x
      }
    }
  }

  const isFull = board.indexOf('') === -1
  const isEmpty = !board.some(item => item)
  const isOver = !!checkWin()

  useEffect(() => {
    // if it is the computer's turn
    if(mode === 'Single' && !isFull && turn === 'o') {
      const options = board.map((square, index) => [square, index]).filter(option => !option[0])
      const random = options[Math.floor(Math.random() * options.length)][1]

      setTimeout(() => {
        playTurn(random)
      }, Math.ceil(Math.random()) * 1000)
    }
  })

  const playTurn = x => {
    if(status === 'playing' && !board[x]){
      board[x] = turn
      setBoard(board)
      setTurn(turn === 'x' ? 'o' : 'x')

      const winner = checkWin(board)

      if(winner) {
        setScores({ ...scores, [winner]: scores[winner] + 1 })
        setWinner(winner)
        setStatus('complete')
      } else if(board.indexOf('') === -1) {
        setStatus('complete')
      }
    }
  }

  const startGame = () => {
    setStatus('playing')
    setStarts('x')
    setTurn('x')
  }

  const resetGame = () => {
    setBoard(['','','','','','','','',''])
    setTurn(starts)
  }

  const newGame = () => {
    const starter = starts === 'x' ? 'o' : 'x'
    setStarts(starter)
    setTurn(starter)
    setStatus('playing')
    setWinner({ winner: '', blocks: [] })
    setBoard(['','','','','','','','',''])
  }

  const searchTree = board => {

  }

  const image = x => {
    switch (board[x]) {
      case 'x': return <Image src={require('./icons/x.png')} />
      case 'o': return <Image src={require('./icons/o.png')} />
      default:  return <div></div>
    }
  }


  const getMessage = () => {
    if(status === 'initial') return `${mode} Player`
    if(status === 'playing') {
      if(isEmpty) return (starts === 'x' ? players[0] : players[1]) + ' starts'
                  return (turn === 'x' ? players[0] : players[1]) + '\'s turn'
    }
    if(status === 'complete') {
      if(isOver)  return (winner === 'x' ? players[0] : players[1]) + ' wins!'
      if(isFull)  return 'Tie!'
    }
  }

  const message = getMessage()

  return (
    <Screen>
      <Banner mode={mode} turn={turn} status={status} message={message} startGame={startGame} newGame={newGame} resetGame={resetGame} />
      <Board mode={mode} turn={turn} playTurn={playTurn} image={image} />
      <Scores mode={mode} scores={scores} players={players} />
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
