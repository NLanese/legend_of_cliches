export default function manageNewGame(state ={
    classSelected: false,
    inClassSelection: false,
    inAttributes: false,

    currentPlayerObj: null
},
action){
    switch(action.type){

        // THIS CASE ALSO EXISTS INSIDE OF THE NEW GAME REDUCER
        // {type: "SET_UP_NEW_GAME"}
        case("SET_UP_NEW_GAME"):
            return {...state, inClassSelection: true}
        
        // {type: "CLASS_SELECTED"}
        case("CLASS_SELECTED"):
            return {...state, inClassSelection: false, classSelected: true, inAttributes: true, currentPlayerObj: action.payload}



            
        default:
            return {...state}
    }
}