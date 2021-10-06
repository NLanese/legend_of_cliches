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
// Gets a prop passed down as "value" a single integer. Also gets "name" which will be a a string of the stat's name
    constructor(props){
        super()
        this.state = {
            isHealth: this.props.isHealth,                  // True if the stat is HP. This is because HP upgrading works differently
            value: this.props.value,                        // Passed down from Parent Component
            times_increased: 0,                             // Goes up once every tme AddClick is executed. If above 0, goes down 1 every time MinusClick is executed
        }
    }

    handleMinusClick = (event) => {
        event.preventDefault()
        if (this.state.times_increased > 0){
            this.
        }
    }

    handleAddClick = (event) => {
        event.preventDefault()

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
                {/* this button can only be clicked if the stat has had an increase to it  */}
                <button id="StatMinus" onClick={event => this.handleMinusClick(event)}> - </button>
                {/* this button can be clicked as long as levelUp.pointsRemaining is greater than 0 */}
                <button id="StatValue" onClick={event => this.handleAddClick(event)}> + </button>
                {this.renderStatColor(this.state)}
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatUpgradePanel)