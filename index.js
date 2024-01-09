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
db.connect();

let trackers = [];

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

async function loadTrackers(callback) {
    const query = `SELECT * FROM ${currentUser} WHERE 1=0;`;
    trackers = [];
    const res = await queryDatabase(query);
    console.log(res);
    res.rows.forEach(row => {
        console.log(row);
        //trackers.push(field.name);
    });
}

async function queryDatabase(query) {
    return new Promise((resolve, reject) => {
        db.query(query, async (err, res) => {
            if (err) {
                console.log(` ----------- START QUERY ERROR LOG -----------`);
                console.log(err);
                console.log(` ----------- END QUERY ERROR LOG -----------`);
                reject(err);
            } else {
                console.log(`Successful query: "${query}"`);
                resolve(res);
            }
        });
    });
}

app.get("/admin-panel", async (req, res) => {
    await loadTrackers();
    res.render("admin-panel.ejs", {
        package: pageRenderingData.package,
        toRender: JSON.stringify(pageRenderingData.sketchData),
        trackers: trackers
    });
});

app.get("/", (req, res) => {
    res.render("index.ejs", {
        package: pageRenderingData.package,
        // toRender: JSON.stringify(pageRenderingData.sketchData)
    });
});

app.post("/add-tracker", async (req, res) => {
    console.log(req.body);
    await queryDatabase(`ALTER TABLE ${currentUser} ADD COLUMN ${req.body.trackerName} BOOL;`);
    res.redirect("/");
})

app.listen(port, (req, res) => {
    console.log(`App running on ${port}`);
})