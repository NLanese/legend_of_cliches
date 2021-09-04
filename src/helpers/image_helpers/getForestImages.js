import fork from '../../images/forest/paths/fork.jpg'
import fork_top from '../../images/forest/paths/fork_top.jpg'
import fourway from '../../images/forest/paths/Fourway.jpg'
import horizontal from '../../images/forest/paths/horizontal.jpg'
import left_turn from '../../images/forest/paths/left_turn.jpg'
import open from '../../images/forest/paths/open.jpg'
import right_turn from '../../images/forest/paths/right_turn.jpg'
import straight from '../../images/forest/paths/straight.jpg'
import trees_back from '../../images/forest/paths/trees_back.jpg'
import Trees_front from '../../images/forest/paths/Trees_front.jpg'
import trees_full from '../../images/forest/paths/trees_full.jpg'
import trees_left from '../../images/forest/paths/trees_left.jpg'
import trees_right from '../../images/forest/paths/trees_right.jpg'
import left_turn_up from '../../images/forest/paths/left_turn_up.jpg'
import right_turn_up from '../../images/forest/paths/right_turn_up.jpg'
import right_corner_tree_top from '../../images/forest/paths/right_corner_tree_top.jpg'
import left_corner_tree_top from '../../images/forest/paths/left_corner_tree_top.jpg'
import right_corner_tree_bottom from '../../images/forest/paths/right_corner_tree_bottom.jpg'
import left_corner_tree_bottom from '../../images/forest/paths/left_corner_tree_bottom.jpg'


export default class ForestImages{
    fork_path(){
        return (< img src={fork} /> )
    }
    fork_top_path(){
        return (< img src={fork_top} /> )
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
    tree_RC_top(){
        return (< img src={right_corner_tree_top} />)
    }
    tree_RC_bottom(){
        return (< img src={right_corner_tree_bottom} />)
    }
    tree_LC_top(){
        return (< img src={left_corner_tree_top} />)
    }
    tree_LC_bottom(){
        return (< img src={left_corner_tree_bottom} />)
    }
}