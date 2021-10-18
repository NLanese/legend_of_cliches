import { connect } from 'react-redux';
import React, {Component} from 'react';
import ClassCard from './ClassCard'

import './css/ClassSelection.css'

export default class ClassSelection extends Component {


    render(){
        return(
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
        )
    }
}