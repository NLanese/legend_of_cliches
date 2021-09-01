// Import all image files from the images folder
// import '../images/<whatever>'
import ForestImages from "./getForestImages";
let forest = new ForestImages()

export const allImages = {
    forest: {
        pathways: {
            fork: forest.fork_path(),
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
            trees_left: forest.trees_left()
        },

        enemeies: {

        }
    },
    towns: {

    },
}