function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

inputFormContainer = document.querySelector('.animated-form');
inputField = document.querySelector('#email-field');
formH2 = document.querySelector('h2');
submitBtn = document.querySelector('button');
submitBtn.disabled = true;

inputFormContainer.addEventListener('click', () => {
    formH2.classList.add('hidden');
    inputField.focus();
});

inputField.addEventListener('keyup', () => {
    switch (validateEmail(inputField.value)) {
        case false:
            submitBtn.disabled = true;
            submitBtn.classList.remove('active');
            break;
        default:
            submitBtn.disabled = false;
            submitBtn.classList.add('active');
            break;
    }
});

submitBtn.addEventListener('click', () => {
    inputField.classList.add('submit');
    submitBtn.classList.add('submit');

    document.querySelector('#thank-you-title').classList.add('show');
    inputFormContainer.classList.add('shrink');
});
