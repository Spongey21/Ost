const dot = (function () {
    var index = 0;

    function changeElement(element_container, newElement) {
        element_container.children[2].remove()
        element_container.append(newElement);
    }

    // Gets external element_arr and radio button creation
    function REQUEST(element_container, container, element_arr) {
        for (let i = 0; i < element_arr.length; i++) {

            const RADIO = document.createElement('input')
            RADIO.type = 'radio'
            RADIO.name = 'highlight'
            RADIO.id = `Radio${i}`

            RADIO.addEventListener('click', function () {
                index = i;

                changeElement(element_container, element_arr[index])
            })

            if (i == 0) { 
                RADIO.checked = true;
                element_container.append(element_arr[0])
            }

            container.appendChild(RADIO)
        }

    }

    // Slider forward button
    function BTN_FORWARD(btn_forward, element_container, input_elements, element_arr) {
        btn_forward.addEventListener('click', function () {
            index++;

            if (index > element_arr.length - 1) { index = 0; }

            changeElement(element_container, element_arr[index])

            const radioList = input_elements.children
            radioList[index].checked = true;
        })
    }

    // Slider back button
    function BTN_BACK(btn_Back, element_container, input_elements, element_arr) {
        btn_Back.addEventListener('click', function () {
            index--;

            if (index < 0) { index = element_arr.length - 1 }

            changeElement(element_container, element_arr[index])

            const radioList = input_elements.children;
            radioList[index].checked = true;
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
        keyPress
    };
})()