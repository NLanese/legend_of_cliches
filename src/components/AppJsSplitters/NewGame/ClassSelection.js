import { connect } from 'react-redux';
import React, {Component} from 'react';
import ClassCard from './ClassCard'

import './css/ClassSelection.css'

export default class ClassSelection extends Component {


    render(){
        return(
            <div className="Overlay">
                <div id="CardContainerHeader">
                <h1 id="CCH_Prompt">Select a Class</h1>
                <p id="CCH_Content">Click an Image to see its stats and bio</p>
                </div>
                <div id="CardContainer">
                    <div id="Mage" className="SelectionCard">
                        <ClassCard classType={"Mage"}/>
                    </div>

                    <div id="Paladin" className="SelectionCard">
                        <ClassCard classType={"Paladin"} />
                    </div>

                    <div id="Assassin" className="SelectionCard">
                        <ClassCard classType={"Assassin"} />
                    </div>
                </div>
            </div>
        )
    }
}