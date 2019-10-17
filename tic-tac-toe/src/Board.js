import React from "react"
import Row from "./Row"

function Board(props){
    return (
        <div>
            <Row row_index={0} row_value={props.board_value[0]} onclick={props.onclick} />
            <Row row_index={1} row_value={props.board_value[1]} onclick={props.onclick} />
            <Row row_index={2} row_value={props.board_value[2]} onclick={props.onclick} />
        </div>
    )
}

export default Board
