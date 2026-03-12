canvas = document.getElementById("gameCanvas"); //get canvas element
ctx = canvas.getContext("2d") //use a 2D context for drawing shapes onto the canvas
const stressMultiplier = 3000000 // makes code run slower so that optimization is visible (otherwise the game runs smoothly no matter what)
const chanceForObstacle = 0.01/stressMultiplier

friction = 2
gravity = 0.05
gameEnded = false

class playerTemplate {
    constructor(x, y, velocityX, velocityY, size, speed, jumpPower) {
        this.x = x
        this.y = y
        this.velocityX = velocityX
        this.velocityY = velocityY
        this.size = size
        this.speed = speed
        this.jumpPower = jumpPower
    }
    
}
class obstacle {
    constructor(x, y, velocityX, velocityY, size) {
        this.x = x
        this.y = y
        this.velocityX = velocityX
        this.velocityY = velocityY
        this.size = size
    }
}

player = new playerTemplate(100, 100, 0, 0, 50, 100, -5) //initialize a player object
allObstacles = [new obstacle(1000, 550, 5, 50)] //array of every obstacle, starts with one obstacle already made here

function gameLoop() {
    //Clear the canvas
    ctx.fillStyle = "gray"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height); 

    //Physics calculations (easier than it sounds, just changing x and y positions)
    playerPhysics();
    obstaclePhysics();

    // Stress test loop
    //Code inside this loop run thousands of times per frame
    //so it must be optimized to make the game run well
    for (let i = 0; i < stressMultiplier; i++) {
        summonObstacle();
        detectCollision();
    }

    // Render
    renderPlayer();
    renderObstacles();

    if (gameEnded === false) {
        requestAnimationFrame(gameLoop); //loops this function every frame
    }
}


function summonObstacle() {
    if (Math.random() < chanceForObstacle) { //0.12% chance to spawn obstacle every frame
        allObstacles.forEach(element => { //runs for every obstacle
            newObstacle = new obstacle(1000, 550, 5, 0, 50) //make a new obstacle
            allObstacles.push(newObstacle) // add to obstacle array
        });
    }
}

function detectCollision() {
    allObstacles.forEach(obs => { //runs for every obstacle
        if (player.x < obs.x + obs.size && player.x + player.size > obs.x && player.y + player.size > obs.y) { //detects if player is inside obstacle
            gameEnded = true; //ends game loop
        }
    });
}









// ----------------------------------------------------------------------------------------
// Code below does not affect optimization
// You wont need to change anything down here until you want to mod the game
// ----------------------------------------------------------------------------------------


function renderPlayer() {
    ctx.fillStyle = "blue" //changes paintbrush color to blue
    ctx.fillRect(player.x, player.y, player.size, player.size) //draws a player rectangle with parameters: position x, position y, width, height
}

function renderObstacles() {
    ctx.fillStyle = "red"
    allObstacles.forEach(obstacle => { //runs for every obstacle
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.size, obstacle.size) //draws obstacle on screen
    });
    
}

function obstaclePhysics() {
    allObstacles.forEach(obstacle => { //runs for every obstacle
        obstacle.x -= obstacle.velocityX //moves obstacle left
    });
}

function playerPhysics() {
    player.velocityX /= friction;
    player.velocityY += gravity;
    
    player.x += player.velocityX;
    player.y += player.velocityY;

    if (player.y >= canvas.height - player.size) { // stop player when they fall too far
        player.velocityY = 0
        player.y = canvas.height - player.size
    }
}

document.addEventListener("keydown", function(key) { // detect player pressing movement keys
    console.log(key.key)
    if (key.key == "ArrowLeft") {
        player.velocityX = -player.speed
    }
    if (key.key == "ArrowRight") {
        player.velocityX = player.speed
    }
    if (key.key == "ArrowUp") {
        player.velocityY = player.jumpPower
    }
}
)

gameLoop() //starts the game
