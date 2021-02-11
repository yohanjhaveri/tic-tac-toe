import React, { useState, useEffect } from 'react'

import Menu from './Menu'
import Game from './Game'

import './styles.css'

function App() {
  const [mode, setMode] = useState('Single')
  const [players, setPlayers] = useState(['Player', 'Computer'])

  useEffect(() => {
    mode === 'Single'
    ? setPlayers(['Player', 'Computer'])
    : setPlayers(['Player 1', 'Player 2'])
  }, [mode])

  return (
    <main>
      <Menu mode={mode} setMode={setMode} />
      <Game mode={mode} players={players} />
    </main>
  )
}

export default App
