function animate() {
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);

    handleRipples();
    ctx2.drawImage(background, 0, 0, canvas.width, canvas.height);
    handleParticles();
    frogger.draw();
    frogger.update();

    handleObstacles();
    handleScoreBoard();
    ctx4.drawImage(grass, 0, 0, canvas.width, canvas.height);
    frame++;
    requestAnimationFrame(animate);
}

animate();

// Event Listener
window.addEventListener("keydown", function (e) {
    keys = [];
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]) {
        frogger.jump();
    }
});

window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode];
    frogger.moving = false;
    frogger.frameX = 0;
});

// Score
function scored() {
    score += 10;
    gameSpeed += 0.5;
    frogger.x = canvas.width / 2 - frogger.width / 2;
    frogger.y = canvas.height - frogger.height - 40;
}

function handleScoreBoard() {
    ctx4.fillStyle = "white";
    ctx4.strokeStyle = "white";
    ctx4.font = "15px Verdana";
    ctx4.strokeText("SCORE:", 15, 25);
    ctx4.font = "30px Verdana";
    ctx4.fillText(score, 15, 60);
    ctx4.font = "15px Verdana";
    ctx4.strokeText("Collisions: " + collisionCount, 15, 125);
    ctx4.strokeText("Game Speed: " + gameSpeed.toFixed(1), 15, 145);
}

// Collisions
function collision(first, second) {
    return !(first.x > second.x + second.width || first.x + first.width < second.x || first.y > second.y + second.height || first.y + first.height < second.y);
}

function resetGame() {
    frogger.x = canvas.width / 2 - frogger.width / 2;
    frogger.y = canvas.height - frogger.height - 40;
    score = 0;
    collisionCount++;
    gameSpeed = 1;
}
