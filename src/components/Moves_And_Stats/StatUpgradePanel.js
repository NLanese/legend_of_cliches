import { connect } from 'react-redux';
import React, {Component} from 'react';
import howManyPoints from '../../helpers/Moves_And_Stats_Helpers/AttributeUpgradeLevelHelper';

const mapStateToProps = (state) => {
    return({
        newGame: state.newGame,
        player: state.player
    })
}

const mapDispatchToProps = (dispatch) => {
    return({

    })
}

class StatUpgradePanel extends Component {
// Gets a prop passed down as "value" a single integer
    constructor(){
        super()
        this.state = {
            value: this.props.value,                            // Passed down from Parent Component
            pointsToAssign: howManyPoints(this.props.player.level)     // this.props.player.level will be passed down from Master Reducer
        }
    }

    handleMinusClick = (event) => {

    }

    handleAddClick = (event) => {

    }

    render(){
        return(
            <div id="Stat_And_Arrows">
                <div id="StatMinus"></div>
                <div id="StatValue"></div>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatUpgradePanel)