// FUNCTION Imports
import changeDirection from "../../helpers/map_helpers/changeDirection"

// IMAGE imports
import { allImages } from "../../helpers/image_helpers/getImage"
const fullTrees = {img: allImages.forest.walls.trees_full, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A"}
const leftTrees = {img: allImages.forest.walls.trees_left, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A"}
const rightTrees = {img: allImages.forest.walls.trees_right, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A"}


// This function will generate the 50x200 map 
// Every tile will default to an object that looks like the following..

    // {img: trees_full, walkable: false, discovered: false, inv_item: "N/A", inv_effect: "N/A"}
    
        // img will dictate what image is shown
        // walkable determines if the player can go on this tile
        // discovered determines if it will be revelaed when a player looks at the map
        // inv_item will be N/A unless the space can be effected by an inventory item
        // inv_effect will be the effect if the space is interacted by a player in possesion of inv_item
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