export default function managePlayer(state = {
    atk: 0,
    sAtk: 0,
    def: 0,
    sDef: 0,
    spd: 0,
    hp: 0,

}, action){
    switch(action.type){

        // THIS CASE ALSO EXISTS INSIDE OF THE NEW_GAME AS WELL AS LEVEL_UP AND FUNCTIONAL REDUCERS
        // {type: "ADVANCE", payload: <playerObj>}
        case("ADVANCE"):

        case("ATTRIBUTE_SELECTION_COMPLETE"):
            let obj = action.payload
            return {...state, atk: obj.atk, sAtk: obj.sAtk, def: obj.def, sDef: obj.sDef, spd: obj.spd, hp: obj.hp}

        default:
            return {...state}
    }
}