import MoveTile from "../../components/LevelUpSplitters/MoveTile"
import { MageMoves } from "../../constants/moves/mageMoves"
import MoveTreeImages from "./MoveTreeImgImporter"

// ALL of these functions and constants will be exported to MoveTree.js


// This will generate an array of moves, specific to class and tree
export function generateMovesList(class_type, moveTreeNumber){
    if (class_type == "Mage"){
        // mtn1 = elemental
        // mtn2 = life energy
        // mtn3 = necromancy
        return MageMoves[moveTreeNumber]
    }
    else if (class_type == "Paladin"){

    }
    else if (class_type == "Assassin"){

    }
    else{
        console.log("Error, improper classtype in Generate Moves List, MoveTree.js")
    }
}

export default function generateMoveTiles(movesList){
    // This should go through each Move in the MoveList and create a div and Component for the MoveTile
    return movesList.map(move => {
        return(
            <div id={move.name + "_tile"}>
                <MoveTile thisMove={move} />
            </div>
        )
    })
}

export const generateMoveTrees = (class_type) => {
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