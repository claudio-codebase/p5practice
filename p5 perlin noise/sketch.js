let particles = [];
const num = 25000;

const noiseScale = 0.01;
// determine noise variable

function setup() {
  createCanvas(800, 800);
  for(let i = 0; i < num; i++){
    particles.push(createVector(random(width), random(height)));
    // places random particles
  }
  stroke(50);
  strokeWeight(4)
  clear();
  // creates large, dark particles (visually)
}

function draw() {
  background(44, 150, 72); // green background
  for(let i = 0; i < num; i ++){
    let p = particles[i];
    point(p.x, p.y)
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    // multiply everything by the noiscale factor
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    // position everything relative to these functions

    if(!onScreen(p)){
      p.x = random(width)
      p.y = random(height)
      // when a particle falls off screen, it is replaced by another random particle
    }
  }
}


function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
  // checks whether on screen
}