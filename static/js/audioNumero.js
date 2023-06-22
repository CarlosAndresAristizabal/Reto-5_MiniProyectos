//instancia del DOM
const btnIniciar = document.getElementById("btnIniciarAudio");
const btnDetener = document.getElementById("btnDetenerAudio");
const textAudio = document.getElementById("textAudio");

// Creamos un objetos para poder interactuar con todos los eventos obteniendo desde Web Speech API
var grabar = new webkitSpeechRecognition();
// esto nos permite constantemente estar reconociendo la voz
grabar.continuous = true;
//  esto nos permite elegir que tipo de lenguaje  que va hacer reconociedo
grabar.lang = 'es-Es';
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
    // creamos una varible para obtener el texto capturado 
    const texto = event.results[ event.results.length - 1 ][ 0 ].transcript;
    // hacemos una condición para que el text capturado sea un número
    if (isNaN(texto) == false) {
        //Si es un número lo imprime
        textAudio.value = texto;
    } else {
        //Si no envia a pantalla un mensaje de error
        textAudio.value = " No es un Número"
    }
}