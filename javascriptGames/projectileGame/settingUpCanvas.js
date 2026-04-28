

function setup() {
    new Canvas(450, 450);
    world.gravity.y = 10;
    mouseCoordinates();
}

function draw() {
    clear();
    background("#1bc8e3");
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