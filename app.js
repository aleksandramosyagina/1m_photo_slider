const slides = document.querySelectorAll('.slide')

for(const slide of slides) {
    slide.addEventListener('click', () => {
        clearSctiveClasses()
        slide.classList.add('active')
    })
}

function clearSctiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}