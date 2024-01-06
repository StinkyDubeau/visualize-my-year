import express from "express";
import pg from "pg";
import bodyParser from "body-parser";

const PROJECTNAME = "p5 in node";
const APP = express();
const PORT = 3000;

APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(express.static("./public"));

let data = {
    package: {
        name: `${PROJECTNAME}`
    }
}

APP.get("/", (req, res) => {
    res.render("index.ejs", data);
});

APP.listen(PORT, (req, res) => {
    console.log(`App running on ${PORT}`);
})