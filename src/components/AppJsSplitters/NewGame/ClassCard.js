import { connect } from 'react-redux';
import React, {Component} from 'react';
import determineStats from '../../../helpers/new_game_helpers/starter_helper'; // Called on line 53 to render the Stats section of the class Card
import determineCardImage from '../../../helpers/new_game_helpers/determineCardImage';

import "./css/ClassCard.css"


const mapDispatchToProps = (dispatch) => {
    return({
        makeSelection: (classType) => dispatch({type: "CLASS_SELECTED", payload: classType})
    })
}


class ClassCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            upperCardSetting: "Image",      // This will either be set to Image or Stats and will dictate what upperCardRender will return
            classType: props.classType      // This is used to fetch images and determineStats
        }
    }

    // Changes the Card's state to change it from Image to Stats
    flipCard = (state) => {
        let newWord = "Error"
        if (state.upperCardSetting == "Image"){
            newWord = "Stats"
        }
        else if (state.upperCardSetting == "Stats"){
            newWord = "Image"
        }
        this.setState({
            ...this.state, upperCardSetting: newWord
        })
    }

    // Takes a Class Stat Object and turns it into a series of divs to be more easily organized
    renderStats = (classCardObj) => {
        return(
            <div>
                <div id="BioPart">
                    <h1 id="ClassTypeNameOnCard">{classCardObj.className}</h1>
                    <h1 className="CardHeaders">Bio</h1>
                    <div id="CardBio">{classCardObj.bio}</div>
                </div>
                <div id="StatPart">
                    <h1 className="CardHeaders">Stats</h1>
                    <h3 className="CardStats_1" id="atk_1">Strength: {classCardObj.atk}</h3>
                    <h3 className="CardStats_1" id="sAtk_1">Intelligence: {classCardObj.sAtk}</h3>
                    <h3 className="CardStats_1" id="def_1">Endurance: {classCardObj.def}</h3>
                    <h3 className="CardStats_1" id="sDef_1">Willpower: {classCardObj.sDef}</h3>
                    <h3 className="CardStats_1" id="spd_1">Dexterity: {classCardObj.spd}</h3>
                    <h3 className="CardStats_1" id="hp_1">Health: {classCardObj.hp}</h3>
                </div>
            </div>
        )
    }

    // Handles whether to render the stats or image
    renderUpperCard = (state) => {
        // If the card hasn't been clicked or has been clicked an evemn amount of times it will show the image
        if (state.upperCardSetting == "Image"){
            return(
                <div id="ClassCardImage" onClick={() => this.flipCard(this.state)}>
                    <h1 id="ClassImageTitle">{this.state.classType}</h1>
                    {/* The following method is imported from helpers/new_game_helpers/determineCardImages and takes an input expecting "Mage" "Assassin" or "Paladin" */}
                    {determineCardImage(this.state.classType)}
                </div>
            )
        }
        // If the card has been clicked an odd number of times, it will display stats
        else if (state.upperCardSetting == "Stats"){
            return(
                <div id="ClassCardStatsAndBio" onClick={() => this.flipCard(this.state)}>
                    {this.renderStats(determineStats(state.classType))}
                </div>
            )
        }
    }

    // Called when submit button is selected
    selectHero = (event, classType) => {
        event.preventDefault()
        this.props.makeSelection(classType)
    }

    render(){
        return(
            <div className="Class_Card">
                {/* This is the top 70% of the card. It will be an image with a name, and when clicked will rotate toa bio and default stats */}
                <div className="Class_Card_Upper" id="ClassCardImage">
                    {this.renderUpperCard(this.state)}
                </div>
                {/* This will be a selection button */}
                <div className="Class_Card_Bottom">
                    <button id="ClassSelectButton" onClick={(event) => this.selectHero(event, determineStats(this.props.classType))}>Select Class</button>
                </div>
            </div>
        )
    }

}

export default connect(
    null, 
    mapDispatchToProps
)(ClassCard)