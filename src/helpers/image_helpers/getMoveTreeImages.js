import MageElemental from '../../images/MoveTrees/Mage_Elemental.jpg'
import MageLifeEnergy from '../../images/MoveTrees/Mage_LifeEnergy.jpg'
import MageNecromancer from '../../images/MoveTrees/Mage_Necromancer.jpg'

export default class MoveTreeImages{
    nerco(){
        return(<img src={MageNecromancer} />)
    }
    element(){
        return(<img src={MageElemental} />)
    }
    life(){
        return(<img src={MageLifeEnergy} />)
    }
}