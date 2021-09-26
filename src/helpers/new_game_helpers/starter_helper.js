export default function determineStats(name){
    switch(name){
        case("Mage"):
            return({
                class_name: "Mage",
                bio: " - DO THIS LATER - ",
                atk: 6,
                sAtk: 10,
                def: 5,
                sDef: 9,
                hp: 85,
                spd: 10,
            })

        case("Paladin"):
            return({
                class_name: "Paladin",
                bio: " - DO THIS LATER - ",
                atk: 7,
                sAtk: 6,
                def:  11,
                sDef: 7,
                hp: 125,
                spd: 6
            })

        case("Assassin"):
            return({
                class_name: "Assassin"
                bio: " - DO THIS LATER - ",
                atk: 11,
                sAtk: 9,
                def: 7,
                sDef: 3,
                hp: 65,
                spd: 15
            })

        // Handles any typos or other improper input
        default:
            console.log( "Error! Please check the Input provided to Starter_Helper! We got: " + name + "\nThis exact message will be returned from the method, likely casuing whatever error broke your code just now.")
            return "Error! Please check the Input provided to Starter_Helper!"
    }
}