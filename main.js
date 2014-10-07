//Constantes

var WIDTH  = 800;
var HEIGHT = 600;

var UpArrow   = 38;
var DownArrow = 40;
var WKey   = 87;
var SKey = 83;


//-----VARIABLES GLOBAlES----------------------------
//Elementos del juego
var canvas;
var ctx;
var keystate = {};

// Objeto del juego
var miRectangulo = {
    x: 0,
    y: 0,
    update: function(){
	this.x += 1;
	if(keystate[UpArrow]){ //si el usuario apreto UpArrow
	    this.y += 10;
	    keystate[UpArrow] = false;
	}
    },

    draw: function(){
	ctx.fillStyle="#FF0000";
	ctx.fillRect(this.x,this.y,25,25);
    }};

//----------FUNCIONES DEL JUEGO---------------------------
function main() {

   
    initCanvas(); // inicia el canvas 
    initJuego(); // inicia los objetos del juego donde deben de ir




    // game loop function
    var loop = function() {
	update();
	draw();
	window.requestAnimationFrame(loop, canvas);
    };



    window.requestAnimationFrame(loop, canvas);

}



/**
 * Inicia el canvas, el contexto grafico (ctx) y los pega al documento html
 */
function initCanvas() {

     // create, initiate and append game canvas

    canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    ctx = canvas.getContext("2d");
    ctx.font="40px Georgia";

    document.body.appendChild(canvas);

   

    // keep track of keyboard presses
    document.addEventListener("keydown", function(evt) {
	keystate[evt.keyCode] = true;
    });

    document.addEventListener("keyup", function(evt) {
	delete keystate[evt.keyCode];
    });

   
    
}

function initJuego(){
    miRectangulo.x = 100;
    miRectangulo.y = 100;
}



/**
 * Esta funcion va a actualizar el estado de las variables del juego
 */

function update() {
    miRectangulo.update();
}



/**
 * Clear canvas and draw all game objects and net
 */

function draw() {

    //Aqui se esta borrando y repintando toda la pantalla
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.save();
    ctx.fillStyle = "#fff";

    //Aqui van mis draws		    
    miRectangulo.draw();


    ctx.restore();
}



// start and run the game
main();

