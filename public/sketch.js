// Get 'toRender' data from server
const data = JSON.parse(sketchData);
const parentElement = 'canvas-container';

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent(parentElement);
  
  console.log(`Project '${data.projectName}' loaded successfully. (~:`);
}

function draw() {
  background(185);
  text(data.testText, 5, 20);
}


// //   x   y   w   h
// rect(30, 20, 55, 85);