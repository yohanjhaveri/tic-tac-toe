import React, { useState } from 'react'

import Menu from './Menu'
import Game from './Game'

import './styles.css'

function App() {
  const [mode, setMode] = useState('Single')

  return (
    <main>
      <Menu mode={mode} setMode={setMode} />
      <Game mode={mode} />
    </main>
  )
}

export default App
