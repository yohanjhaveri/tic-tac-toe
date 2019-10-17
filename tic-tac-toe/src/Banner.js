import React from "react"

function Banner(props){
    var banner
    if(props.over) banner = <h1> {props.over === 'cross' ? 'X' : 'O'} is the winner </h1>
    else           banner = <h1> It is {props.turn === 'cross' ? 'X' : 'O'}s turn </h1>

    return (
        banner
    )
}

export default Banner
