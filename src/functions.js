function checkWin(board) {
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

function randomComputer(board) {
  const options = board.map((square, index) => [square, index]).filter(option => !option[0])
  const random = Math.floor(Math.random() * options.length)
  return options[random][1]
}

export { checkWin, randomComputer }
