import { connect } from 'react-redux';
import React, {Component} from 'react';
import ClassSelection from './ClassSelection'
import AttributeSelection from './AttributeSelection';

const mapStateToProps = (state) => {
    return({
        newGame: state.newGame
    })
}

class NewGame extends Component {

    which_new_game_segment = () => {
        // This is the first "step" in creating a new game
        if (this.props.newGame.inClassSelection){
            return(
                <div>
                    <ClassSelection />
                </div>

            )
        }
        // This is the second "step" in creating a new game
        else if (this.props.newGame.inAttributes){
            return(
                <div>
                    <AttributeSelection />
                </div>
            )
        }
    }


    render(){
        return(
            <div>
                {this.which_new_game_segment}
            </div>
        )
    }

}