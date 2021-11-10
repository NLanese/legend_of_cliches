import React from "react"
import AttributeSelection from "./AttributeSelection"
import MoveTree from "./MoveTree"

// This is imported into GameWindow.js


// This is a JSX const function to handle what LevelUp renders
let generateLevelUp = (props) => {
    if (props.inAttributes == true){
        console.log("In Attributes")
        return (
            <div id="AttributeSelectionFromLvlUp" className="Overlay">
                <AttributeSelection />
            </div>
        )
    }
    else if (props.inMoveTree == true){
        console.log("In Move Tree")
        return(
            <div id="MoveTreeFromLvlUp" className="Overlay">
                <MoveTree />
            </div>
        )
    }
    else{
        console.log("Error inside generateLevelUp, inside of LevelUp.js, neither inAttributes nor inMoveTree is true. Props look like this...")
        console.log(props)
    }
}

// The props will be the levelUp
export const LevelUp = (props) => {
    console.log(props)
    return(
        <div className="Overlay">{generateLevelUp(props.props)}</div>
    )
}

