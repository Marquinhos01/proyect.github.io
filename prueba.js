const bar = document.querySelector('.nav-lateral-bar')
const button = document.querySelector('.button')

button.addEventListener('click', () => {
    bar.classList.toggle('active')
})