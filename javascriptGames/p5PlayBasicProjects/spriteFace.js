function setup() {
    new Canvas(450, 450);
    
    // Create a variable to store the X center of the canvas
    let center_x = width / 2;

    let mouth = new Sprite();
    mouth.width = 200;
    mouth.height = 50;
    mouth.color = '#d0b2d5';
    // When you don't set mouth.x or mouth.y, they default
    // to the center of the canvas

    let eye1 = new Sprite();
    eye1.diameter = 75;
    // Position the left eye 50px to the left of the center
    eye1.x = center_x - 50;
    eye1.y = 100;
    eye1.color = '#d0b2d5';

    let eye2 = new Sprite();
    eye2.diameter = 75;
    // Position the right eye 50px to the right of the center
    eye2.x = center_x + 50;
    eye2.y = 100;
    eye2.color = '#d0b2d5';

    // ------> Print out the X positions of each sprite here:
    console.log(eye1.x);
    console.log(eye2.x);

    

}

function draw() {
    clear();
    background('#d993ba');
}