const VALIDATION = (function () {
    function IsEmail(str) {
        if (str.type == 'email'
            && str.value.includes('@')
            && str.value.indexOf('@') != 0
            && str.value.indexOf('@') != str.value.length - 1
            && str.value.split('@').length == 2) {
                return true
        }

        return false
    }

    function validateForm(form, errors) {
        let errorCount = 0;

        for (let i = 0; i < form.children.length - 1; i++) {
            let element = form.children[i];

            if (element.children[1].required) {
                if (/^[a-zA-Z0-9!@]*$/.test(element.children[1].value) && element.children[1].value.length > 0) {
                    if (element.children[1].type == 'text') {
                        errors[i].textContent = ''
                    } else if (IsEmail(element.children[1])) {
                            errors[i].textContent = ''
                    } else if (element.children[1].type == 'tel' && /^[0-9]*$/.test(element.children[1].value) && element.children[1].value.length == 8) {
                        errors[i].textContent = ''
                    } else {
                        errors[i].textContent = `Please fix: ${element.children[0].textContent}`
                        errorCount++;
                    }
                } else {
                    errorCount++
                    errors[i].textContent = `Please fix: ${element.children[0].textContent}`
                }
            }
        }

        if (errorCount == 0) {
            form.submit();
        }
    }

    return {
        validateForm
    };
})()

// /[^A-Za-z0-9]/g