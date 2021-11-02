import { connect } from 'react-redux';
import React, {Component} from 'react';
import StatUpgradePanel from '../Moves_And_Stats/StatUpgradePanel';
import determineCardImage from '../../helpers/new_game_helpers/determineCardImage';
import completeAttributeSelection from '../../dispatch_actions/CompleteAttributeSelection';

import './css/AttributeSelection.css'

const mapStateToProps = (state) => {
    return({
        newGame: state.newGame,
        levelUp: state.levelUp,
        functional: state.functions
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        // This can only be accessed when levelUp.pointsRemaining == 0
        // It will lock the current attribute values and move on to the next screen
        completeSelection: (playerObj) => completeAttributeSelection(playerObj)
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
            class: this.props.newGame.class,
            atk: this.props.newGame.currentPlayerObj.atk + this.props.levelUp.atkInc ,
            sAtk: this.props.newGame.currentPlayerObj.sAtk + this.props.levelUp.sAtkInc ,
            def: this.props.newGame.currentPlayerObj.def + this.props.levelUp.defInc,
            sDef: this.props.newGame.currentPlayerObj.sDef + this.props.levelUp.sDefInc,
            spd: this.props.newGame.currentPlayerObj.spd + this.props.levelUp.spdInc,
            hp: this.props.newGame.currentPlayerObj.hp + this.props.levelUp.hpInc, 

            // This is to keep track of any entered name during the New Game Route
            name: null
        }
    }

    completeAtrSel = (functions, state, props) => {
        let name = null
        if (functions.id == null){
            name = state.name
        }
        else{
            name = functions.name
        }
        let playerObj = {
            class: this.state.class,
            atk: this.state.atk,
            sAtk: this.state.atk,
            def: this.state.def,
            sDef: this.state.sDef,
            spd: this.state.spd,
            hp: this.state.hp,
            name: name
        }
        props.completeSelection(playerObj)
    }

    // Contains the DISPATCH action that submits the attribute points. 
    // It will only be clickable if all of the attribute points have been spent
    // A successful click will run completeAtrSel function
    renderContinueButton = (pointsRemaining, state) => {
        // If all points have been spent, the button will appear and be clickable
        if (pointsRemaining == 0 && state.name != null){
            return(
                <div id="AllAssigned" className="StatCompleteButton" onClick={this.completeAtrSel(this.props.functional, this.state, this.props)}>
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

    nameChange = (event) => {
        this.setState({
            ...this.state, name: event.target.value
        })
    }

    renderNameTag = (functions) => {
        if (functions.id != null){
            return(
                <div id="PlayerNameLocked" className="AttrNameTag">
                    {functions.name}
                </div>
            )
        }
        else{
            return(
                <div id="PlayerNamePending" className="AttrNameTag">
                    Enter Your Hero's Name: <input type="text" onChange={(event) => this.nameChange(event)} />
                </div>
            )
        }
    }

    render(){
        console.log(this.props.levelUp)
        return(
            <div id="AttributeSelection">
                <div id="AttrImg">
                    {determineCardImage(this.props.newGame.currentPlayerObj.class_name)}
                </div>
                <div id="AttrNameTag">
                    {this.renderNameTag(this.props.functional)}
                </div>
                <div id="AttrInfor">
                    <h1 id="Attribute Descriptions"></h1>
                </div>
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
                    {this.renderContinueButton(this.props.levelUp.pointsRemaining, this.state)}
                </div>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AttributeSelection)