import fork from 'src/images/forest/paths/fork.jpg'
import fourway from 'src/images/forest/paths/Fourway.jpg'
import horizontal from 'src/images/forest/paths/horizontal.jpg'
import left_turn from 'src/images/forest/paths/left_turn.jpg'
import open from 'src/images/forest/paths/open.jpg'
import right_turn from 'src/images/forest/paths/right_turn.jpg'
import straight from 'src/images/forest/paths/straight.jpg'
import trees_back from 'src/images/forest/paths/trees_back.jpg'
import Trees_front from 'src/images/forest/paths/Trees_front.jpg'
import trees_full from 'src/images/forest/paths/trees_full.jpg'
import trees_left from 'src/images/forest/paths/trees_left.jpg'
import trees_right from 'src/images/forest/paths/trees_right.jpg'
import left_turn_up from 'src/images/forest/paths/left_turn_up.jpg'
import right_turn_up from 'src/images/forest/paths/right_turn_up.jpg'




export default class ForestImages{
    fork_path(){
        return (< img src={fork} /> )
    }
    fourway_path(){
        return (< img src={fourway} />)
    }
    horizontal_path(){
        return (< img src={horizontal} />)
    }
    tLeft_path(){
        return (< img src={left_turn} />)
    }
    tLeftUp_path(){
        return (< img src={left_turn_up} />)
    }
    open_path(){
        return (< img src={open} /> )
    }
    tRight_path(){
        return (< img src={right_turn} /> )
    }
    tRightUp_path(){
        return (< img src={right_turn_up} /> )
    }
    forward_path(){
        return (< img src={straight} /> )
    }
    trees_back(){
        return (< img src={trees_back} />)
    }
    trees_front(){
        return (< img src={Trees_front} />)
    }
    trees_full(){
        return (< img src={trees_full} />)
    }
    trees_left(){
        return (< img src={trees_left} />)
    }
    trees_right(){
        return (< img src={trees_right} />)
    }

}