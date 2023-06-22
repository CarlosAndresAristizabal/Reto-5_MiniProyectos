
// Contador de año nuevo
//Hacemos uso la libreira de tiempo
const siguienteAno = (new Date()).getFullYear() + 1
const siguienteAnoFecha = new Date(siguienteAno, 0, 1)
//creamos funcion para obtener el intervalo de tiempo
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