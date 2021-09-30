import { connect } from 'react-redux';
import React, {Component} from 'react';
import './css/StatUpgradePanel.css'

const mapStateToProps = (state) => {
    return({
        newGame: state.newGame,
        player: state.player,
        levelUp: state.levelUp
    })
}

const mapDispatchToProps = (dispatch) => {
    return({

    })
}

class StatUpgradePanel extends Component {
// Gets a prop passed down as "value" a single integer
    constructor(props){
        super()
        this.state = {
            isHealth: this.props.isHealth,                  // True if the stat is HP. This is because HP upgrading works differently
            value: this.props.value,                        // Passed down from Parent Component
            times_increased: 0,                             // Goes up once every tme AddClick is executed. If above 0, goes down 1 every time MinusClick is executed
            increased_left: props.levelUp.pointsRemaining   // This will be taken from the LevelUp state to make sure you do not go over the allowed points.... shoudn't be needed here, but its a failsafe
        }
    }

    handleMinusClick = (event) => {

    }

    handleAddClick = (event) => {

    }

    renderStatColor = (state) => {
        if (state.times_increased > 0){
            <div id="incStatLvlUp">
                {state.value}
            </div>
        }
        else{            
            <div id="regStatLvlUp">
                {state.value}
            </div>
        }
    }

    render(){
        return(
            <div id="Stat_And_Arrows">
                <div id="StatMinus"></div>
                <div id="StatValue"></div>
                {this.renderStatColor(this.state)}
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatUpgradePanel)