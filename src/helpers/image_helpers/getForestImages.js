import fork from 'src/images/forest/paths/fork.jpg'
import fourway from 'src/images/forest/paths/Fourway.jpg'
import horizontal from 'src/images/forest/paths/horizontal.jpg'
import left_turn from 'src/images/forest/paths/left_turn.jpg'
import open from 'src/images/forest/paths/open.jpg'
import right_turn from 'src/images/forest/paths/right_turn.jpg'
import straight from 'src/images/forest/paths/straight.jpg'
import trees_back from 'src/images/forest/paths/trees_back.jpg'




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
}