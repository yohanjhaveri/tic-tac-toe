import React from "react"
import Banner from "./Banner"
import Board from "./Board"
import Button from "./Button"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            board: [['','',''],['','',''],['','','']],
            turn: 'cross',
            over: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.checkWin = this.checkWin.bind(this)
        this.reset = this.reset.bind(this)
    }

    handleClick(row,col){
        if(!this.state.over){
            if(!this.state.board[row][col]){
                this.setState(prevState => {
                    prevState.board[row][col] = prevState.turn
                    prevState.turn = prevState.turn === 'cross' ? 'circle' : 'cross'
                    return prevState
                })
            }
        }
    }

    checkWin(){
        var won = ''
        var board = this.state.board

        if(board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) won = board[1][1]
        if(board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) won = board[1][1]

        for(var i = 0; i < 3; i++){
            if(board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) won = board[0][i]
            if(board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) won = board[i][0]
        }

        if(won){
            this.setState(prevState => {
                prevState.over = won
                return prevState
            })
        }

        
    }

    reset(){
        this.setState({
            board: [['','',''],['','',''],['','','']],
            turn: 'cross',
            over: ''
        })
    }

    render(){

        if(!this.state.over) this.checkWin()

        return (
            <div style={{textAlign: 'center'}}>
                <Banner over={this.state.over} turn={this.state.turn} />
                <Board onclick={this.handleClick} board_value={this.state.board} />
                <Button onclick={this.reset} />
            </div>
        )
    }
}

export default App
