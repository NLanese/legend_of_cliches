// FUNCTION Imports
import changeDirection from "../../helpers/map_helpers/changeDirection"
import renderForest from "../../helpers/map_helpers/assignForestTiles"
import create_default_grid from "../../helpers/map_helpers/create_default_tiles"

// IMAGE imports and TILE TYPE DECLARATION
import { allImages } from "../../helpers/image_helpers/getImage"
const fullTrees = {nametype: "Tree", img: allImages.forest.walls.trees_full, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const leftTrees = {nametype: "Tree", img: allImages.forest.walls.trees_left, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const rightTrees = {nametype: "Tree", img: allImages.forest.walls.trees_right, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const backTrees =  {nametype: "Tree", img: allImages.forest.walls.trees_back, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const frontTrees =  {nametype: "Tree", img: allImages.forest.walls.trees_front, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const RT_treeCorner =  {nametype: "Tree", img: allImages.forest.walls.tree_corner_RT, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const RB_treeCorner =  {nametype: "Tree", img: allImages.forest.walls.tree_corner_RB, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const LT_treeCorner =  {nametype: "Tree", img: allImages.forest.walls.tree_corner_LT, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const LB_treeCorner =  {nametype: "Tree", img: allImages.forest.walls.tree_corner_LB, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const forward_path =  {nametype: "Path", img: allImages.forest.pathways.forward, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const fork_down =  {nametype: "Path", img: allImages.forest.pathways.fork, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const fork_up =  {nametype: "Path", img: allImages.forest.pathways.fork_up, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const fourway =  {nametype: "Path", img: allImages.forest.pathways.fourway, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const horizontal =  {nametype: "Path", img: allImages.forest.pathways.horizontal, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const rTurn_down =  {nametype: "Path", img: allImages.forest.pathways.turnRight, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const lTurn_down = {nametype: "Path", img: allImages.forest.pathways.turnLeft, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const open = {nametype: "Path", img: allImages.forest.pathways.open, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}

        // nametype will be a string that labels the tile
        // img will dictate what image is shown
        // walkable determines if the player can go on this tile
        // discovered determines if it will be revelaed when a player looks at the map
        // inv_item will be N/A unless the space can be effected by an inventory item
        // inv_effect will be the effect if the space is interacted by a player in possesion of inv_item
        // occupied will be true if a player or enemy or object is on this space
        // occupied_by will be a player, object, or enemey object

const tile_array = {fullTrees: fullTrees, leftTrees: leftTrees, rightTrees: rightTrees, backTrees: backTrees, frontTrees: frontTrees, RT_treeCorner: RT_treeCorner, RB_treeCorner: RB_treeCorner, LT_treeCorner: LT_treeCorner, LB_treeCorner: LB_treeCorner, forward_path: forward_path, fork_down: fork_down, fork_up: fork_up, fourway: fourway, horizontal: horizontal, rTurn_down: rTurn_down, lTurn_down: lTurn_down, open: open}

function prepMap(){
    let  mapGrid = create_default_grid(fullTrees, 50, 200)
    mapGrid = renderForest(tile_array, mapGrid)
    return mapGrid
}



export default function manageForestMap(
    state= {
        map_grid: prepMap(),                       // Look above for what generateGrid does. This renders the map
        player_pos: "(9,5)"                             // This will keep track of which space the player is on. It starts at the x = 9 y = 5 

      //  enemies: 
    }, 
    action){
        switch(action.type){

        case("MOVE_PLAYER"):  // {type: "MOVE_PLAYER", direction: <string>}
            // change the player_pos to reflect the new location
            // This will use the changeDirection function from 
            return {...state, player_pos: changeDirection(action.direction, state.player_pos, state.map_grid)}

        default:
            return state
            
        }
    }