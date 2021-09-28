// Takes a level and spits back the amount of attribute upgrade points a user gets. 
// This is used upon NEW GAME during the ATTRIBUTE SELECTION stage, as well as IN GAME during the LEVEL UP ATTRIBUTE SELECTION stage

export default function howManyPoints(level){
    if (level == 1){
        return 5
    }
    else if (level == 2){
        return 3
    }
    else if (level < 5){
        return 4
    }
    else if (level == 5){
        return 5
    }
    else if (level < 8){
        return 6
    }
    else if (level < 12){
        return 7
    }
}