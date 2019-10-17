import React from "react"

function Button(props){
    var style = {
        color: 'white',
        backgroundColor: '#377dff',
        fontSize: 30,
        fontFamily: 'Avenir',
        height: 60,
        width: 120,
        margin: '30px 0',
        borderRadius: 10,
        border: 'none'
    }

    return (
        <button style={style} onClick={() => props.onclick()}> Reset </button>
    )
}

export default Button
