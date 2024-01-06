import express from "express";
import pg from "pg";
import bodyParser from "body-parser";

const PROJECTNAME = "visualize-my-year";
const APP = express();
const PORT = 3000;

APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(express.static("./public"));

let data = {
    package: {
        name: `${PROJECTNAME}`
    },
    toRender: {
        // These variables are passed to your p5js sketch.
        projectName: PROJECTNAME,
        testText: `Hello world! This is ${PROJECTNAME}`,
    }
}

APP.get("/", (req, res) => {
    res.render("index.ejs", {
        package: data.package,
        toRender: JSON.stringify(data.toRender)
    });
});

APP.listen(PORT, (req, res) => {
    console.log(`App running on ${PORT}`);
})