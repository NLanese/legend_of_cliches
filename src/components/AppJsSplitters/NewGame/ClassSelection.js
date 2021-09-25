import { connect } from 'react-redux';
import React, {Component} from 'react';
import ClassCard from './ClassCard'

class ClassSelection extends Component {


    render(){
        return(
            <div id="ClassSelection">

                <div id="MageClassCard">
                    <ClassCard img="mage"/>
                </div>

                <div id="Paladin">
                    <ClassCard img="paladin" />
                </div>

                <div id="Assassin">
                    <ClassCard img="assassin" />
                </div>

            </div>
        )
    }
}