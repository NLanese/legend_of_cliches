import { connect } from 'react-redux';
import React, {Component} from 'react';
import getImage from '../../../helpers/image_helpers/getImage'


class ClassCard extends Component {

    constructor(){
        super()
        this.setState({
            upperCardSetting: "Image",      // This will either be set to Image or Stats and will dictate what upperCardRender will return
        })
    }

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

    renderStats = (classCardObj) => {
        return(
            <div>
                <h1 id="ClassTypeNameOnCard">{classCardObj.className}</h1>
                <h1 className="CardHeaders">Bio</h1>
                <div id="CardBio">{classCardObj.bio}</div>
                <h1 className="CardHeaders">Stats</h1>
                <h3 className="CardStats_1" id="atk_1">{classCardObj.atk}</h3>
            </div>
        )
    }

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
                    {this.renderStats(this.props.classType)}
                </div>
            )
        }
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

                </div>
            </div>
        )
    }

}