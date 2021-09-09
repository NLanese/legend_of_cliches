import { connect } from 'react-redux';
import React, {Component} from 'react';
import Welcome from './Welcome';
import Login from './Login';
import GameWindow from '../MainScreen/GameWindow';


const mapStateToProps = (state) => {

}
const mapDispatchToProps = (dispatch) => {

}

class WelcomeOrLoginOrGame extends Component{

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomeOrLoginOrGame)