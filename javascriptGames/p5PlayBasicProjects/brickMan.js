let brickGroup, wreckingBall;

function setup() {
    new Canvas(450, 450);
    noStroke();

    // Create group for the bricks
    brickGroup = new Group();
    brickGroup.width = 20;
    brickGroup.height = 20;
    brickGroup.rotationDrag = 10;
    brickGroup.color = '#50514f';
    brickGroup.tile = '=';

    // Create a set of tiles for the canvas
    new Tiles(
        [
        "......===.......",
        ".....=====......",
        ".....=====......",
        "......===.......",
        ".......=........",
        ".......=........",
        "....=======.....",
        ".......=........",
        ".......=........",
        "......=.=......",
        ".....=...=......",
        ],
        100,
        180,
        brickGroup.width + 4,
        brickGroup.height + 4
    );

    // Sprite for the wrecking ball
    wreckingBall = new Sprite();
    wreckingBall.x = 50;
    wreckingBall.diameter = 30;
    wreckingBall.color = 'white';
    wreckingBall.collider = 'kinematic';
}

function draw() {
	clear();
    background('#f25f5c');

    // Allows user to drag the wrecking ball
    if (wreckingBall.mouse.dragging()) {
        wreckingBall.moveTowards(mouse, 0.1);
    } else {
        wreckingBall.speed = 0;
    }

    // Code to slow down any brick in the group that starts moving
    for (let brick of brickGroup) {
        if (brick.speed > 0) {
            brick.speed -= 0.1;
        }
    }
}