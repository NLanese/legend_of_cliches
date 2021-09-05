export default function mass_assign(tile, map_grid, y, x_array){
    x_array.forEach( x => {
        map_grid[x][y] = tile
    })
    return map_grid
}