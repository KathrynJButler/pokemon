//Connect to DB with Mongoose
import { default as credentials } from "./dbCredentials.mjs";
import { default as mongoose } from "mongoose";
mongoose.connect(credentials.connection_string);

//Load our models
import { default as move } from "./models/move.mjs";
import { default as pokemon } from "./models/pokemon.mjs";

async function test() {
    try {
        const allmoves = await move.find();
        console.log("All moves:");
        console.log(allmoves);
        
        const allpokemon = await pokemon.find();
        console.log("All pokemon:");
        console.log(allpokemon);
        mongoose.connection.close();
    } catch (error) {
        console.error("Error loading records:", error);
    }
}

test();