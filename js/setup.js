const canvas = document.getElementById("canvas1");
const ctx1 = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.getElementById("canvas5");
const ctx5 = canvas5.getContext("2d");
canvas5.width = 600;
canvas5.height = 600;

const canvas_highscore = document.getElementById("high-score");
const hs = canvas_highscore.getContext("2d");
canvas_highscore.width = 250;
canvas_highscore.height = 250;

// Global Variables
const grid = 80;
let keys = [];
let score = 0;
let frame = 0;
let gameSpeed = 1;
let safe = false;
let highscore = 0;

const particlesArray = [];
const maxParticles = 300;
const rippleArray = [];
const carsArray = [];
const logsArray = [];

// Image
const background = new Image();
background.src = "./assets/background_lvl2.png";

const grass = new Image();
grass.src = "./assets/grass.png";

const collisions = new Image();
collisions.src = "./assets/collisions.png";

const turtle = new Image();
turtle.src = "./assets/turtles.png";

const log = new Image();
log.src = "./assets/log.png";

const car = new Image();
car.src = "./assets/cars.png";
let numberOfCars = 3;

const frogSprite = new Image();
frogSprite.src = "./assets/frog_spritesheet.png";
