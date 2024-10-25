//--------------------------------------------
//Data that we will load into MongoDB

const movesList = [
    {
        name: "Pound",
        type: "Normal",
        accuracy: 100,
        power: 40,
        damage_class: "Physical",
        generation: "Generation I",
        description: "Pounds the foe with forelegs or tail.",
        details: "Inflicts regular damage with no additional effect.",
    },
    {
        name: "Wrap",
        type: "Normal",
        accuracy: 90,
        power: 0,
        damage_class: "Physical",
        generation: "Generation I",
        description: "A long body or vines are used to wrap the foe for two to five turns.",
        details: "Inflicts regular damage. For the next 2-5 turns, the target cannot leave the field and is damaged for 1/16 its max hp at the end of each turn. The user continues to use other moves during this time. If the user leaves the field, this effect ends. Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times. Averages to 3 hits per use. rapid spin cancels this effect.",
    },
    {
        name: "Spark",
        type: "Electric",
        accuracy: 100,
        power: 65,
        damage_class: "Physical",
        generation: "Generation II",
        description: "An electrified tackle that may paralyze the foe.",
        details: "Inflicts regular damage. Has a 30% chance to paralyze the target.",
    },
    {
        name: "Confuse Ray",
        type: "Ghost",
        accuracy: 100,
        power: 0,
        damage_class: "Status",
        generation: "Generation I",
        description: "A sinister ray that confuses the foe.",
        details: "Confuses the target.",
    },
    {
        name: "Aeroblast",
        type: "Flying",
        accuracy: 95,
        power: 100,
        damage_class: "Special",
        generation: "Generation II",
        description: "A vortex of air is shot at the foe. It has a high critical-hit ratio.",
        details: "Inflicts regular damage. User's critical hit rate is one level higher when using this move.",
    },
    {
        name: "Flamethrower",
        type: "Fire",
        accuracy: 100,
        power: 90,
        damage_class: "Special",
        generation: "Generation I",
        description: "The foe is scorched with intense flames. The foe may suffer a burn.",
        details: "Inflicts regular damage. Has a 10% chance to burn the target.",
    },
    {
        name: "Toxic",
        type: "Poison",
        accuracy: 90,
        power: 0,
        damage_class: "Status",
        generation: "Generation I",
        description: "A move that badly poisons the foe. Its poison damage worsens every turn.",
        details: "Badly poisons the target. Never misses when used by a poison-type Pokémon.",
    },
    {
        name: "Blizzard",
        type: "Ice",
        accuracy: 70,
        power: 110,
        damage_class: "Special",
        generation: "Generation I",
        description: "A howling blizzard is summoned to strike the foe. It may also freeze the target solid.",
        details: "Inflicts regular damage. Has a 10% chance to freeze the target. During hail, this move has 100% accuracy. It also has a (100 - accuracy)% chance to break through the protection of protect and detect.",
    },
    {
        name: "Earthquake",
        type: "Ground",
        accuracy: 100,
        power: 100,
        damage_class: "Physical",
        generation: "Generation I",
        description: "The user sets off an earthquake that hits all the Pokémon in the battle.",
        details: "Inflicts regular damage. If the target is in the first turn of dig, this move will hit with double power.",
    },
    {
        name: "Water Gun",
        type: "Water",
        accuracy: 100,
        power: 40,
        damage_class: "Special",
        generation: "Generation I",
        description: "The foe is blasted with a forceful shot of water.",
        details: "Inflicts regular damage with no additional effect.",
    },
    {
        name: "Bite",
        type: "Dark",
        accuracy: 100,
        power: 100,
        damage_class: "Physical",
        generation: "Generation I",
        description: "The foe is bitten with viciously sharp fangs. It may make the target flinch.",
        details: "Inflicts regular damage. Has a 30% chance to make the target flinch.",
    },
    {
        name: "Giga Drain",
        type: "Grass",
        accuracy: 100,
        power: 75,
        damage_class: "Physical",
        generation: "Generation II",
        description: "A nutrient-draining attack. The user's hp is restored by half the damage taken by the target.",
        details: "Inflicts regular damage. Drains half the damage inflicted to heal the user.",
    },
    {
        name: "Bullet Seed",
        type: "Grass",
        accuracy: 100,
        power: 10,
        damage_class: "Physical",
        generation: "Generation III",
        description: "The user forcefully shoots seeds at the foe. Two to five seeds are shot in rapid succession.",
        details: "Inflicts regular damage. Hits 2-5 times in one turn. Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times. Averages to 3 hits per use.",
    },
    {
        name: "Surf",
        type: "Water",
        accuracy: 100,
        power: 90,
        damage_class: "Special",
        generation: "Generation I",
        description: "It swamps the entire battlefield with a giant wave. It can also be used for crossing water.",
        details: "Inflicts regular damage. If the target is in the first turn of dive, this move will hit with double power.",
    },
];

const pokemonList = [
    {
        name: "Pikachu",
        dexID: 1,
        type: "Electric",
        generation: "1st",
        description: "Small, yellow mouse; main mascot of the franchise",
        stats: [
            {name: "HP", value: 35},
            {name: "Atk", value: 55},
            {name: "Def", value: 40},
            {name: "SpAtk", value: 50},
            {name: "SpDef", value: 50},
            {name: "Speed", value: 90},
        ],
    },
    {
        name: "Eevee",
        dexID: 2,
        type: "Normal",
        generation: "1st",
        description: "Brown and white, foxlike animal; has many different forms it can evolve into",
        stats: [
            {name: "HP", value: 55},
            {name: "Atk", value: 55},
            {name: "Def", value: 50},
            {name: "SpAtk", value: 45},
            {name: "SpDef", value: 65},
            {name: "Speed", value: 55},
        ],
    },
    {
        name: "Charmander",
        dexID: 3,
        type: "Fire",
        generation: "1st",
        description: "Small, orange and dragon-like creature; if the fire on Charmander's tail goes out, they die",
        stats: [
        {name: "HP", value: 39},
        {name: "Atk", value: 52},
        {name: "Def", value: 43},
        {name: "SpAtk", value: 60},
        {name: "SpDef", value: 50},
        {name: "Speed", value: 65},
        ],
    },
    {
        name: "Charmeleon",
        dexID: 4,
        type: "Fire",
        generation: "1st",
        description: "The evolution of Charmander; angry little dude",
        stats: [
        {name: "HP", value: 58},
        {name: "Atk", value: 64},
        {name: "Def", value: 58},
        {name: "SpAtk", value: 80},
        {name: "SpDef", value: 65},
        {name: "Speed", value: 90},
        ],
    },
    {
        name: "Charizard",
        dexID: 5,
        type: "Fire/Flying",
        generation: "1st",
        description: "The evolution of Charmeleon; biggest angry dude",
        stats: [
        {name: "HP", value: 78},
        {name: "Atk", value: 84},
        {name: "Def", value: 78},
        {name: "SpAtk", value: 109},
        {name: "SpDef", value: 85},
        {name: "Speed", value: 100},
        ]
    },
    {
        name: "Mudkip",
        dexID: 6,
        type: "Water",
        generation: "3rd",
        description: "Blue axolotl looking dude; very derpy",
        stats: [
            {name: "HP", value: 50},
            {name: "Atk", value: 70},
            {name: "Def", value: 50},
            {name: "SpAtk", value: 50},
            {name: "SpDef", value: 50},
            {name: "Speed", value: 40},
            ]
    },
    {
        name: "Marshtomp",
        dexID: 7,
        type: "Water/Ground",
        generation: "3rd",
        description: "The evolution of Mudkip; Also very derpy",
        stats: [
            {name: "HP", value: 70},
            {name: "Atk", value: 85},
            {name: "Def", value: 70},
            {name: "SpAtk", value: 60},
            {name: "SpDef", value: 70},
            {name: "Speed", value: 50},
            ]
    },
    {
        name: "Swampert",
        dexID: 8,
        type: "Water/Ground",
        generation: "3rd",
        description: "The evolution of Marshtomp; A very big and very derpy dude",
        stats: [
            {name: "HP", value: 100},
            {name: "Atk", value: 110},
            {name: "Def", value: 90},
            {name: "SpAtk", value: 85},
            {name: "SpDef", value: 90},
            {name: "Speed", value: 60},
            ]
    },
    {
        name: "Zapdos",
        dexID: 9,
        type: "Electric/Flying",
        generation: "1st",
        description: "The second of the three legendary birds; Zapdos is big and flying and yellow",
        stats: [
            {name: "HP", value: 90},
            {name: "Atk", value: 90},
            {name: "Def", value: 85},
            {name: "SpAtk", value: 125},
            {name: "SpDef", value: 90},
            {name: "Speed", value: 100},
            ]
    },
    {
        name: "Darkrai",
        dexID: 10,
        type: "Dark",
        generation: "4th",
        description: "Ghost-like nightmare inducing pokemon",
        stats: [
            {name: "HP", value: 70},
            {name: "Atk", value: 90},
            {name: "Def", value: 90},
            {name: "SpAtk", value: 135},
            {name: "SpDef", value: 90},
            {name: "Speed", value: 125},
            ]
    },
    {
        name: "Xerneas",
        dexID: 11,
        type: "Fairy",
        generation: "6th",
        description: "Majestic deer with rainbow antlers",
        stats: [
            {name: "HP", value: 126},
            {name: "Atk", value: 131},
            {name: "Def", value: 95},
            {name: "SpAtk", value: 131},
            {name: "SpDef", value: 98},
            {name: "Speed", value: 99},
            ]
    },
    {
        name: "Sprigatito",
        dexID: 12,
        type: "Grass",
        generation: "9th",
        description: "Green plant cat",
        stats: [
            {name: "HP", value: 40},
            {name: "Atk", value: 61},
            {name: "Def", value: 54},
            {name: "SpAtk", value: 45},
            {name: "SpDef", value: 45},
            {name: "Speed", value: 65},
            ]
    },
    {
        name: "Floragato",
        dexID: 13,
        type: "Grass",
        generation: "9th",
        description: "The evolution of Sprigatito, but now it's on 2 paws instead of 4",
        stats: [
            {name: "HP", value: 61},
            {name: "Atk", value: 80},
            {name: "Def", value: 63},
            {name: "SpAtk", value: 60},
            {name: "SpDef", value: 63},
            {name: "Speed", value: 83},
            ]
    },
    {
        name: "Meowscarada",
        dexID: 14,
        type: "Grass/Dark",
        generation: "9th",
        description: "Evolution of Floragato; mix of gentleman thief and Hawkmoth from Miraculous",
        stats: [
            {name: "HP", value: 76},
            {name: "Atk", value: 110},
            {name: "Def", value: 70},
            {name: "SpAtk", value: 81},
            {name: "SpDef", value: 70},
            {name: "Speed", value: 123},
            ]
    },
    {
        name: "Latias",
        dexID: 15,
        type: "Dragon/Psychic",
        generation: "3rd",
        description: "Flying red dragon buddy",
        stats: [
            {name: "HP", value: 80},
            {name: "Atk", value: 80},
            {name: "Def", value: 90},
            {name: "SpAtk", value: 110},
            {name: "SpDef", value: 130},
            {name: "Speed", value: 110},
            ]
    },
    {
        name: "Latios",
        dexID: 16,
        type: "Dragon/Psychic",
        generation: "3rd",
        description: "Flying blue dragon buddy",
        stats: [
            {name: "HP", value: 80},
            {name: "Atk", value: 90},
            {name: "Def", value: 80},
            {name: "SpAtk", value: 130},
            {name: "SpDef", value: 110},
            {name: "Speed", value: 110},
            ]
    },
];

//--------------------------------------------
//Connect to DB with Mongoose
import { default as credentials } from "./dbCredentials.mjs";
import { default as mongoose } from "mongoose";
mongoose.connect(credentials.connection_string);

//Load our models
import { default as move } from "./models/move.mjs";
import { default as pokemon } from "./models/pokemon.mjs";

async function loadAllRecords() {
    await move.deleteMany();
    await pokemon.deleteMany();
    const moveRecords = [];
    for (let i = 0; i < movesList.length; i++) {
        const moveRecord = new move(movesList[i]);
        moveRecords.push(moveRecord);
        await moveRecord.save();
    }
    for (let i = 0; i < pokemonList.length; i++) {
        const pokemonRecord = new pokemon(pokemonList[i]);
        switch (pokemonRecord.name) {
            case "Pikachu":
                pokemonRecord.moves[0] = moveRecords[10]; //Bite
                pokemonRecord.moves[1] = moveRecords[2]; //Spark
                pokemonRecord.moves[2] = moveRecords[0]; //Pound
                break;
            case 'Eevee':
                pokemonRecord.moves[0] = moveRecords[10]; //Bite
                break;
            case 'Charmander':
            case 'Charmeleon':
            case 'Charizard':
                pokemonRecord.moves[0] = moveRecords[5]; //Flamethrower
                break;
            case 'Mudkip':
            case 'Marshtomp':
            case 'Swampert':
                pokemonRecord.moves[0] = moveRecords[9]; //Water Gun
                pokemonRecord.moves[1] = moveRecords[13]; //Surf
                break;
            case 'Sprigatito':
            case 'Floragato':
            case 'Meowscarada':
                pokemonRecord.moves[0] = moveRecords[12]; //Bullet Seed
                pokemonRecord.moves[1] = moveRecords[11]; //Giga Drain
                break;
            case 'Zapdos':
                pokemonRecord.moves[0] = moveRecords[2]; //Spark
                break;
            case 'Darkrai':
                pokemonRecord.moves[0] = moveRecords[10]; //Bite
                pokemonRecord.moves[1] = moveRecords[1]; //Wrap
                break;
            case 'Xerneas':
                pokemonRecord.moves[0] = moveRecords[12]; //Bullet Seed
                break;
            case 'Latias':
            case 'Latios':
            default:
                pokemonRecord.moves[0] = moveRecords[3]; //Confuse Ray
                pokemonRecord.moves[1] = moveRecords[8]; //Earthquake
                break;
        }
        await pokemonRecord.save();
    }
    mongoose.connection.close();
}

loadAllRecords();