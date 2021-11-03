import { connect } from 'react-redux';
import React, {Component} from 'react';
import Welcome from './Welcome';
import Login from './Login';
import GameWindow from '../MainScreen/GameWindow';
import NewGame from './NewGame/NewGame'

import './css/Welcome_Or_Login_Or_Game.css'


const mapStateToProps = (state) => {
    return({
        functions: state.functions
    })
}

class WelcomeOrLoginOrGame extends Component{

    determineScreen = (props) => {
        if (props.functions.inWelcome){
            return (
                <div id="Welcome">
                    <Welcome />
                </div>
            )
        }
        else if (props.functions.inLogin){
            return(
                <div id="Login">
                    <Login />
                </div>
            )
        }
        else if (props.functions.inNew){
            return(
                <div id="NewGame">
                    <NewGame />
                </div>
            )
        }
        else if (props.functions.inGame){
            return(
                <div id="Game">
                    <GameWindow />
                </div>
            )
        }
    }

    render(){
        return(
            <div className="Welcome_Or_Login_Or_Game_Window">
                {this.determineScreen(this.props)}
            </div>
        )
    }
}

export default connect(
    mapStateToProps
)(WelcomeOrLoginOrGame)