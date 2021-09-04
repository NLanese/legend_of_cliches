// FUNCTION Imports
import changeDirection from "../../helpers/map_helpers/changeDirection"

// IMAGE imports and TILE TYPE DECLARATION
import { allImages } from "../../helpers/image_helpers/getImage"
const fullTrees = {img: allImages.forest.walls.trees_full, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const leftTrees = {img: allImages.forest.walls.trees_left, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const rightTrees = {img: allImages.forest.walls.trees_right, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const backTrees =  {img: allImages.forest.walls.trees_back, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const frontTrees =  {img: allImages.forest.walls.trees_front, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const RT_treeCorner =  {img: allImages.forest.walls.tree_corner_RT, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const RB_treeCorner =  {img: allImages.forest.walls.tree_corner_RB, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const LT_treeCorner =  {img: allImages.forest.walls.tree_corner_LT, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const LB_treeCorner =  {img: allImages.forest.walls.tree_corner_LB, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const forward_path =  {img: allImages.forest.pathways.forward, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const fork_down =  {img: allImages.forest.pathways.fork, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const fork_up =  {img: allImages.forest.pathways.fork_up, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const fourway =  {img: allImages.forest.pathways.fourway, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const horizontal =  {img: allImages.forest.pathways.horizontal, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const rTurn_down =  {img: allImages.forest.pathways.turnRight, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}
const lTurn_down = {img: allImages.forest.pathways.turnLeft, walkable: true, discovered: false, inv_item: "N/A", inv_efect: "N/A",  occupied: false, occupied_by: "N/A"}





// This function will generate the 50x200 map 
// Every tile will default to an object that looks like the following..

    // {img: trees_full, walkable: false, discovered: false, inv_item: "N/A", inv_effect: "N/A", occupied: false, occupied_by: "N/A"}
    
        // img will dictate what image is shown
        // walkable determines if the player can go on this tile
        // discovered determines if it will be revelaed when a player looks at the map
        // inv_item will be N/A unless the space can be effected by an inventory item
        // inv_effect will be the effect if the space is interacted by a player in possesion of inv_item
        // occupied will be true if a player or enemy or object is on this space
        // occupied_by will be a player, object, or enemey object
function generateGrid(){
    var mapGrid = new Array(50)
    mapGrid.forEach( (element) => {
        element = new Array(200)
    })
    mapGrid.forEach( (element) => {
        element.forEach( (tile) => {
            tile = fullTrees
        })
    })

}


export default function manageForestMap(
    state= {
        map_grid: generateGrid(),                       // Look above for what generateGrid does. This renders the map
        player_pos: "(9,0)"                             // This will keep track of which space the player is on. It starts at the x = 9 y = 0 

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