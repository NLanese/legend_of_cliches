import React from "react"
import AttributeSelection from "./AttributeSelection"
import MoveTree from "./MoveTree"

// This is imported into GameWindow.js


// This is a JSX const function to handle what LevelUp renders
let generateLevelUp = (props) => {
    if (props.inAttributes == true){
        return (
            <div id="AttributeSelectionFromLvlUp" className="Overlay">
                <AttributeSelection />
            </div>
        )
    }
    else if (props.inMoveTree == true){
        return(
            <div id="MoveTreeFromLvlUp" className="Overlay">
                <MoveTree />
            </div>
        )
    }
}

// The props will be the levelUp
export const LevelUp = (props) => {
    console.log(props)
    return(
        <div class="Overlay">{generateLevelUp(props)}</div>
    )
}

