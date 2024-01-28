// Get 'toRender' data from server
const data = JSON.parse(sketchData);

const parentElement = 'canvas-container';

let debugText = [
  "Static debug info: ",
  data.testText,
  new Date().getTime(),
]

function renderDebugText(){
  const fontSize = 15;
  let rootPosX = 5;
  let rootPosY = 20;

  debugText.forEach(line => {
    text(line, rootPosX, rootPosY);
    rootPosY += fontSize;
  });
}

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent(parentElement);

  data.trackers.forEach(tracker => {
    debugText.push(`${tracker.date}, ${tracker.n}`)
  });

  console.log(`'${data.projectName}': P5JS sketch loaded successfully. (~:`);
  //console.log(data.trackers)
}

function draw() {
  background(185);

  renderDebugText();
}




// //   x   y   w   h
// rect(30, 20, 55, 85);