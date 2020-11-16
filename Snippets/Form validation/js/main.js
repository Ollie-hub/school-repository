// Form Validation
function validate(form_object) {

    
    has_errors = false; 


    let input_elements = form_object.querySelectorAll("required");
    
    for(let element of input_elements) {

 
        let labeltext = element.previousElementSibling.textContent;

        
        if(!element.value) {

            display_error(element, "Du skal udfylde feltet " + labeltext.toLocaleLowerCase() + "!");
            has_errors = true; 
            return false;

        } else {
            switch(element.dataset.validate) {
                case "onlyalpha":
                    if(!isValidAlpha(element.value)) {
                        display_error(element, "Der må ikke være tal i dette felt!");
                        has_errors = true;
                        return false;
                    }
                    break;
                case "onlynum":
                    if(!isValidNumber(element.value)) {
                        display_error(element, "Der må kun være tal i dette felt!");
                        has_errors = true;
                        return false;
                    }
                    break;
                case "validemail":
                    if(!isValidEmail(element.value)) {
                        display_error(element, "Email adressen er ikke gyldig!");
                        has_errors = true;
                        return false;
                    }
                    break;
            }
        }
    }
}

function display_error(input_object, error_message) {

    if (!input_object.nextElementSibling.classList.contains("text-error")) {

        input_object.insertAdjacentHTML('afterend', '<div class="text-error">' + error_message + '</div>');

        input_object.classList.add("field-error");

        input_object.onkeypress = function () {
            if (input_object.nextElementSibling.classList.contains("text-error")) {

                input_object.nextElementSibling.remove();

                input_object.classList.remove("field-error");
            }
        }
    }
}

function isValidNumber(value) {
    let pattern = /^[0-9]+$/;
    return pattern.test(value);
}

function isValidAlpha(value) {
    let pattern = /^[A-ZÆØÅa-zæøå ]+$/;
    return pattern.test(value);
}

function isValidEmail(value) {
    let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return pattern.test(value);
}

function isValidLength(value, min, max) {
    let pattern = RegExp('^[0-9A-Za-z@#$%]{'+min+','+max+'}$');
    return pattern.test(value);
}