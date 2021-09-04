export function renderForest(tile_array, map_grid){

}

// EVERY SPECIFIC PLACEMENT WILL BE Y + 1 FOR COORDINATES
// EXAMPLE: row 0 is going to be y = 5. Column 5, Row 0 would be [5][5]
function renderTrees(tile_array, map_grid){

}
function placePathways(tile_array, map_grid){
    // row 0
    map_grid[8][5] = tile_array.forward_path
    map_grid[13][5] = tile_array.open
    map_grid[14][5] = tile_array.open
    map_grid[15][5] = tile_array.open
    map_grid[16][5] = tile_array.open
    map_grid[17][5] = tile_array.open
    map_grid[18][5] = tile_array.open
    map_grid[19][5] = tile_array.open

    // row 1
    map_grid[8][6] = tile_array.forward_path

    // row 2
    map_grid[8][7] = tile_array.forward_path

    // row 3
    map_grid[8][8] = tile_array.forward_path
    
    // row 4
    map_grid[8][9] = tile_array.fork_up
    map_grid[5][9] = tile_array.rTurn_down
    map_grid[6][9] = tile_array.horizontal
    map_grid[7][9] = tile_array.horizontal
    map_grid[9][9] = tile_array.horizontal
    map_grid[10][9] = tile_array.horizontal
    map_grid[11][9] = tile_array.lTurn_down

    // row 5
    map_grid[5][5] = tile_array.forward_path



}