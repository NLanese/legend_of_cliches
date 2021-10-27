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

// Contains dispatch actions to add or remove the proper value from a stat when it's
// plus or minus attribute indicator is clicked
const mapDispatchToProps = (dispatch) => {
    return({
        // This occurs when a stat plus is clicked, adding the appropriate value to the appropriate stat
        upAttribute: (name) => dispatch({type: "ADD_POINT", payload: name}),

        // This occurs when a stat minus is clicked, removing the appropriate value from the appropriate stat
        downAttribute: (name) => dispatch({type: "MINUS_POINT", payload: name})
    })
}

class StatUpgradePanel extends Component {
// Gets a prop passed down as "value" a single integer. Also gets "name" which will be a a string of the stat's name
    constructor(props){
        super(props)
        this.state = {
            value: this.props.value,                        // Passed down from Parent Component
            times_increased: 0,                             // Goes up once every tme AddClick is executed. If above 0, goes down 1 every time MinusClick is executed
            name: this.props.name                           // Gives stat name ("atk", "def", etc.). This is used in the dispatch 
        }
    }

    // This is called when a minus next to a stat value is clicked, indicated an attribute point be removed
    handleMinusClick = (event, name) => {
        event.preventDefault()
        // Cannot remove points from an attribute you have not upgraded
        if (this.state.times_increased > 0){
            // changes the levelUp reducer to properly convey the chnages 
            this.props.downAttribute(name)

            // This is only to get Health to decrease by 5, everything else by 1 
            let down = 1
            if (name == "Health"){
                down = 5
            }

            // Changes the local values which dictate the text and color of the text
            this.setState({
                ...this.state, value: this.state.value - down, times_increased: this.state.times_increased - 1
            })
        }
    }

    // This is called when a plus next to a stat value is clicked, indicated an attribute point be added
    handleAddClick = (event, name) => {
        event.preventDefault()
        // Locks the upgrade buttons when you have no points left
        if (this.props.levelUp.pointsRemaining > 0){
            // Dispatches to change the levelUp state, thus keeping all the changes safely held until the user submits them
            this.props.upAttribute(name)

            // This is only to get Health to increase by 5, everything else by 1 
            let up = 1
            if (name == "Health"){
                up = 5
            }
            // Changes the local values which dictate the text and color of the text
            this.setState({
                ...this.state, value: this.state.value + up, times_increased: this.state.times_increased + 1
            })
        }
    }


    // This is just sued to render the stat value, of increased it will have a tag id that makes the text green
    renderStatColor = (state) => {
        if (state.times_increased > 0){
            return(
                <div id="IncStatLvlUp">
                    {state.value}
                </div>
            )
        }
        else{       
            return(
                <div id="regStatLvlUp">
                    {state.value}
                </div>
            )     
        }
    }

    render(){
        return(
            <div id="Stat_And_Arrows">
                {/* this button can only be clicked if the stat has had an increase to it  */}
                <button id="StatMinus" onClick={event => this.handleMinusClick(event, this.state.name)}> - </button>
                {/* this button can be clicked as long as levelUp.pointsRemaining is greater than 0 */}
                <button id="StatAdd" onClick={event => this.handleAddClick(event, this.state.name)}> + </button>
                {/* this will render the actual text to let the user know what they're upgrading. The color will be green if upgraded, grey if not */}
                <h4 id="StatNameOnPanel"> {this.state.name} </h4>
                <h4 id="StatUpgradeValue">{this.renderStatColor(this.state)}</h4>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatUpgradePanel)