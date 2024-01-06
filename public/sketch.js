// Get 'toRender' data from server
const data = JSON.parse(sketchData);

function setup() {
  createCanvas(400, 400);
  
  console.log(`Project '${data.projectName}' loaded successfully. (~:`);
}

function draw() {
  background(220);
  text(data.testText, 5, 20);
}