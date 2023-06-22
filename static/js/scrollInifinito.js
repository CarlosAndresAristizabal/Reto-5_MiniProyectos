// instacniamos js con el DOM
const container = document.querySelector('.containerCards')
var bot = document.getElementById('botup');
// creamos un escuchador en la pestaña
window.addEventListener('scroll', () => {
    // creamos varibles
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement

    //console.log(`scrollTop + clientHeight = ${scrollTop + clientHeight}  | Altura personalizada = ${scrollHeight - 3}`)
    // hacemos operación para el scroll y creamos las replicas
    scrollTop + clientHeight > scrollHeight - 6 && setTimeout(newContainer, 10);
    // console.log(windows.pageYOffset);
    // verficamos la obtención de del rango de la página
    if (window.pageYOffset > 20) {
        //creamos variable y guardamos datos y parseamos los string que obtenemos de la bot
        var botStyle = parseInt(window.getComputedStyle(bot));
        var offset = bot.style.getPropertyValue('font-size') * 4 + 70;
        bot.style.top = document.documentElement.clientHeight - offset + "px";
        bot.style.left = document.documentElement.clientWidth - offset + "px";
        bot.style.display = "block";
    } else {
        bot.style.display = "none";
    }
});
// creamos un template para las replicas 
const newContainer = () => {
    const box = document.createElement('div')
    box.className = 'box'
    container.appendChild(box);

}

