feather.replace();

const ELEMENT = document.querySelector('.slider');
const FORWARD = document.querySelector('.slider button:last-of-type');
const BACK = document.querySelector('.slider button:first-of-type');
const POINTER = document.querySelector('.pointer');

const arr = []

for (let i = 0; i < 4; i++) {
    let ARTICLE = document.createElement('article')
    ARTICLE.classList.add('highlights_article')

    let IMG = document.createElement('img')
    IMG.classList.add('highlights_image')
    IMG.src = `https://placebear.com/640/36${i}`
    IMG.alt = 'bear'

    let H1 = document.createElement('h1')
    H1.classList.add('highlights_heading')
    H1.textContent = 'FACT: Bears eat beets.'

    let PARAGRAPH = document.createElement('p')
    PARAGRAPH.classList.add('highlights_text')
    PARAGRAPH.textContent = 'Bears. Beets. Battlestar Galactica.'

    ARTICLE.append(IMG, H1, PARAGRAPH)
    arr.push(ARTICLE)
}

dot.REQUEST(ELEMENT, POINTER, arr)

dot.BTN_FORWARD(FORWARD, ELEMENT, POINTER, arr);

dot.BTN_BACK(BACK, ELEMENT, POINTER, arr);

dot.keyPress(FORWARD, BACK)