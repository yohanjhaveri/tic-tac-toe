import React from "react"
import Col from "./Col"

function Row(props){
    return (
        <div>
            <Col row_index={props.row_index} col_value={props.row_value[0]} col_index={0} onclick={props.onclick} />
            <Col row_index={props.row_index} col_value={props.row_value[1]} col_index={1} onclick={props.onclick} />
            <Col row_index={props.row_index} col_value={props.row_value[2]} col_index={2} onclick={props.onclick} />
        </div>
    )
}

export default Row
