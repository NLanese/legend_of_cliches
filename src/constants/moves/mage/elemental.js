// Mind that none of these are actual moves, rather THE REQUIREMENTS TO LEARN EACH MOVE
// The contents of the moves, their damage, type, and what they do is saved in the Rails server


export const elementalMoves = [
    // All Shock Moves
        {id: 1, name: "Spark", type: "shock", lvl_needed: 0, atk_needed: 0, sAtk_needed: 0, def_needed: 0, sDef_needed: 0, move_needed: 0},
        {id: 3, name: "Overloaded", type: "shock", lvl_needed: 3, atk_needed: 0, sAtk_needed: 12, def_needed: 0, sDef_needed: 18, move_needed: 2},
        {id: 4, name: "Tempest", type: "shock", lvl_needed: 5, atk_needed: 0, sAtk_needed: 16, def_needed: 0, sDef_needed: 0, move_needed: 2},
        {id: 5, name: "Tempest Plus", type: "shock", lvl_needed: 7, atk_needed: 0, sAtk_needed: 25, def_needed: 0, sDef_needed: 0, move_needed: 4},
        {id: 6, name: "Electroblast", type: "shock", lvl_needed: 8, atk_needed: 0, sAtk_needed: 36, def_needed: 0, sDef_needed: 20, move_needed: 4},
        {id: 7, name: "Electroblast Plus", type: "shock", lvl_needed: 8, atk_needed: 0, sAtk_needed: 45, def_needed: 0, sDef_needed: 30, move_needed: 6},
        {id: 8, name: "Voltage", type: "shock", lvl_needed: 11, atk_needed: 0, sAtk_needed: 60, def_needed: 25, sDef_needed: 40, move_needed: 6},

    // All Fire Moves
        {id: 9, name: "Flare", type: "fire", lvl_needed: 0, atk_needed: 0, sAtk_needed: 0, def_needed: 0, sDef_needed: 0, move_needed: 0},
        {id: 10, name: "Incinerate", type: "fire", lvl_needed: 2, atk_needed: 0, sAtk_needed: 15, def_needed: 0, sDef_needed: 0, move_needed: 9},
        {id: 11, name: "Incinerate Plus", type: "fire", lvl_needed: 5, atk_needed: 0, sAtk_needed: 23, def_needed: 0, sDef_needed: 0, move_needed: 10}
]