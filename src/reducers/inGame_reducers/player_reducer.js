export default function managePlayer(state = {
    class: null,
    atk: 0,
    sAtk: 0,
    def: 0,
    sDef: 0,
    spd: 0,
    hp: 0,

}, action){
    switch(action.type){

        // THIS CASE ALSO EXISTS IN THE LEVEL_UP REDUCER
        // {type: "CLASS_SELECTED", payload: <playerObj>}
        case("CLASS_SELECTED"):
            return {...state, class: payload.class_name}

        // THIS CASE ALSO EXISTS INSIDE OF THE LEVEL_UP REDUCER AND FUNCTIONAL REDUCER
        // {type: "ATTRIBUTE_SELECTION_COMPLETE", payload: <playerObj>}
        case("ATTRIBUTE_SELECTION_COMPLETE"):
            let obj = action.payload
            return {...state, atk: obj.atk, sAtk: obj.sAtk, def: obj.def, sDef: obj.sDef, spd: obj.spd, hp: obj.hp}

        default:
            return {...state}
    }
}