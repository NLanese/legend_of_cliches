import DOMAIN from "../constants/domain"


// This is imported by AttributeSelection.js
export default function completeAttributeSelection(playerObj){
    const playerPOST = {
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
            name: playerObj.name
        }
    }
    return (dispatch) => {
        dispatch("LOAD_ATTRIBUTES")
        fetch(DOMAIN() + "/players/update_or_create")
    }
}