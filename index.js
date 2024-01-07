import express from "express";
import pg from "pg";
import bodyParser from "body-parser";

const projectName = "visualize-my-year";
const currentUser = "user_name";
const app = express();
const port = 3000;
const db = new pg.Client({
    user: "postgres",
    password: "123456",
    host: "localhost",
    port: "5432",
    database: projectName
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

let pageRenderingData = {
    package: {
        projectName: projectName,
        currentUser: currentUser,
    },
    sketchData: {
        // These variables are passed to your p5js sketch.
        projectName: projectName,
        testText: `Hello ${currentUser}! This is ${projectName}`,
    }
}

async function addTracker(trackerName){
    const query = `ALTER TABLE ${currentU} ADD COLUMN ${trackerName} BOOL;`
    console.log(query);
}

app.get("/", (req, res) => {
    res.render("index.ejs", {
        package: pageRenderingData.package,
        toRender: JSON.stringify(pageRenderingData.sketchData)
    });
});

app.post("/add-col", async (req, res) => {
    console.log(req.body);
    await addTracker(req.body.colName);
    res.redirect("/");
})


app.listen(port, (req, res) => {
    console.log(`App running on ${port}`);
})