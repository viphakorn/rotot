const menuBtn = document.querySelector('header nav .menu-btn')

menuBtn.addEventListener('click', () => {
    document.querySelector('header nav .menu').classList.toggle('active');
})

const swapBtn = document.querySelectorAll('.testy nav button')

swapBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.testy nav button.active').classList.remove('active')
        btn.classList.add('active')
    })
})