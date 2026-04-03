/* This example demonstrates the importance of refreshing
the background every frame. Try deleting the clear() call
and moving the background() call to the setup() function.
*/

let ball;

function setup() {
    new Canvas(450, 450);

    // Create ball
    ball = new Sprite();
    ball.diameter = 50;
    ball.x = 50;
    ball.y = 50;
}

function draw() {
    // Refresh background
    clear();
    background("#b6ed77");

    // Move the ball's position every frame
    ball.x = ball.x + 2;
    ball.y = ball.y + 2;
}