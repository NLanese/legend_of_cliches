import { connect } from 'react-redux';
import React, {Component} from 'react';
import StatUpgradePanel from '../../Moves_And_Stats/StatUpgradePanel';

const mapStateToProps = (state) => {
    return({
        newGame: state.newGame,
        levelUp: state.levelUp
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        // This can only be accessed when levelUp.pointsRemaining == 0
        completeSelection: (playerObj) => dispatch({type: "SUBMIT_FOR_REVIEW", payload: playerObj })
    })
}

class AttributeSelection extends Component {
    constructor(){
        super()
        this.state = {
            // Each stat will be the current value (which is assigned to each class by default) 
            // plus whatever increases have been made
            atk: this.props.newGame.currentPlayerObj.atk + this.props.levelUp.atk ,
            sAtk: this.props.newGame.currentPlayerObj.sAtk + this.props.levelUp.sAtk ,
            def: this.props.newGame.currentPlayerObj.def + this.props.levelUp.def ,
            sDef: this.props.newGame.currentPlayerObj.sDef + this.props.levelUp.sDef ,
            spd: this.props.newGame.currentPlayerObj.spd + this.props.levelUp.spd ,
            hp: this.props.newGame.currentPlayerObj.hp + this.props.levelUp.hp 
        }
    }

    changeStatAdd = () => {

    }

    completeAtrSel = () => {
        let playerObj = {
            atk: this.state.atk
        }
    }

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
        return(
            <div id="AttributeSelection">
                <div id='AttributeSelectionHeading'>
                    You have {this.props.levelUp.pointsRemaining} Attribute Points left to assign!
                </div>
                <div id="atkAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"atk"} value={this.state.atk}/>
                </div>
                <div id="sAtkAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"sAtk"} value={this.state.sAtk}/>
                </div>
                <div id="DefAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"def"} value={this.state.def}/>
                </div>
                <div id="sDefAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"sDef"} value={this.state.sDef}/>
                </div>
                <div id="spdAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"spd"} value={this.state.spd}/>
                </div>
                <div id="hpAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"hp"} value={this.state.hp}/>
                </div>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AttributeSelection)