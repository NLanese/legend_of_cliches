import howManyPoints from "../../helpers/Moves_And_Stats_Helpers/AttributeUpgradeLevelHelper";
import returnProperAttributeObject from "../../helpers/new_game_helpers/stat_string_helper";


// This handles STAT ATTRIBUTE UPGRADES and MOVE SELECTION only!!!!

// All aspects of the CHARACTER CREATION PROCESS other than the ATTRBIBUTES 
// will be in the new_game_reducer, or maybe the functional_reducer


export default function manageLevelUp(state = {
    inAttributes: false,               // This is true when you first level up. Unlike MoveSelection, you cannot just leave this without completing it
    attributePoints: howManyPoints(0), // This will be reset every time a player enters the level up or creation screens
    pointsRemaining: howManyPoints(0), // Initially, this will eqaul howManyPoints but will go down every time AddClick is executed in the StatUpgradePanel, and up once (not over attributePoints) everytime MinusClick is executed 
    atkInc: 0,
    sAtkInc: 0,
    defInc: 0,
    sDefInc: 0,
    spdInc: 0,
    hpInc: 0,
    inMoveTree: false,
    movePointsRemaining: 2
}, action){

    switch(action.type){

        // THIS CASE ALSO EXISTS IN THE FUNCTIONAL REDUCER
        // {type: "LEVEL_UP", payload: <int depicting the level>}
        case("LEVEL_UP"):
            return {inAttributes: true, attributePoints: howManyPoints(action.payload), pointsRemaining: howManyPoints(action.payload), movePointsRemaining: state.movePointsRemaining + 1}

        // {type: "MINUS_POINT" payload: <string of stat>}
        case("MINUS_POINT"):
            return(returnProperAttributeObject(state, action.payload, "sub"))

        // {type: "ADD_POINT" payload <string of stat>}
        case("ADD_POINT"):
            return(returnProperAttributeObject(state, action.payload, "add"))

        // THIS CASE ALSO EXISTS INSIDE OF THE NEW_GAME AS WELL AS FUNCTIONAL REDUCERS
        // {type: "ADVANCE", payload: <playerObj>}
        case("ADVANCE"):
           
        // THIS CASE ALSO EXISTS INSIDE OF THE PLAYER REDUCER AND FUNCTIONAL REDUCER
        // {type: "ATTRIBUTE_SELECTION_COMPLETE", payload: <playerObj>}
        case("ATTRIBUTE_UPDATE_COMPLETE"):
            return{attributePoints: 0, pointsRemaining: 0, atkInc: 0, sAtkInc: 0, defInc: 0, sDefInc: 0, spdInc: 0, hpInc: 0, inMoveTree: true, inAttributes: false}

        default:
            return {...state}
    }

}