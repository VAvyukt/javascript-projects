function setup() {
    new Canvas(450, 450);
    world.gravity.y = 10;

    let ball = new Sprite();
    ball.diameter = 50;
    ball.x = 220;
    ball.y = 100;
    ball.bounciness = 0.7;

    let beam = new Sprite();
    beam.width = 300;
    beam.height = 20;
    beam.collider = 'static';
}

function draw() {
    clear();
    background('#dc94ef');
}