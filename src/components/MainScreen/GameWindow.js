import { connect } from 'react-redux';
import React, {Component} from 'react';
import AttributeSelection from '../LevelUpSplitters/AttributeSelection';

const mapStateToProps = (state) => {
    return({
        functional: state.functional
    })
}
const mapDispatchToProps = (dispatch) => {

}

class GameWindow extends Component{

    generateGameWindowOptions = (props) => {
        // Since all levelUps (aside from the new game level up) will be done in game,
        // the levelUp component will be called here
        if (props.functional.inLevelUp == true){
            return(<LevelUp />)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameWindow)