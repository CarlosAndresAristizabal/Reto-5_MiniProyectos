// Cuenta regresiva
const contador = document.querySelector('.contador');
const btn = document.querySelector('.buttons');
const inputSegundos = document.getElementById('segundos');

var segundos;
var minutos;
var operaciónSegundos;
var contar;

function comenzar() {
	display("comenzar", "iniciar");
	segundos = Number(inputSegundos.value);
	inputSegundos.style.display = "none";
	contando();
}

function display(primerNumero, segundoNumero) {
	document.getElementById(primerNumero).style.display = "none";
	document.getElementById(segundoNumero).style.display = "block";
}

function check(item) {
	contar = item.value;
	if (item.id == "iniciar") {
		display("iniciar", "parar");
	} else if (item.id == "parar") {
		display("parar", "continuar");
	}
	else {
		display('continuar', "parar");
	}
}

function contadorSegundo() {
	if (segundos > 0) {
		if (contar == true) {
			segundos--;
			operaciónSegundos = segundos % 60;
			minutos = Math.floor(segundos / 60);

			if (operaciónSegundos < 10) {
				operaciónSegundos = "0" + operaciónSegundos;
			}

			if (minutos < 10) {
				minutos = "0" + minutos;
			}

			contador.innerHTML = minutos + " : " + operaciónSegundos;
		}
	}
	else {
		contador.innerHTML = "TERMINADO!";
		btn.style.opacity = '0';
	}
}

function contando() {
	operaciónSegundos = segundos % 60;
	minutos = Math.floor(segundos / 60);

	if (operaciónSegundos < 10) {
		operaciónSegundos = "0" + operaciónSegundos;
	}

	if (minutos < 10) {
		minutos = "0" + minutos;
	}

	contador.innerHTML = minutos + " : " + operaciónSegundos;
	setInterval(contadorSegundo, 1000);
}
// ------------------------------------------------------------------
// Contador de año nuevo
const siguienteAno = (new Date()).getFullYear() + 1
const siguienteAnoFecha = new Date(siguienteAno, 0, 1)

setInterval(() => {
  const todosDias = new Date()
  const diferenciaSegundos = Math.floor((siguienteAnoFecha.getTime() - todosDias.getTime()) / 1000)
  const dias = Math.floor((diferenciaSegundos / (60 * 60)) / 24)
  const horas = Math.floor(diferenciaSegundos / (60 * 60)) % 24
  const minutos = Math.floor(diferenciaSegundos / 60) % 60
  const segundos = Math.floor(diferenciaSegundos) % 60

  diaElement.innerText = dias
  horaElement.innerText = horas
  minElement.innerText = minutos
  secElement.innerText = segundos
}, 1000)