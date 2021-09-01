import { allImages } from "../../helpers/image_helpers/getImage"
const fullDune = {img: allImages.forest.walls.trees_full, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A"}
const leftTrees = {img: allImages.forest.walls.trees_left, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A"}
const rightTrees = {img: allImages.forest.walls.trees_right, walkable: false, discovered: false, inv_item: "N/A", inv_efect: "N/A"}


// This function will generate the 50x200 map 
// Every tile will default to an object that looks like the following..

    // {img: dune_full, walkable: false, discovered: false, inv_item: "N/A", inv_effect: "N/A"}
    
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
            tile = fullDune
        })
    })

}


export default function manageDesertMap(
    state= {
        map_grid: generateGrid()
      //  enemies: 
    }, 
    action){

    }