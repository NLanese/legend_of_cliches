import { allImages } from "../image_helpers/getImage"

// This is exported to ClassCard.js in the NewGame directory inside of AppJsSplitter. 
// This is exported to AttributeSelection.js in the NewGame directory inside of AppJsSplitter. 
export default function determineCardImage(title){
    if (title == "Mage"){
        return allImages.classSelection.mage
    }
    else if (title == "Assassin"){
        return allImages.classSelection.assassin
    }
    else if (title == "Paladin"){
        return allImages.classSelection.paladin
    }
}