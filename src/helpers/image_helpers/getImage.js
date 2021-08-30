// Import all image files from the images folder
// import '../images/<whatever>'
import ForestImages from "./getForestImages";

export const allImages = {
    forest: {
        pathways: {
            fork: ForestImages.fork_path(),
            fourway: ForestImages.fourway_path(),
            horizonal: ForestImages.horizonal_path(),
            turnLeft: ForestImages.tLeft_path(),
            turnLeftUp: ForestImages.tLeftUp_path(),
            open: ForestImages.open_path(),
            turnRight: ForestImages.tRight_path(),
            turnRightUp: ForestImages.tRightUp_path(),
            forward: ForestImages.forward_path(),
        },

        walls: {
            trees_back: ForestImages.trees_back(),
        },
        
        enemeies: {

        }
    },
    towns: {

    },
}