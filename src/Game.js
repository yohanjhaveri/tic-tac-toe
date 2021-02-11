import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './TicTacToe.css'

import { checkWin, randomComputer } from './functions'

import Banner from './Banner'
import Board from './Board'
import Scores from './Scores'

function Game({ mode, players }) {
  // ENTIRE SESSION
  const [status, setStatus] = useState('initial') // initial, playing, complete
  const [scores, setScores] = useState({ x: 0, o: 0 })

  // EACH ROUND
  const [board, setBoard] = useState(['','','','','','','','',''])
  const [starts, setStarts] = useState('')
  const [turn, setTurn] = useState('')
  const [winner, setWinner] = useState('')

  useEffect(() => {
    setStatus('initial')
    setScores({ x: 0, o: 0 })
  }, [mode])

  const inverse = icon => icon === 'x' ? 'o' : 'x'
  const player = icon => icon === 'x' ? players[0] : players[1]

  useEffect(() => {
    const isComputerTurn = mode === 'Single' && turn === 'o'

    if(isComputerTurn) {
      const choice = randomComputer(board)
      const delay = Math.random() * 1000

      setTimeout(() => {
        playTurn(choice)
      }, delay)
    }
  })

  const playTurn = x => {
    if(status === 'playing' && !board[x]){
      board[x] = turn
      setBoard(board)
      setTurn(inverse(turn))

      const winner = checkWin(board)

      if(winner) {
        setScores({ ...scores, [winner]: scores[winner] + 1 })
        setWinner(winner)
        setStatus('complete')
      }

      const isFull = board.indexOf('') === -1

      if(isFull) {
        setStatus('complete')
      }
    }
  }

  const startGame = () => {
    setStatus('playing')
    setBoard(['','','','','','','','',''])
    setStarts('x')
    setTurn('x')
    setWinner('')
  }

  const resetGame = () => {
    setBoard(['','','','','','','','',''])
    setTurn(starts)
  }

  const newGame = () => {
    const starter = inverse(starts)

    setStatus('playing')
    setBoard(['','','','','','','','',''])
    setStarts(starter)
    setTurn(starter)
    setWinner('')
  }

  const searchTree = board => {

  }

  const image = x => {
    return board[x]
      ? <Image src={require(`./icons/${board[x]}.png`)} />
      : <div></div>
  }


  const getMessage = () => {
    const isEmpty = !board.some(item => item)

    switch(status) {
      case 'initial': return `${mode} Player`

      case 'playing': return (
        isEmpty
        ? `${player(starts)} starts`
        : `${player(turn)}'s turn`
      )

      case 'complete': return (
        winner
        ? `${player(winner)} wins!`
        : 'Tie!'
      )
    }
  }

  const message = getMessage(status, board, winner)

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
