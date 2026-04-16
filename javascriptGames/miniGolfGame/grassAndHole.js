let coordinates;
let grass;
let hole;

function setup() {
    new Canvas(450, 520);
    mouseCoordinates();
    setupHole();
}

function draw() {
    clear();
    background("#05aae6");
    coordinates.text = round(mouse.x, 1) + ', ' + round(mouse.y, 1);
}

function mouseCoordinates() {
  coordinates = new Sprite();
  coordinates.color = 'white';
  coordinates.width = 80;
  coordinates.height = 20;
  coordinates.x = width - coordinates.width / 2 - 5;
  coordinates.y = coordinates.height / 2 + 5;
  coordinates.collider = 'none';
}

function setupHole() {
    grass = new Sprite();
    grass.y = 265;
    grass.width = 270;
    grass.height = 395;
    grass.collider = 'none';
    grass.color = '#008763';
    
    hole = new Sprite();
    hole.diameter = 25;
    hole.x = random(120, 330);
    hole.y = 95;
    hole.color = 'black';
    hole.collider = 'static';
}