// Variables instanciadas del Dom
const canvas = document.getElementById("canvas");
// variables creadas para formar el canvas
var ctx = canvas.getContext('2d');
var ballRadius = 6;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

//Creación Base "Paddle"
var paddleHeight = 10;
var paddleWidth = 75;

// creación de la bolita de paddle
var paddleX = (canvas.width - paddleWidth) / 2;

// variable para las teclas 
var rightPressed =false;
var leftPressed = false;

// variables de los bloques
var brickRowCount = 8;
var brickColumnCount = 5;
var brickWidth = 80;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

// creacion de variables de puntajes
var puntaje = 0;

// array para los bloques
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }
// capturamos en el documento las teclas presionadas y el movimiento del mouse
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

// creamos una funcion para el movimiento del mouse
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
}
    // creamos una funcion cuando presionamos las teclas
    function keyDownHandler(e) {
        if (e.keyCode == 39) {
            rightPressed = true;
        } else if (e.keyCode == 37) {
            leftPressed = true;
        }
    }

    function keyUpHandler(e) {
        if (e.keyCode == 39) {
            rightPressed = false;
        } else if (e.keyCode == 37) {
            leftPressed = false;
        }
    }
    // Creamos funcion para la dibujar el balón
    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }

    // creación de la función para dibujar los bloques base
    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }
    // creamos la funcion para dibujar los bloques
    function drawBricks() {
        for (var c = 0; c < brickColumnCount; c++) {
            for (var r = 0; r < brickRowCount; r++) {
                if (bricks[c][r].status == 1) {
                    var brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
                    var brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = "white";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }

    // creamos una funcion el seguimiento del puntaje
    function drawPuntaje() {
        ctx.font = '1.2em Arial';
        ctx.fillStyle = 'white';
        ctx.fillText('Puntaje: ' + puntaje, 8, 20);
    }
     
    //creamos la intersecion del balón con los bloques
    function detecion() {
        for (var c = 0; c < brickColumnCount; c++) {
            for (var r = 0; r < brickRowCount; r++) {
                var b = bricks[c][r];
                if (bricks[c][r].status === 1) {
                    if (b.status == 1) {
                        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                            dy = -dy;
                            b.status = 0;
                            puntaje++;
                            if (puntaje == brickRowCount * brickColumnCount) {
                                alert('Felicitaciónes!! tu\ has ganado!');
                                document.location.reload();
                            }
                        }
                    }
                }
            }
        }
    }
    
    //Creamos el canvas 
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBricks();
        drawBall();
        drawPaddle();
        drawPuntaje();
        detecion();

        // Limite derecha y izquierda
        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        // Limite arriba
        if (y + dy < ballRadius) {
            dy = -dy;
        } else if (y + dy > canvas.height - ballRadius) {
            // detencion de la intersection o golpe
            if (x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            }
            // sin no hay toque  o golpe en elos bloques o si sale del limte del canvas sera una terminación de juego  o GAMEOVER
            else {
                alert('Juego Terminado!!');
                document.location.reload();
            }
        }
        // limite de abajo
        if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
            dy = -dy;
        }
        // CREAMOS EL MOVIMIENTO DEL BLOQUE PRINCIPAL
        if (rightPressed && paddleX < canvas.width - paddleWidth) {
            paddleX += 7;
        } else if (leftPressed && paddleX > 0) {
            paddleX -= 7;
        }
        // haciendo EL MOVIMIENTO DEL BALÓN
        x += dx;
        y += dy;
        requestAnimationFrame(draw);
    }
    draw();
// setInterval(draw, 10);