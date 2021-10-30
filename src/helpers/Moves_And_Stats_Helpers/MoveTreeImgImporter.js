import { allImages } from "../image_helpers/getImage";

// This is exported to the MoveSelection as well as MovesList Components
export default function MoveTreeImages(class_type){
    if (class_type == "Mage"){
        // Elemental, LifeEnergy, and Necromancer Tree Panels
        return [allImages.moveTrees.mage_element, allImages.moveTrees.mage_life, allImages.moveTrees.mage_necro]
    }
}