import { connect } from 'react-redux';
import React, {Component} from 'react';
import MoveTreeImages from '../../helpers/Moves_And_Stats_Helpers/MoveTreeImgImporter';

const mapStateToProps = (state) => {
    return({
        player: state.player
    })
}

class MoveTree extends Component{
    
    generateMoveTrees = (class_type) => {
        let moveTrees = MoveTreeImages(class_type)
        return(
            <div id="AllMoveTrees">
                <div className="MoveTree" id="MT1">
                    {moveTrees[0]}
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