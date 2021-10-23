export default function determineStats(name){
    switch(name){
        case("Mage"):
            return({
                class_name: "Mage",
                bio: "Born with the gift of magic for some reason, born with it, ate a radioactive frog, I don't really care. The mage can do cool stuff with fire and ice and whatever. Not great in a fist fight, so these fighters tend to stay far from oponents and deal damage that way or even heal/boost teammates",
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
                bio: "A holy sodlier or whatever, the paladin can call upon the heavens to boost himself or heal allies in battle, while the armor he wears can withstand the mightiest of blows...Cause it's hlly or whatever, I don't know. These players can take a hit but lack ranged abilities.",
                atk: 7,
                sAtk: 6,
                def:  11,
                sDef: 7,
                hp: 125,
                spd: 6
            })

        case("Assassin"):
            return({
                class_name: "Assassin",
                bio: "Super weirdo loner as a creep, the assassin just always loved knives, joined a cult, something like that, you pick. This is called legend of a cliches for a reason, the writing's gonna be sloppy. Deal with it. The assassin has very low health, but devasting attacks and unqie abilities that allow him to do massive damage while potentially leaving battle unscathed.",
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