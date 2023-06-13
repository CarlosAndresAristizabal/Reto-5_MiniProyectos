const container = document.querySelector('.containerCards')
var bot = document.getElementById('botup');

window.addEventListener('scroll', () => {

    const { scrollHeight, clientHeight, scrollTop } = document.documentElement

    //console.log(`scrollTop + clientHeight = ${scrollTop + clientHeight}  | Altura personalizada = ${scrollHeight - 3}`)
    scrollTop + clientHeight > scrollHeight - 6 && setTimeout(newContainer, 20);
    // console.log(windows.pageYOffset);
    if (window.pageYOffset > 20) {
    var botStyle = parseInt(window.getComputedStyle(bot));
    var offset = bot.style.getPropertyValue('font-size') * 4 + 70;
    bot.style.top = document.documentElement.clientHeight - offset + "px";
    bot.style.left = document.documentElement.clientWidth - offset + "px";
    bot.style.display = "block";
    } else{
        bot.style.display = "none";
    }
});

const newContainer = () => {
    const box = document.createElement('div')
    box.className = 'box'
    container.appendChild(box);

}

