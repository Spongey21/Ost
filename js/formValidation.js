const VALIDATION = (function() {
    function validateForm(form, errors) {
        let errorCount = 0;

        for (let i = 0; i < form.children.length - 1; i++) {
            let element = form.children[i];

            if (element.children[1].value.length > 0) {
                if (element.children[1].type == 'text') {
                    errors[i].textContent = ''
                } else if (element.children[1].type == 'tel' && element.children[1].value.length == 8) {
                    errors[i].textContent = ''
                } else if (element.children[1].type == 'email' && element.children[1].value.includes('@') && element.children[1].value.indexOf('@') != 0 && element.children[1].value.indexOf('@') != element.children[1].value.length - 1) {
                    errors[i].textContent = ''
                } else {
                    errors[i].textContent = `Please fix: ${element.children[0].textContent}`
                    errorCount++;
                }
            } else {
                errors[i].textContent = `Please fill: ${element.children[0].textContent}`
                errorCount++;
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