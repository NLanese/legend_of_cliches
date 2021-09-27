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

class AttributeSelection extends Component {
    constructor(){
        super()
        this.state = {
            atk: this.props.newGame.currentPlayerObj.atk,
            sAtk: this.props.newGame.currentPlayerObj.sAtk,
            def: this.props.newGame.currentPlayerObj.def,
            sDef: this.props.newGame.currentPlayerObj.sDef,
            spd: this.props.newGame.currentPlayerObj.spd,
            hp: this.props.newGame.currentPlayerObj.hp
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AttributeSelection)