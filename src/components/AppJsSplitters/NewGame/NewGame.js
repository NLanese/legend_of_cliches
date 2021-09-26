import { connect } from 'react-redux';
import React, {Component} from 'react';
import ClassCard from './ClassCard'
import ClassSelection from './ClassSelection'

const mapStateToProps = (state) => {
    return({
        newGame: state.newGame
    })
}

class NewGame extends Component {

    which_new_game_segment = () => {
        if (this.props.newGame.inClassSelection){
            return(
                <div>
                    <ClassSelection />
                </div>

            )
        }
    }


    render(){
        return(
        )
    }

}