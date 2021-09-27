import { connect } from 'react-redux';
import React, {Component} from 'react';
import getImage from '../../../helpers/image_helpers/getImage'
import determineStats from '../../../helpers/new_game_helpers/starter_helper'; // Called on line 53 to render the Stats section of the class Card


const mapStateToProps = (state) => {
    return({
        empty: null
    })
}
const mapDispatchToProps = (dispatch) => {
    return({
        makeSelection: (classType) => dispatch({type: "CLASS_SELECTED", payload: classType})
    })
}


class ClassCard extends Component {

    constructor(){
        super()
        this.setState({
            upperCardSetting: "Image",      // This will either be set to Image or Stats and will dictate what upperCardRender will return
        })
    }

    // Changes the Card's state to change it from Image to Stats
    flipCard = () => {
        let newWord = "Error"
        if (this.state.upperCardSetting == "Image"){
            newWord = "Stats"
        }
        else if (this.state.upperCardSetting == "Stats"){
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
    renderUpperCard = () => {
        if (this.state.upperCardSetting == "Image"){
            return(
                <div id="ClassCardImage">
                    {/* this will be a (classType) name recieved from the props. This will then be inputted into an Image helper */}
                    {/* use a getImage value to insert here */}
                </div>
            )
        }
        else if (this.state.upperCardSetting == "Stats"){
            return(
                <div id="ClassCardStatsAndBio">
                    {this.renderStats(determineStats(this.props.classType))}
                </div>
            )
        }
    }

    selectHero = (event, classType) => {
        event.preventDefault()
        this.props.makeSelection(classType)
    }

    render(){
        return(
            <div className="Class_Card">
                {/* This is the top 70% of the card. It will be an image with a name, and when clicked will rotate toa bio and default stats */}
                <div className="Class_Card_Upper" id="ClassCardImage">
                    {this.renderUpperCard()}
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
    mapStateToProps, 
    mapDispatchToProps
)(ClassCard)