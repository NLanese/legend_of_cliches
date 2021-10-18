import { connect } from 'react-redux';
import React, {Component} from 'react';
import getImage from '../../../helpers/image_helpers/getImage'
import determineStats from '../../../helpers/new_game_helpers/starter_helper'; // Called on line 53 to render the Stats section of the class Card
import determineCardImage from '../../../helpers/new_game_helpers/determineCardImage';


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
        console.log(this.state)
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
                <h1 id="ClassTypeNameOnCard">{classCardObj.className}</h1>
                <h1 className="CardHeaders">Bio</h1>
                <div id="CardBio">{classCardObj.bio}</div>
                <h1 className="CardHeaders">Stats</h1>
                <h3 className="CardStats_1" id="atk_1">{classCardObj.atk}</h3>
                <h3 className="CardStats_1" id="sAtk_1">{classCardObj.sAtk}</h3>
                <h3 className="CardStats_1" id="def_1">{classCardObj.def}</h3>
                <h3 className="CardStats_1" id="sDef_1">{classCardObj.sDef}</h3>
                <h3 className="CardStats_1" id="spd_1">{classCardObj.spd}</h3>
                <h3 className="CardStats_1" id="hp_1">{classCardObj.atk}</h3>
            </div>
        )
    }

    // Handles whether to render the stats or image
    renderUpperCard = (state) => {
        console.log(state)
        if (state.upperCardSetting == "Image"){
            return(
                <div id="ClassCardImage">
                    {/* The following method is imported from helpers/new_game_helpers/determineCardImages and takes an input expecting "Mage" "Assassin" or "Paladin" */}
                    {determineCardImage(this.state.classType)}
                </div>
            )
        }
        else if (state.upperCardSetting == "Stats"){
            return(
                <div id="ClassCardStatsAndBio">
                    {this.renderStats(determineStats(state.classType))}
                </div>
            )
        }
    }

    selectHero = (event, classType) => {
        event.preventDefault()
        this.props.makeSelection(classType)
    }

    render(){
        console.log(this.state)
        return(
            <div className="Class_Card">
                {/* This is the top 70% of the card. It will be an image with a name, and when clicked will rotate toa bio and default stats */}
                <div className="Class_Card_Upper" id="ClassCardImage">
                    {this.renderUpperCard(this.state)}
                </div>
                {/* This will be a selection button */}
                <div className="Class_Card_Bottom">
                    <button id="ClassSelectButton" onClick={(event) => this.selectHero(event, this.props.classType)}>Select Class</button>
                </div>
            </div>
        )
    }

}

export default connect(
    null, 
    mapDispatchToProps
)(ClassCard)