import { connect } from 'react-redux';
import React, {Component} from 'react';
import './css/Welcome.css'

const mapStateToProps = (state) => {

}
const mapDispatchToProps = (dispatch) => {
    return({
        startNewGame: () => dispatch({type: "SET_UP_NEW_GAME"})
    })
}

class Welcome extends Component{

    startNewGame = () => {
        this.props.startNewGame()
    }

    render(){
        return(
            <div className="Welcome_Screen">
                <div id="WelcomeBackground"></div>
                <h1 id="WelcomeBanner">Welcome to <div id="BigOlText">Legend of Cliches </div></h1>
                <div className="Welcome_Menu">
                    <div className="Welcome_Option" id="New" onClick={this.startNewGame}>
                         - New Story -
                    </div>
                    <div className="Welcome_Option" id="Load">
                         - Resume Journey -
                    </div>
                    <div className="Welcome_Option" id="Info">
                         - About -
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Welcome)