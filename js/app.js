feather.replace();

// Slider

const ELEMENT = document.querySelector('.slider');
const FORWARD = document.querySelector('.slider button:last-of-type');
const BACK = document.querySelector('.slider button:first-of-type');
const POINTER = document.querySelector('.pointer');

const arr = []

for (let i = 0; i < 4; i++) {
    let ARTICLE = document.createElement('article')
    ARTICLE.classList.add('highlights__article')

    let IMG = document.createElement('img')
    IMG.classList.add('highlights__image')
    IMG.src = `https://placebear.com/640/36${i}`
    IMG.alt = 'bear'

    let H1 = document.createElement('h1')
    H1.classList.add('highlights__heading')
    H1.textContent = 'FACT: Bears eat beets.'

    let PARAGRAPH = document.createElement('p')
    PARAGRAPH.classList.add('highlights__text')
    PARAGRAPH.textContent = 'Bears. Beets. Battlestar Galactica.'

    ARTICLE.append(IMG, H1, PARAGRAPH)
    arr.push(ARTICLE)
}

SLIDER.INIT(ELEMENT, POINTER, arr)

SLIDER.BTN_FORWARD(FORWARD, ELEMENT, POINTER, arr);

SLIDER.BTN_BACK(BACK, ELEMENT, POINTER, arr);

SLIDER.keyPress(FORWARD, BACK)

// validation

const FORM = document.querySelector('.formValidation')
const ERROR_ELEMENTS = document.querySelectorAll('.formValidation__error')

FORM.addEventListener('submit', function(event) {
    event.preventDefault();

    VALIDATION.validateForm(event.target, ERROR_ELEMENTS)
})