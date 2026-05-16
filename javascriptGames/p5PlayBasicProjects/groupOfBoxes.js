let boxGroup;

function setup() {
    new Canvas(450, 450);
    
    // Create a new group with shared properties
    boxGroup = new Group();
    boxGroup.width = 50;
    boxGroup.height = 50;
    boxGroup.rotationSpeed = 5;
    boxGroup.color = '#d9ed92';

    // Create individual sprites from the group
    let box1 = new boxGroup.Sprite();
    box1.x = 150;
    box1.y = 150;

    let box2 = new boxGroup.Sprite();
    box2.x = 300;
    box2.y = 150;

    let box3 = new boxGroup.Sprite();
    box3.x = 150;
    box3.y = 300;

    let box4 = new boxGroup.Sprite();
    box4.x = 300;
    box4.y = 300;
}

function draw() {
    clear();
    background('#52b69a');

    if (mouse.pressing()) {
        // Use the group name to move all the boxes
        boxGroup.moveTowards(mouse, 0.01);
    } else {
        // Use the group name to stop all the boxes
        boxGroup.speed = 0;
    }
}