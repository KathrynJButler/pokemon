//This code was largely taken from the example

import { default as express } from "express";
import { default as path } from "path";
import { default as cookieParser } from "cookie-parser";
import { default as mongoose } from "mongoose";

// Create an express app
const app = express();

// Get the directory name of the current module
const __dirname = import.meta.dirname;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Use database with mongoose
import { default as credentials } from "./dbCredentials.mjs";
mongoose.connect(credentials.connection_string);

app.use(express.static(path.join(__dirname, "public")));

//--------------------------------------------------------
//My routes

app.get("/", async (req, res) => {
    //send a plain file
    res.send("/");
});

//All other routes in moves.js file
import { default as moveRouter } from "./routes/moves.mjs";
app.use("/moves/", moveRouter);

import { default as pokemonRouter } from "./routes/pokemonList.mjs";
app.use("/pokemonList/", pokemonRouter);

// Catch any other route and send 404
app.use((req, res, next) => {
    const err = new Error("File Not Found");
    err.status = 404;
    next(err);
  });

//--------------------------------------------------------

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    const moveId = req.newMoveId;

    // render the error page
    res.status(err.status || 500);
    res.render("error", { moveId });
});

//---------------------------------------------------
// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(
        `Pokemon app listening on port ${port} in directory ${__dirname}`
    );
});
