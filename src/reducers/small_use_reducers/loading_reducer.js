
export default function manageLoading(state={
    attr: false,            // True when loading attribute upgrades
    moves: false            // True when loading Move upgrades
}, action){
    switch(action.type){
        case("LOAD_ATTRIBUTES"):


        default:
            return {...state}
    }
}