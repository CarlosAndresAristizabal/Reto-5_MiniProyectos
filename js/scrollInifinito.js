const container = document.querySelector('.containerCards')

window.addEventListener('scroll', () => {

    const { scrollHeight, clientHeight, scrollTop } = document.documentElement

    //console.log(`scrollTop + clientHeight = ${scrollTop + clientHeight}  | Altura personalizada = ${scrollHeight - 3}`)
    scrollTop + clientHeight > scrollHeight - 6 && setTimeout(newContainer, 20)
})

const newContainer = () => {
    const box = document.createElement('div')
    box.className = 'box'
    container.appendChild(box)
}