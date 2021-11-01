export default function manageFunctions(state ={
    player_id: null,            // Allows user to keep track of his information and "log back in" using his/her player_id and a chosen useename
    name: null,
    map_selected: null,         // Dictates what map is shown if inGame is true

    isLoading: false,           // False at first. Only true during a dispatch that involves a fetch
    inWelcome: true,            // True at first. This is what tells App to render the Welcome.js component
    inLogin: false,             // True if "Resume Journey" is selected from the Welcome.js component 
    inNew: false,               // True if "New Story" is selected from the Welcome.js component
    inConfirm: false,           // The Final step of New. This will allow the user to confirm, name, and submit their character to the database

    inGame: false,              // True if a new game is started or a journey is resumed
    isLoading: false,           // True if the game is currently loading

    inLevelUp: false,           // True is the user just leveled up


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
            if (state.player_id == null){
                return {...state, inLevelUp: false, inNew: false, inConfirm: true}   
            }
            else{
                return {...state, inLevelUp: false, inNew: false, inGame: true}
            }

        // THIS CASE IS ALSO PRESENT IN THE LEVEL_UP AND PLAYER REDUCERS
        // {type: "ATTRIBUTE_UPDATE_COMPLETE", payload: <playerObj>}
        case("ATTRIBUTE_UPDATE_COMPLETE"):
            return {...state, isLoading: false, name: payload.name}

        default:
            return state
    }
}