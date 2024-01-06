// Get 'toRender' data from server
const data = JSON.parse(sketchData);

function setup() {
  createCanvas(400, 400);
  
  console.log(`Project '${data.projectName}' loaded successfully. (~:`);
}

function draw() {
<<<<<<< HEAD
  background(100);
  //   x   y   w   h
  rect(30, 20, 55, 85);
  point(90, 100);
=======
  background(220);
  text(data.testText, 5, 20);
>>>>>>> upstream/main
}