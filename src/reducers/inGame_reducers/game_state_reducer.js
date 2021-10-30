

// This handles what exactly is happening in the game currently
// that includes what map you are in, if you are in a battle or cutscene, etc.

export default function manageGameState(state = {

    inWorld: false,             // True if the player is in the game world, not in a fight, inventory, map, or other view
    inMap: false,               // True if the user selected their map
    inInv: false,               // True if the user sleected their inventory
    inBattle: false,            // True if the user is in a battle
    inCutscene: false,          // True if the user is in a cutscene
    worldState: 0               // This mimics what "Act" the user is in. This can change maps, NPC interactions, and enemies spawned. It may even make parts of the game innaccessible

})