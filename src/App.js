import './App.css';
import { connect } from 'react-redux';
import React, {Component} from 'react';
import mainHUD from './images/main_screen/Main_Backdrop.jpg'

import Welcome_Or_Login_Or_Game from './components/AppJsSplitters/Welcome_Or_Login_Or_Game';

// MAP FUNCTIONS BELOW-----------------------------------------------------------------

const mapStateToProps = (state) => {
  return({
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
  })
}

// MAP FUNCTIONS ABOVE-----------------------------------------------------------------


class App extends Component{
  render(){
    return(
      <div className="Main_App_Window">
        <img src={mainHUD} id="MainHUD"/>
        <Welcome_Or_Login_Or_Game />
      </div>
    )
  }

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)