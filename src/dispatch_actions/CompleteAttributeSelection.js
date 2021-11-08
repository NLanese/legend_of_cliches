import DOMAIN from "../constants/domain"


// This is imported by AttributeSelection.js
export default function completeAttributeSelection(playerObj){
    let move_distance = 1
    if (playerObj.spd > 20){
        move_distance = 2
    }
    else if (playerObj.spd > 40){
        move_distance = 3
    }
    else if (playerObj.spd > 60){
        move_distance = 4
    }
    else if (playerObj.spd > 90){
        move_distance = 6
    }
    const playerPOST = ({
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            atk: playerObj.atk,
            sAtk: playerObj.sAtk,
            def: playerObj.def,
            sDef: playerObj.sDef,
            spd: playerObj.spd,
            hp: playerObj.hp,
            name: playerObj.name,
            lvl: playerObj.lvl,
            class_type: playerObj.class,
            move_distance: move_distance
        })
    })
    return (dispatch) => {
        dispatch({type: "LOADING"})
        console.log(playerObj)
        fetch((DOMAIN() + "/players/update_or_create"), playerPOST)
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                dispatch({type: "ATTRIBUTE_UPDATE_COMPLETE", payload: json})
            })
    }
}