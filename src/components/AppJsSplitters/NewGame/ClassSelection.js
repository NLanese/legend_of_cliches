import { connect } from 'react-redux';
import React, {Component} from 'react';
import ClassCard from './ClassCard'

class ClassSelection extends Component {


    render(){
        return(
            <div id="ClassSelection">

                <div id="MageClassCard">
                    <ClassCard classType="Mage"/>
                </div>

                <div id="Paladin">
                    <ClassCard classType="Paladin" />
                </div>

                <div id="Assassin">
                    <ClassCard classType="Assassin" />
                </div>

            </div>
        )
    }
}