// Import all image files from the images folder
// import '../images/<whatever>'
import ForestImages from "./getForestImages";
let forest = new ForestImages()

export const allImages = {
    forest: {
        pathways: {
            fork: forest.fork_path(),
            fork_up: forest.fork_top_path(),
            fourway: forest.fourway_path(),
            horizontal: forest.horizontal_path(),
            turnLeft: forest.tLeft_path(),
            turnLeftUp: forest.tLeftUp_path(),
            open: forest.open_path(),
            turnRight: forest.tRight_path(),
            turnRightUp: forest.tRightUp_path(),
            forward: forest.forward_path()
        },

        walls: {
            trees_back: forest.trees_back(),
            trees_front: forest.trees_front(),
            trees_full: forest.trees_full(),
            trees_right: forest.trees_right(),
            trees_left: forest.trees_left(),
            tree_corner_RT: forest.tree_RC_top(),
            tree_corner_RB: forest.tree_RC_bottom(),
            tree_corner_LT: forest.tree_LC_top(),
            tree_corner_LB: forest.tree_LC_bottom()
        },

        enemeies: {

        }
    },
    towns: {

    },
}