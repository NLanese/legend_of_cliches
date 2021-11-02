// Used in the LEVEL_UP_REDUCER
// Used in ADD_POINT and MINUS_POINT

// Takes the payload (a string) and a state
// Based on the string, it will make a proper attribute upgrade to the stat
// and return a properly upgraded version of the state
export default function returnProperAttributeObject(state, payload, add_or_sub){
    let negator = 1
    if (add_or_sub == "sub"){
        console.log("Sub!")
        negator = -1
    }
    if (payload == "Strength"){
        return {...state, pointsRemaining: state.pointsRemaining - negator, atkInc: state.atkInc + negator}
    }
    else if (payload == 'Intelligence'){
        return {...state, pointsRemaining: state.pointsRemaining - negator, sAtkInc: state.sAtkInc + negator}
    }
    else if (payload == 'Endurance'){
        return {...state, pointsRemaining: state.pointsRemaining - negator, defInc: state.defInc + negator}
    }
    else if (payload == 'Willpower'){
        return {...state, pointsRemaining: state.pointsRemaining - negator, sDefInc: state.sDefInc + negator}
    }
    else if (payload == "Speed"){
        return {...state, pointsRemaining: state.pointsRemaining - negator, spdInc: state.spdInc + negator}
    }
    else if (payload == "Health"){
        return {...state, pointsRemaining: state.pointsRemaining - negator, hpInc: state.hpInc + 5 * negator}
    }
    else{
        console.log("Error, I got a payload of " + payload)
        return {...state}
    }
}