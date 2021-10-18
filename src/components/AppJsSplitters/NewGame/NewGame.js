import { connect } from 'react-redux';
import React, {Component} from 'react';
import ClassSelection from './ClassSelection'
import AttributeSelection from './AttributeSelection';
import './css/NewGame.css'

const mapStateToProps = (state) => {
    return({
        newGame: state.newGame
    })
}

class NewGame extends Component {

    which_new_game_segment = (props) => {
        // This is the first "step" in creating a new game
        if (props.newGame.inClassSelection){
            return(
                <div id="ClassSelection">
                    <ClassSelection />
                </div>

            )
        }
        // This is the second "step" in creating a new game
        else if (props.newGame.inAttributes){
            return(
                <div id="AttributeSelection">
                    <AttributeSelection />
                </div>
            )
        }
    }


    render(){
        return(
            <div id="NewGameContentContainer">
                {this.which_new_game_segment(this.props)}
            </div>
        )
    }

}

export default connect(
    mapStateToProps
)(NewGame)