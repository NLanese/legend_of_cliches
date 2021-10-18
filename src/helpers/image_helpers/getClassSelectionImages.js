import Assassin from '../../images/classSelectionImages/Assassin.jpg'
import Mage from '../../images/classSelectionImages/Mage.jpg'
import Paladin from '../../images/classSelectionImages/Paladin.jpg'

export default class ClassSelectionImages{
    assassin(){
        return (<img src={Assassin} className="CardImage"/>)
    }
    mage(){
        return (<img src={Mage} className="CardImage"/>)
    }
    paladin(){
        return (<img src={Paladin} className="CardImage"/>)
    }
}