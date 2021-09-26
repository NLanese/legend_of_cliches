import { combineReducers } from 'redux'
import manageFunctions from './functional_reducer'
import manageNewGame from './small_use_reducers/new_game_reducer'
import manageForestMap from "./maps_reducers/forest_map_reducer"
import manageDesertMap from "./maps_reducers/desert_map"

const masterReducer = combineReducers({
    functions: manageFunctions,
    newGame: manageNewGame,
    forest_world: manageForestMap
 //   desert_world: manageDesertMap
})
export default masterReducer