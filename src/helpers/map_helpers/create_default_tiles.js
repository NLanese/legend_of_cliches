
// This creates a x by y grid filled in with a specific tile type

export default function create_default_grid(tile, x, y){
    var mapGrid = new Array(x)
    for (let i = 0; i < x + 1; i++){
        mapGrid[i] = new Array(y)
        for (let j = 0; j < y + 1; j++){
            mapGrid[i][j] = tile
        }
    }
    return mapGrid
}