import howManyPoints from "../../helpers/Moves_And_Stats_Helpers/AttributeUpgradeLevelHelper";

export default function manageLevelUp(state = {
    attributePoints: howManyPoints(0), // This will be reset every time a player enters the level up or creation screens
    pointsRemaining: howManyPoints(0), // Initially, this will eqaul howManyPoints but will go down every time AddClick is executed in the StatUpgradePanel, and up once (not over attributePoints) everytime MinusClick is executed 
    atkInc: 0,
    sAtkInc: 0,
    defInc: 0,
    sDefInc: 0,
    spdInc: 0,
    hpInc: 0
}, action){

    switch(action.type){

        // THIS CASE ALSO EXISTS IN THE FUNCTIONAL REDUCER
        // {type: "LEVEL_UP", payload: <int depicting the level>}
        case("LEVEL_UP"):
            return {attributePoints: howManyPoints(action.payload), pointsRemaining: howManyPoints(action.payload)}

        // {type: "MINUS_POINT" payload: <string of stat>}
        case("MINUS_POINT"):
            return {...state, pointsRemaining: state.pointsRemaining + 1}

        // {type: "ADD_POINT" payload <string of stat>}
        case("ADD_POINT"):
            if (action.payload == "Strength"){
                return {...state, pointsRemaining: state.pointsRemaining - 1, atkInc: state.atk + 1}
            }
            else if (action.payload == 'Intelligence'){
                return {...state, pointsRemaining: state.pointsRemaining - 1, sAtkInc: state.sAtk + 1}
            }
            else if (action.payload == 'Endurance'){
                return {...state, pointsRemaining: state.pointsRemaining - 1, defInc: state.def + 1}
            }
            else if (action.paylaod == 'Willpower'){
                return {...state, pointsRemaining: state.pointsRemaining - 1, sDefInc: state.sDef + 1}
            }
            else if (action.payload == "Speed"){
                return {...state, pointsRemaining: state.pointsRemaining - 1, spdInc: state.spd + 1}
            }
            else if (action.payload == "Health"){
                return {...state, pointsRemaining: state.pointsRemaining - 1, hpInc: state.hp + 5}
            }
            else{
                console.log("Error, I got a payload of " + action.payload)
                return {...state}
            }

        default:
            return {...state}
    }

}