import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const packageInformation = {
    projectName: "visualize-my-year",
    currentUser: "user_name",
}
// Get today's date, at 00:00:00:000Z o'clock (:
let today = new Date(new Date().toJSON().split("T")[0]);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

let trackers = [
    {
        date: new Date("2024-01-25"),
        n: 1
    },
    {
        date: new Date("2024-01-26"),
        n: 0
    },
    {
        date: new Date("2024-01-27"),
        n: 1
    },
    {
        date: new Date("2024-01-28"),
        n: 3
    },
    {
        date: new Date("2024-01-29"),
        n: 0
    },
];

// This data is passed to the p5js sketch
const sketchData = {
    projectName: packageInformation.projectName,
    testText: `Hello ${packageInformation.currentUser}! This is ${packageInformation.projectName}`,
    trackers: trackers,
}

app.get("/admin-panel", async (req, res) => {
    res.render("admin-panel.ejs", {
        selectedDate: today,
        package: packageInformation,
        toRender: JSON.stringify(sketchData),
        trackers: trackers
    });
});

app.post("/log-to-tracker", async (req, res) => {
    console.log(req.body.trackerName);
    const targetTracker = trackers.find(obj => JSON.stringify(obj.date) === JSON.stringify(today));

    if (targetTracker) {
        console.log(targetTracker);
        targetTracker.n = req.body.trackerName;
    } else {
        console.log("no tracker for that date");
    }
    res.redirect("/admin-panel");
});

app.get("/", (req, res) => {
    res.render("index.ejs", {
        package: packageInformation,
    });
});

app.post("/add-tracker", async (req, res) => {
    console.log(req.body);
    res.redirect("/");
});


app.listen(port, (req, res) => {
    console.log(`App running on ${port}`);
})