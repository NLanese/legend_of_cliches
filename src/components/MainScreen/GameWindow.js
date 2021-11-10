import { connect } from 'react-redux';
import React, {Component} from 'react';
import { LevelUp } from '../LevelUpSplitters/LevelUp';
import MoveTree from '../LevelUpSplitters/MoveTree';

const mapStateToProps = (state) => {
    return({
        functional: state.functions,
        levelUp: state.levelUp
    })
}
const mapDispatchToProps = (dispatch) => {
    return({

    })
}

class GameWindow extends Component{

    generateGameWindowOptions = (props) => {
        // Since all levelUps (aside from the new game level up) will be done in game,
        // the levelUp component will be called here
        if (props.functional.inLevelUp == true){
            return(
            <div id="levelUpWindow" class= "Overlay">
                <LevelUp props={props.levelUp}/>
            </div>)
        }
        // The move tree can be selected from the in game menu, not just through leveling up
        else if (props.functional.inLevelUp == false && props.levelUp.inMoveTree == true){
            return (<MoveTree />)
        }
    }
    render(){
        console.log(this.props)
        return(
            <div id="GameWindow">
                {this.generateGameWindowOptions(this.props)}
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameWindow)