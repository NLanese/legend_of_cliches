import { connect } from 'react-redux';
import React, {Component} from 'react';
import MoveTreeImages from '../../helpers/Moves_And_Stats_Helpers/MoveTreeImgImporter';
import MoveTile from './MoveTile';
import { MageMoves } from '../../constants/moves/mageMoves';

const mapStateToProps = (state) => {
    return({
        player: state.player
    })
}

class MoveTree extends Component{

    generateMovesList(class_type, moveTreeNumber){
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
    
    generateMoveTrees = (class_type) => {
        let moveTrees = MoveTreeImages(class_type)
        return(
            <div id="AllMoveTrees">
                <div className="MoveTree" id="MT1">
                    {moveTrees[0]}
                    <div id="moveTiles1">

                    </div>
                </div>
                <div className="MoveTree" id="MT2">
                    {moveTrees[1]}
                </div>
                <div className="MoveTree" id="MT3">
                    {moveTrees[2]}
                </div>
            </div>
        )
    }
    render(){
        return(
            <div className="Overlay">
                {this.generateMoveTrees(this.props.player.class)}
            </div>
        )
    }
}
export default connect(
    mapStateToProps
)(MoveTree)