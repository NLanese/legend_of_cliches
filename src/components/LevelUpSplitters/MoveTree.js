import { connect } from 'react-redux';
import React, {Component} from 'react';
import { generateMoveTrees } from '../../helpers/Moves_And_Stats_Helpers/TreeAndTileGenerators';


const mapStateToProps = (state) => {
    return({
        player: state.player
    })
}

class MoveTree extends Component{


    render(){
        console.log("Inside of Move Tree. We made it, boys")
        return(
            <div className="Overlay">
                {generateMoveTrees(this.props.player.class)}
            </div>
        )
    }
}
export default connect(
    mapStateToProps
)(MoveTree)