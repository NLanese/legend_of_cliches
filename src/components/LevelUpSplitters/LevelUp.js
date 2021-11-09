import React from "react"
import AttributeSelection from "./AttributeSelection"
import MoveTree from "./MoveTree"

// The props will be the levelUp
export const LevelUp = (props) => {
    if (props.inAttributes == true){
        <AttributeSelection />
    }
    else if (props.inMoveTree){
        <MoveTree />
    }
}

