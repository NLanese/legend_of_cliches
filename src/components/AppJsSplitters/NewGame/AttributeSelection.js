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

    renderContinueButton = (pointsRemaining) => {
        if (pointsRemaining == 0){
            return(
                <div id="AllAssigned" className="StatCompleteButton">
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
                <div id="atkAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel value={this.state.atk} isHealth={false}/>
                </div>
                <div id="sAtkAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel value={this.state.sAtk} isHealth={false}/>
                </div>
                <div id="DefAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel value={this.state.def} isHealth={false}/>
                </div>
                <div id="sDefAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel value={this.state.sDef} isHealth={false}/>
                </div>
                <div id="spdAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel value={this.state.spd} isHealth={false}/>
                </div>
                <div id="hpAtr1" className="StatAreaAttrSel">
                    <StatUpgradePanel value={this.state.hp} isHealth={true}/>
                </div>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AttributeSelection)