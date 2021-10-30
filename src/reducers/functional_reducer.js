export default function manageFunctions(state ={
    player_id: null,            // Allows user to keep track of his information and "log back in" using his/her player_id and a chosen useename
    map_selected: null,         // Dictates what map is shown if inGame is true

    inWelcome: true,            // True at first. This is what tells App to render the Welcome.js component
    inLogin: false,             // True if "Resume Journey" is selected from the Welcome.js component 
    inNew: false,               // True if "New Story" is selected from the Welcome.js component

    inGame: false,              // True if a new game is started or a journey is resumed
    isLoading: false,           // True if the game is currently loading

    inLevelUp: false,           // True is the user just leveled up

    openedMenu: false,          // True if the user opens their menu. This does not overtake the current component but rather it slides in
},
action){
    switch(action.type){

        // {type: "LOADING"}
        case("LOADING"):
            return {...state, inWelcome: false, inLogin: false, inNew: false, inGame: false, isLoading: true}

        // THIS CASE ALSO EXISTS INSIDE OF THE NEW GAME REDUCER
        // {type: "SET_UP_NEW_GAME"}
        case("SET_UP_NEW_GAME"):
            return {...state, inWelcome: false, inNew: true}

        // THIS CASE ALSO EXISTS INSIDE OF THE PLAYER REDUCER
        // {type: "START_NEW_GAME", payload: {player_id: xxxxxx, character_selected}
        case("START_NEW_GAME"):
            return {...state, inWelcome: false, inNew: true, player_id: action.payload.player_id}

        // THIS CASE ALSO EXISTS INSIDE OF THE PLAYER REDUCER
        // {type: "START_NEW_GAME", payload: {player_id: xxxxxx, player: {<object with all player details>}
        case("LOGIN_TO_GAME"):
            return {...state, inWelcome: false, inGame: true, player_id: action.payload.player_id}

        // THIS CASE ALSO EXISTS INSIDE OF THE NEW_GAME AS WELL AS PLAYER  AND LEVEL_UP REDUCERS
        // {type: "ADVANCE", payload: <playerObj>}
        case("ADVANCE"):    
            return {...state, inLevelUp: false, inNew: false, inGame: true}


        default:
            return state
    }
}