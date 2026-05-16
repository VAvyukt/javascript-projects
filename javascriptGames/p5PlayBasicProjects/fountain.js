let waterGroup;

function setup() {
    new Canvas(450, 450);
    world.gravity.y = 10;

    // ----> Create new Group here:
    waterGroup = new Group();

    // Setting Group properties
    waterGroup.diameter = 10;
    waterGroup.vel.y = -7;
    waterGroup.color = '#90e0ef';
}

function draw() {
    clear();
    background('#00b4d8');

    if (mouse.pressing()) {
        // ----> Create new sprite from group here:
        let drop = new waterGroup.Sprite();
        
        // Set properties of individual sprite
        drop.x = mouse.x + random(-1, 1);
        drop.y = mouse.y;
    }
}