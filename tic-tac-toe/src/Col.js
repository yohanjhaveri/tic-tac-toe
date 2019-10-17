import React from "react"

function Col(props){
    var div_style = {
        border: '2px solid black',
        height: 100,
        width: 100,
        display: 'inline-block',
        margin: '-2px 0'
    }

    var img_style = {
        height: 100,
        width: 100
    }

    var image

    switch(props.col_value){
        case 'cross':
            image = <img style={img_style} src={require('./cross.png')} />
            break

        case 'circle':
            image = <img style={img_style} src={require('./circle.png')} />
            break

        case '':
            image = ''
            break
    }

    return (
        <div style={div_style} onClick={() => props.onclick(props.row_index, props.col_index)} >
            {image}
        </div>
    )
}

export default Col
