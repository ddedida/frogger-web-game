class Frogger {
    constructor() {
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth / 5;
        this.height = this.spriteHeight / 5;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - this.height - 40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }

    update() {
        // UP
        if (keys[38]) {
            if (this.moving == false) {
                this.y -= grid;
                this.moving = true;
            }
        }

        // DOWN
        if (keys[40]) {
            if (this.moving == false && this.y < canvas.height - this.height * 2) {
                this.y += grid;
                this.moving = true;
            }
        }

        // LEFT
        if (keys[37]) {
            if (this.moving == false && this.x > this.width) {
                this.x -= grid;
                this.moving = true;
            }
        }

        // RIGHT
        if (keys[39]) {
            if (this.moving == false && this.x < canvas.width - this.width * 2) {
                this.x += grid;
                this.moving = true;
            }
        }

        // SCORE
        if (this.y < 0) scored();
    }

    draw() {
        ctx3.fillStyle = "green";
        ctx3.fillRect(this.x, this.y, this.width, this.height);
    }

    jump() {
        // console.log("jump");
    }
}

const frogger = new Frogger();
