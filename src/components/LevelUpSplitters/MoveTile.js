import { connect } from 'react-redux';
import React, {Component} from 'react';
import { MageMoves } from '../../constants/moves/mageMoves';

const mapStateToProps = (state) => {
    return({
        player: state.player
    })
}

const mapDispatchToProps = (dispatch) => {

}

class MoveTile extends Component{
    constructor(props){
        super(props)
        this.state ={
        }

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoveTile)