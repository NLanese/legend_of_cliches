import MoveTile from "../../components/LevelUpSplitters/MoveTile"
import MoveTreeImages from "./MoveTreeImgImporter"
import { MageMoves } from "../../constants/moves/mage/mageMoves"

// ALL of these functions and constants will be exported to MoveTree.js


// This will generate an array of moves, specific to class and tree
export function generateMovesList(class_type, moveTreeNumber){
    if (class_type == "Mage"){
        // mtn1 = elemental
        // mtn2 = life energy
        // mtn3 = necromancy
        return MageMoves[moveTreeNumber] //This is an imported object
    }
    else if (class_type == "Paladin"){

    }
    else if (class_type == "Assassin"){

    }
    else{
        console.log("Error, improper classtype in Generate Moves List, MoveTree.js")
    }
}

// This is called in generateMoveTrees.
// class_type_moves is one of MageMoves PaladinMoves or AssassinMoves which are all arrays of 3 objects each 
// moveTreeNumber will correlate to which tree's tiles should be generated
// Mage1 = elemental Mage2 = LifeEnergy Mage3 = Necromancy
// Paladin1 = NA Paladin2 = NA Paladin3 = NA
// Assn1 = NA Assn2 = NA Assn3 = NA
export default function generateMoveTiles(class_type_moves, moveTreeNumber){
    let movesList = generateMovesList(class_type_moves[moveTreeNumber])
    console.log("MovesList is")
    console.log(movesList)
    // This should go through each Move in the MoveList and create a div and Component for the MoveTile
    let i = -1 // This keeps track of which tree each tile will be a part of
    return movesList.map(move => {
        i = i + 1
        return(
            <div id={move.name + "_tile"}>
                <MoveTile thisMove={move} tree={i}/>
            </div>
        )
    })
}


export const generateMoveTrees = (class_type) => {
    // MoveTreeImages is an imported function. It takes "Mage", "Paladin", or "Assassin" as a parameter
    let moveTrees = MoveTreeImages(class_type)
    return(
        <div id="AllMoveTrees">
            <div className="MoveTree" id="MT1">
                {moveTrees[0]} {/* This will generate the Move Tree Image */}
                {generateMoveTiles(class_type, 0)} {/* This will generate a MoveTile Component for every move in the MoveList */}
            </div>
            <div className="MoveTree" id="MT2">
                {moveTrees[1]} {/* This will generate the Move Tree Image */}
                {generateMoveTiles(class_type, 1)} {/* This will generate a MoveTile Component for every move in the MoveList */}
            </div>
            <div className="MoveTree" id="MT3">
                {moveTrees[2]} {/* This will generate the Move Tree Image */}
                {generateMoveTiles(class_type, 2)} {/* This will generate a MoveTile Component for every move in the MoveList */}
            </div>
        </div>
    )
}