import { connect } from 'react-redux';
import React, {Component} from 'react';

const mapStateToProps = (state) => {
    return({
        newGame: state.newGame
    })
}

const mapDispatchToProps = (dispatch) => {
    return({

    })
}

class StatUpgradePanel extends Component {
// Gets one prop passed down as "value" and it will be a single integer
    constructor(){
        super()
        this.state = {
            value: this.props.value // Passed down from Parent Component
        }
    }

    render(){
        return(
            <div id="Stat_And_Arrows"
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatUpgradePanel)