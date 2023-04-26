const VALIDATION = (function() {
    function validateForm(form, errors) {
        let errorCount = 0;

        for (let i = 0; i < form.children.length - 1; i++) {
            if (form.children[i].children[1].value.length == 0) {
                errors[i].textContent = `Please fill out: ${form.children[i].children[0].textContent}`
                errorCount++;
            } else {
                errors[i].textContent = ''
            }
        }

        if (errorCount == 0) {
            FORM.submit();
        }
    }

    return {
        validateForm
    };
})()