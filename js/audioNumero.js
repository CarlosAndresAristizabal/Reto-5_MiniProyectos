const btnIniciar = document.getElementById("btnIniciarAudio");
const btnDetener = document.getElementById("btnDetenerAudio");
const textAudio = document.getElementById("textAudio");

// Creamos un objetos para poder interactuar con todos los eventos obteniendo desde Web Speech API
var grabar = new webkitSpeechRecognition();
// esto nos permite constantemente estar reconociendo la voz
grabar.continuous = true;
//  esto nos permite elegir que tipo de lenguaje  que va hacer reconociedo
grabar.lang = 'es-ES';
// esto nos permite cuando hay un espacio de silencio deje de grabar y nos muestre el resultado
grabar.interim = false;
// iniciamos con el bton de inicar para comenzar a grabar
btnIniciar.addEventListener('click', () => {
    grabar.start();
});
//  boton de detner la grabación
btnDetener.addEventListener('click', () => {
    grabar.abort();
});
// podemos obtener el resultado de la grabación
grabar.onresult = (event) => {
    // creamos una varibel apra obtener el texto capturado 
    const texto = event.results[ event.results.length - 1 ][ 0 ].transcript;
    textAudio.value = texto;
}

var rec;
if (!("webkitSpeechRecognition" in window)) {
    alert("Sorry, you don't use custom API");
} else {
    rec = new webkitSpeechRecognition();
    rec.lang = "es-ES";
    rec.continuous = true;
    rec.interim = false;
    rec.addEventListener("result", begin);
}

function begin(event) {
    for (let i = event.resultIndex; i < event.results.length; i++) {
        document.getElementById('number').innerHTML = event.results[ i ][ 0 ].transcript;
    }
}
rec.start();