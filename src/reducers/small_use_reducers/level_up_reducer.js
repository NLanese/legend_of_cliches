import howManyPoints from "../../helpers/Moves_And_Stats_Helpers/AttributeUpgradeLevelHelper";

export default function manageLevelUp(state = {
    attributePoints: howManyPoints(0), // This will be reset every time a player enters the level up or creation screens
    pointsRemaining: howManyPoints(0)  // Initially, this will eqaul howManyPoints but will go down every time AddClick is executed in the StatUpgradePanel, and up once (not over attributePoints) everytime MinusClick is executed 
}, action){

    switch(action.type){

        // THIS CASE ALSO EXISTS IN THE FUNCTIONAL REDUCER
        // {type: "LEVEL_UP", payload: <int depicting the level>}
        case("LEVEL_UP"):
            return {attributePoints: howManyPoints(action.payload), pointsRemaining: howManyPoints(action.payload)}

        // {type: "MINUS_POINT"}
        case("MINUS_POINT"):
            return {...state, pointsRemaining: state.pointsRemaining + 1}

        // {type: "ADD_POINT"}
        case("ADD_POINT"):
            return {...state, pointsRemaining: state.pointsRemaining - 1}

    }

}