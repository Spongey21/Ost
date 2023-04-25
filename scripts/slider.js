const SLIDER = (function () {
    var index = 0;

    // Gets external element_arr and radio button creation
    function REQUEST(element, container, element_arr) {
        for (let i = 0; i < element_arr.length - 15; i++) {
            const RADIO = document.createElement('input')
            RADIO.type = 'radio'
            RADIO.name = 'highlight'
            RADIO.id = `Radio${i}`

            RADIO.addEventListener('click', function () {
                let currentIndex = index;
                index = i;

                if (currentIndex > index) {
                    element.classList.add('animate__fadeOutLeft')
                } else {
                    element.classList.add('animate__fadeOutRight')
                }
            })

            if (i == 0) { RADIO.checked = true }

            container.appendChild(RADIO)
        }

        element.src = element_arr[0]
    }

    // Slider forward button
    function BTN_FORWARD(btn_forward, element, input_elements) {
        btn_forward.addEventListener('click', function () {
            index++;

            if (index > element_arr.length - 1) { index = 0; }

            element.classList.add('animate__fadeOutRight')

            const radioList = getAllElements(input_elements)
            radioList[index].checked = true;
        })
    }

    // Slider back button
    function BTN_BACK(btn_Back, element, input_elements) {
        btn_Back.addEventListener('click', function () {
            index--;

            if (index < 0) { index = element_arr.length - 1 }

            element.classList.add('animate__fadeOutLeft')

            const radioList = getAllElements(input_elements)
            radioList[index].checked = true;
        })
    }

    // Animationstart
    function animationStart(element, btn_forward, btn_Back) {
        element.addEventListener('animationstart', function () {
            btn_forward.disable = true;
            btn_Back.disable = true;
        })
    }

    // Animationend
    function animationEnd(element, btn_forward, btn_Back) {
        let img = element
        img.addEventListener('animationend', function (anim) {
            if (img.classList.contains(img.classList[2])) { img.classList.remove(img.classList[2]); }
            if (img.classList.contains(img.classList[1])) { img.classList.remove(img.classList[1]); }

            element.src = element_arr[index]

            switch (anim.animationName) {
                case 'fadeOutRight':
                    img.classList.add('animate__fadeInLeft')
                    break;
                case 'fadeOutLeft':
                    img.classList.add('animate__fadeInRight')
                    break;
            }

            btn_forward.disable = false;
            btn_Back.disable = false;
        })
    }

    // Press key for slider movement
    function keyPress(forward, back) {
        document.addEventListener('keyup', function (event) {
            if (event.key == 'ArrowRight') {
                forward.click();
            } else if (event.key == 'ArrowLeft') {
                back.click();
            }
        })
    }

    return {
        REQUEST,
        BTN_FORWARD,
        BTN_BACK,
        animationStart,
        animationEnd,
        keyPress
    };
})()