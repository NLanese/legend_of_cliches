export default function manageNewGame(state ={
    classSelected: false,
    class: null,
    inClassSelection: false,
    inAttributes: false,

    currentPlayerObj: null
    // currentPlayerObj is an object that looks like this...
    // class_name: <str>, bio: <str>, atk: <int>, sAtk: <int>, def: <int>, sDef: <int>, spd: <int>, hp: <int>
},
action){
    switch(action.type){

        // THIS CASE ALSO EXISTS INSIDE OF THE NEW GAME REDUCER
        // {type: "SET_UP_NEW_GAME"}
        case("SET_UP_NEW_GAME"):
            return {...state, inClassSelection: true}
        
        // THIS CASE ALSO EXISTS INSIDE OF THE PLAYER REDUCER   
        // {type: "CLASS_SELECTED", payload: <playerObj>}
        case("CLASS_SELECTED"):
            console.log("New_Game_Reducer, case 'CLASS_SELECTED' hit: payload is " + action.payload)
            return {...state, inClassSelection: false, classSelected: true, class: action.payload, inAttributes: true, currentPlayerObj: action.payload}


        // THIS CASE ALSO EXISTS INSIDE OF THE LEVEL_UP AS WELL AS PLAYER  AND FUNCTIONAL REDUCERS
        // Thia case should only be hit ONCE her player to END the New Game route
        // {type: "ADVANCE", payload: <playerObj>}
        case("ADVANCE"):
            return {...state, inClassSelection: false, classSelected: true, inAttributes: false, currentPlayerObj: action.payload}

            
        default:
            return {...state}
    }
}