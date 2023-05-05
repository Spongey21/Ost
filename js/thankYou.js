(function() {
    const TEXT = document.querySelector('.name_text')
    const URL = new URLSearchParams(window.location.search)

    TEXT.textContent = URL.get('name')
})()