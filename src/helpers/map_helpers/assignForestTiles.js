import mass_assign from "./mass_assign_tile"



export default function renderForest(tile_array, map_grid){
    map_grid = placePathways(tile_array, map_grid)
    map_grid = renderTrees(tile_array, map_grid)
    return map_grid
}

// EVERY SPECIFIC PLACEMENT WILL BE Y + 1 FOR COORDINATES
// EXAMPLE: row 0 is going to be y = 5. Column 5, Row 0 would be [5][5]

// NOT COMPLETE
function renderTrees(tile_array, map_grid){
    // This will automatically assign a tree tile. It will work by seeing what the tiles next to it are, for example,
    // if the tree tile has tree tiles one above, one left, one right, and one below, it will be TreesFull
    // if the tree tile has a tree tile below it and to the right of it only, it will be a left top corner tree
    map_grid.forEach( (row) => {
        row.forEach( (tile) => {
            // sets up locals for each direction relative to the selected tile
            let left = map_grid[row - 1][tile]
            let right = map_grid[row + 1][tile]
            let up = map_grid[row][tile - 1]
            let down = map_grid[row][tile + 1]

            // makes sure tile is a tree tile 
            if (tile.nametype == "Tree"){

                // if the tile is surrounded by trees on all four directions
                if (left.nametype == "Tree" && right.nametype == "Tree" && up.nametype == "Tree" && down.nametype == "Tree"){
                    tile = tile_array.fullTrees
                }
                // if the tile has trees to the left, right, and bottom
                else if (left.nametype == "Tree" && right.nametype == "Tree" && down.nametype == "Tree"){
                    tile = tile_array.backTrees
                }
                // if the tile has trees to the right, left, and top
                else if (left.nametype == "Tree" && right.nametype == "Tree" && up.nametype == "Tree"){
                    tile = tile_array.frontTrees
                }
                // if the tile has trees to the bottom, top, and right
                else if (up.nametype == "Tree" && down.nametype == "Tree" && right.nametype == "Tree"){
                    tile = tile_array.rightTrees
                }
                 // if the tile has trees to the bottom, top, and left
                else if (up.nametype == "Tree" && down.nametype == "Tree" && left.nametype == "Tree"){
                    tile = tile_array.leftTrees
                }
            }
        })
    })
    return map_grid
}

// NOT COMPLETE
function placePathways(tile_array, map_grid){

    // row 0 -- COMPLETE
    map_grid[8][5] = tile_array.forward_path


    // row 1 -- COMPLETE
    map_grid[8][6] = tile_array.forward_path
    map_grid[15][6] = tile_array.open
    map_grid[16][6] = tile_array.open
    map_grid[17][6] = tile_array.open
    map_grid[31][6] = tile_array.open
    map_grid[32][6] = tile_array.open
    map_grid[33][6] = tile_array.open
    map_grid[34][6] = tile_array.open
    map_grid[35][6] = tile_array.open
    map_grid[36][6] = tile_array.open
    map_grid[37][6] = tile_array.open
    map_grid[38][6] = tile_array.open
    map_grid[44][6] = tile_array.open
    map_grid[45][6] = tile_array.open


    // row 2 -- COMMPLETE
    map_grid[8][7] = tile_array.forward_path
    map_grid[13][7] = tile_array.open
    map_grid[14][7] = tile_array.open
    map_grid[15][7] = tile_array.open
    map_grid[16][7] = tile_array.open
    map_grid[17][7] = tile_array.open
    map_grid[18][7] = tile_array.open
    map_grid[19][7] = tile_array.open
    map_grid[20][7] = tile_array.open
    map_grid[28][7] = tile_array.rTurn_down
    map_grid[45][7] = tile_array.lTurn_down
    map_grid[29][7] = tile_array.horizontal
    map_grid[30][7] = tile_array.horizontal
    map_grid[31][7] = tile_array.horizontal
    map_grid[32][7] = tile_array.horizontal
    map_grid[33][7] = tile_array.horizontal
    map_grid[34][7] = tile_array.horizontal
    map_grid[35][7] = tile_array.horizontal
    map_grid[36][7] = tile_array.horizontal
    map_grid[37][7] = tile_array.horizontal
    map_grid[38][7] = tile_array.horizontal
    map_grid[39][7] = tile_array.horizontal
    map_grid[40][7] = tile_array.horizontal
    map_grid[41][7] = tile_array.horizontal
    map_grid[42][7] = tile_array.horizontal
    map_grid[43][7] = tile_array.horizontal
    map_grid[44][7] = tile_array.horizontal

    // row 3 - COMPLETE
    map_grid[8][8] = tile_array.forward_path
    map_grid[15][8] = tile_array.open
    map_grid[16][8] = tile_array.open
    map_grid[17][8] = tile_array.open
    map_grid[18][8] = tile_array.open
    map_grid[19][8] = tile_array.open
    map_grid[20][8] = tile_array.open
    map_grid[28][8] = tile_array.forward_path
    map_grid[29][8] = tile_array.open
    map_grid[30][8] = tile_array.open
    map_grid[31][8] = tile_array.open
    map_grid[36][8] = tile_array.open
    map_grid[37][8] = tile_array.open
    map_grid[38][8] = tile_array.open
    map_grid[43][8] = tile_array.open
    map_grid[44][8] = tile_array.open
    map_grid[45][8] = tile_array.forward_path
    map_grid[46][8] = tile_array.open

    
    // row 4 - COMPLETE
    map_grid[8][9] = tile_array.forward_path
    map_grid[15][9] = tile_array.open
    map_grid[16][9] = tile_array.open
    map_grid[17][9] = tile_array.open
    map_grid[18][9] = tile_array.open
    map_grid[19][9] = tile_array.open
    map_grid[20][9] = tile_array.open
    map_grid[21][9] = tile_array.open
    map_grid[26][9] = tile_array.open
    map_grid[27][9] = tile_array.open
    map_grid[28][9] = tile_array.forward_path
    map_grid[29][9] = tile_array.open
    map_grid[37][9] = tile_array.open
    map_grid[38][9] = tile_array.open
    map_grid[44][9] = tile_array.open
    map_grid[45][9] = tile_array.forward_path
    map_grid[46][9] = tile_array.open

    // row 5 - COMPLETE
    map_grid[8][10] = tile_array.forward_path
    map_grid[17][10] = tile_array.open
    map_grid[18][10] = tile_array.open
    map_grid[19][10] = tile_array.open
    map_grid[20][10] = tile_array.open
    map_grid[21][10] = tile_array.open
    map_grid[26][10] = tile_array.open
    map_grid[27][10] = tile_array.open
    map_grid[28][10] = tile_array.forward_path
    map_grid[29][10] = tile_array.open
    map_grid[44][10] = tile_array.open
    map_grid[45][10] = tile_array.forward_path
    map_grid[46][10] = tile_array.open
    map_grid[47][10] = tile_array.open

    // row 6 - COMPLETE
    map_grid[5][11] = tile_array.rTurn_down
    map_grid[6][11] = tile_array.horizontal
    map_grid[7][11] = tile_array.horizontal
    map_grid[8][11] = tile_array.fork_up
    map_grid[9][11] = tile_array.horizontal
    map_grid[10][11] = tile_array.horizontal
    map_grid[11][11] = tile_array.lTurn_down
    map_grid = mass_assign(tile_array.open, map_grid, 11, [25, 26, 29, 46, 47])
    debugger
    map_grid[27][11] = tile_array.horizontal
    map_grid[27][11] = tile_array.rTurn_up
    map_grid[45][11] = tile_array.forward_path

    // row 7 - COMPLETE
    map_grid = mass_assign(tile_array.forward_path, map_grid, 12, [5, 11, 45])
    map_grid = mass_assign(tile_array.open, map_grid, 12, [6, 7, 8, 9, 10, 27, 28, 29, 39, 40, 46])

    // row 8 - COMPLETE
    map_grid = mass_assign(tile_array.open, map_grid, 13, [4, 6, 7, 8, 9, 10, 27, 38, 39, 40, 41, 42, 43, 44, 46])
    map_grid = mass_assign(tile_array.forward_path, map_grid, 13, [5, 11, 45])

    // row 9


    return map_grid
}