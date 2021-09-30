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
        completeSelection: (playerObj) => dispatch({type: "SUBMIT_FOR_REVIEW", payload: playerObj })
    })
}

class AttributeSelection extends Component {
    constructor(){
        super()
        this.state = {
            atk: this.props.newGame.currentPlayerObj.atk,
            sAtk: this.props.newGame.currentPlayerObj.sAtk,
            def: this.props.newGame.currentPlayerObj.def,
            sDef: this.props.newGame.currentPlayerObj.sDef,
            spd: this.props.newGame.currentPlayerObj.spd,
            hp: this.props.newGame.currentPlayerObj.hp
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
        if (pointsRemaining == 0){
            return(
                <div id="AllAssigned" className="StatCompleteButton" onClick={this.completeAtrSel}>
                    Continue
                </div>
            )
        }
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
                    <StatUpgradePanel name={"atk"} value={this.state.atk} isHealth={false}/>
                </div>
                <div id="sAtkAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"sAtk"} value={this.state.sAtk} isHealth={false}/>
                </div>
                <div id="DefAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"def"} value={this.state.def} isHealth={false}/>
                </div>
                <div id="sDefAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"sDef"} value={this.state.sDef} isHealth={false}/>
                </div>
                <div id="spdAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"spd"} value={this.state.spd} isHealth={false}/>
                </div>
                <div id="hpAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel name={"hp"} value={this.state.hp} isHealth={true}/>
                </div>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AttributeSelection)