document.querySelectorAll('.check-form').forEach(function (form) {
    const fields = form.querySelectorAll('.form-control, .form-select');
    const password = form.querySelector('#password');
    const confirmPassword = form.querySelector('#confirmPassword');

    function checkPasswords() {
        if (!password || !confirmPassword) return;
        const message = confirmPassword.parentElement.querySelector('.invalid-feedback');

        if (confirmPassword.value !== password.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            confirmPassword.setCustomValidity('');
        }

        if (confirmPassword.value === '') {
            message.textContent = 'Please confirm your password.';
        } else {
            message.textContent = 'Passwords do not match.';
        }
    }

    function showResult(field) {
        checkPasswords();
        if (field.validity.valid) {
            field.classList.add('is-valid');
            field.classList.remove('is-invalid');
        } else {
            field.classList.add('is-invalid');
            field.classList.remove('is-valid');
        }
    }

    fields.forEach(function (field) {
        field.addEventListener('input', function () {
            showResult(field);
            if (field === password && confirmPassword.value !== '') {
                showResult(confirmPassword);
            }
        });
        field.addEventListener('change', function () {
            showResult(field);
        });
    });

    const submitButton = form.querySelector('[type="submit"]');
    submitButton.addEventListener('click', checkPasswords);
    form.addEventListener('invalid', function (event) {
        if (event.target.matches('.form-control, .form-select')) {
            showResult(event.target);
        }
    }, true);

    form.addEventListener('reset', function () {
        fields.forEach(function (field) {
            field.classList.remove('is-valid', 'is-invalid');
        });
        if (confirmPassword) {
            confirmPassword.setCustomValidity('');
            confirmPassword.parentElement.querySelector('.invalid-feedback').textContent = 'Please confirm your password.';
        }
    });
});