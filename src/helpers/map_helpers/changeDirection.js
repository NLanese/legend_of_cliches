export default function changeDirection(direction, currentPos, map_grid){
    // (x, y)
    let nums = currentPos.replace("(", "")
    // x,y)
    nums = nums.replace(","," ")
    // x y)
    nums = nums.replace(")", "")
    // x y
    let x = nums.split(" ")[0]
    let y = nums.split(" ")[1]

    // IF the space you want to move onto is walkable, THEN return the adjust coordinates in a string form "(x,y)"
    switch (direction){
        case("left"):
            if ( map_grid[x - 1][y].walkable = true ){
                return `(${x - 1}, ${y})`
            }
        case("right"):
            if ( map_grid[x + 1][y].walkable = true ){
                return `(${x + 1}, ${y})`
            }
        case("back"):
            if ( map_grid[x][y - 1].walkable = true ){
                return `(${x}, ${y - 1})`
            }
        case("forward"):
            if ( map_grid[x][y + 1].walkable = true ){
                return `(${x}, ${y + 1})`
            }
    }
}