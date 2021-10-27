import { connect } from 'react-redux';
import React, {Component} from 'react';
import StatUpgradePanel from '../../Moves_And_Stats/StatUpgradePanel';

import './css/AttributeSelection.css'

const mapStateToProps = (state) => {
    return({
        newGame: state.newGame,
        levelUp: state.levelUp
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        // This can only be accessed when levelUp.pointsRemaining == 0
        // It will lock the current attribute values and move on to the next screen
        completeSelection: (playerObj) => dispatch({type: "ADVANCE", payload: playerObj })
    })
}

class AttributeSelection extends Component {

    // Creates a local state that inherits all of the appropriate attribuite values from 
    // aa player object
    constructor(props){
        super(props)
        this.state = {
            // Each stat will be the current value (which is assigned to each class by default) 
            // plus whatever increases have been made
            atk: this.props.newGame.currentPlayerObj.atk + this.props.levelUp.atkInc ,
            sAtk: this.props.newGame.currentPlayerObj.sAtk + this.props.levelUp.sAtkInc ,
            def: this.props.newGame.currentPlayerObj.def + this.props.levelUp.defInc,
            sDef: this.props.newGame.currentPlayerObj.sDef + this.props.levelUp.sDefInc,
            spd: this.props.newGame.currentPlayerObj.spd + this.props.levelUp.spdInc,
            hp: this.props.newGame.currentPlayerObj.hp + this.props.levelUp.hpInc 
        }
    }

    changeStatAdd = () => {

    }

    completeAtrSel = () => {
        let playerObj = {
            atk: this.state.atk
        }
    }

    // Contains the DISPATCH action that submits the attribute points. 
    // It will only be clickable if all of the attribute points have been spent
    renderContinueButton = (pointsRemaining) => {
        // If all points have been spent, the button will appear and be clickable
        if (pointsRemaining == 0){
            return(
                <div id="AllAssigned" className="StatCompleteButton" onClick={this.completeAtrSel}>
                    Continue
                </div>
            )
        }
        // Else, all points haven't been spent, cannot continue or click the button
        else{
            return(
                <div id="NotAllAssigned" className="StatCompleteButton">
                    Assign All Points Before Continuing!
                </div>
            )
        }
    }

    render(){
        console.log(this.state)
        return(
            <div id="AttributeSelection">
                <div id='AttributeSelectionHeading'>
                    You have {this.props.levelUp.pointsRemaining} Attribute Points left to assign!
                </div>
                <div id="atkAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"Strength"} value={this.state.atk}/>
                </div>
                <div id="sAtkAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"Intelligence"} value={this.state.sAtk}/>
                </div>
                <div id="DefAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"Endurance"} value={this.state.def}/>
                </div>
                <div id="sDefAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"Willpower"} value={this.state.sDef}/>
                </div>
                <div id="spdAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"Dexterity"} value={this.state.spd}/>
                </div>
                <div id="hpAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"Health"} value={this.state.hp}/>
                </div>
                <div id="ContinueAtrSel">
                    {this.renderContinueButton(this.props.levelUp.pointsRemaining)}
                </div>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AttributeSelection)