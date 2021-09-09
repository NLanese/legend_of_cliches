import './App.css';
import { connect } from 'react-redux';
import React, {Component} from 'react';

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
        
      </div>
    )
  }

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)