import { connect } from 'react-redux';
import React, {Component} from 'react';
import Welcome from './Welcome';
import Login from './Login';
import GameWindow from '../MainScreen/GameWindow';


const mapStateToProps = (state) => {
    return({
        functions: state.functions
    })

}

class WelcomeOrLoginOrGame extends Component{

    determineScreen = (props) => {
        if (props.functions.inWelcome){
            return (
                <div>
                    <Welcome />
                </div>
            )
        }
        else if (props.functions.inLogin){
            <div>
                <Login />
            </div>
        }
        else if (props.functions.inGame){
            <div>
                <GameWindow />
            </div>
        }
    }

    render(){
        return(
            <div className="Welcome_Or_Login_Or_Game_Window">
                {console.log("inside of Welcome_Or_Login_Or_Game, the current props are" + this.props)}
                {this.determineScreen(this.props)}
            </div>
        )
    }
}

export default connect(
    mapStateToProps
)(WelcomeOrLoginOrGame)