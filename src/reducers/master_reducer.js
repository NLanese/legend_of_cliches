import { combineReducers } from 'redux'
import manageForestMap from "./maps_reducers/forest_map_reducer"
import manageDesertMap from "./maps_reducers/desert_map"

const masterReducer = combineReducers({
    forest_world: manageForestMap
 //   desert_world: manageDesertMap
})
export default masterReducer