let person, ground, glass;

function setup() {
    new Canvas(450, 450);
    world.gravity.y = 10;
    
    // Creates the sprites for the room and person
    setupRoom();  
}

function draw() {
    clear();
    background('#b298dc');

    // Write your if statement to check if the person is overlapping
    // with the glass here:
    if(person.overlapping(glass)) {
        person.color = '#77e3da';
    }
    
    
    
    // Write your if statement to check if the user has pressed the
    // up arrow here:
    if(kb.presses('up')) {
        person.vel.y = -4;
    }


}

// This function creates the sprites for our room simulation
function setupRoom() {
    noStroke();
    glass = new Sprite();
    glass.width = 200;
    glass.height = 300;
    glass.x = 400;
    glass.color = '#9ceaef';
    glass.collider = 'static';

    let office = new Sprite();
    office.width = 70;
    office.height = 30;
    office.x = 370;
    office.y = 120;
    office.color = 'white';
    office.text = 'Office';
    office.textSize = 20;
    office.collider = 'none';

    person = new Sprite();
    person.width = 20;
    person.height = 100;
    person.x = 50;
    person.y = 300;
    person.vel.x = 2.5;
    person.color = '#8dc466';
    person.friction = 0;
    // This statement causes person to overlap, not collide, with glass
    person.overlaps(glass);

    ground = new Sprite();
    ground.width = width;
    ground.height = 200;
    ground.y = 450;
    ground.color = '#e8ac65';
    ground.collider = 'static';
}