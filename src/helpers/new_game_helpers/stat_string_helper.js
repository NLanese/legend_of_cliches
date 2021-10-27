// Used in the LEVEL_UP_REDUCER
// Used in ADD_POINT and MINUS_POINT

// Takes the payload (a string) and a state
// Based on the string, it will make a proper attribute upgrade to the stat
// and return a properly upgraded version of the state
export default function returnProperAttributeObject(state, payload, add_or_sub){
    let negator = 1
    if (add_or_sub == "sub"){
        negator = -1
    }
    if (payload == "Strength"){
        return {...state, pointsRemaining: state.pointsRemaining - 1, atkInc: state.atk + negator}
    }
    else if (payload == 'Intelligence'){
        return {...state, pointsRemaining: state.pointsRemaining - 1, sAtkInc: state.sAtk + negator}
    }
    else if (payload == 'Endurance'){
        return {...state, pointsRemaining: state.pointsRemaining - 1, defInc: state.def + negator}
    }
    else if (payload == 'Willpower'){
        return {...state, pointsRemaining: state.pointsRemaining - 1, sDefInc: state.sDef + negator}
    }
    else if (payload == "Speed"){
        return {...state, pointsRemaining: state.pointsRemaining - 1, spdInc: state.spd + negator}
    }
    else if (payload == "Health"){
        return {...state, pointsRemaining: state.pointsRemaining - 1, hpInc: state.hp + 5 * negator}
    }
    else{
        console.log("Error, I got a payload of " + payload)
        return {...state}
    }
}