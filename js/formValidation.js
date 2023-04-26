const VALIDATION = (function() {
    function validateForm(form, errors) {
        let errorCount = 0;

        for (let i = 0; i < form.children.length - 1; i++) {
            let element = form.children[i];

            if (element.children[1].value.length == 0) {
                errors[i].textContent = `Please fill out: ${element.children[0].textContent}`
                errorCount++;
            } else if (element.children[1].name == 'phone' && element.children[1].value.length == 8) {
                let validNumber = /^\+?[1-9][0-9]{7,14}$/

                if (!validNumber.test(element.children[1].value)) {
                    errors[i].textContent = `Please fix: ${element.children[0].textContent}`
                    errorCount++;
                }
            } else if (element.children[1].name == 'email') {
                let validEmailRegex = /^\S+@\S+\.\S+$/

                if (!validEmailRegex.test(element.children[1].value)) {
                    errors[i].textContent = `Please fix: ${element.children[0].textContent}`
                    errorCount++;
                }
            } else {
                element.children[1].value = ''
                errors[i].textContent = `Please fill out: ${element.children[0].textContent}`
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