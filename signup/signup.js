document.addEventListener('DOMContentLoaded', function () {
    const toggleIcon = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');

    if (toggleIcon && passwordInput) {
        toggleIcon.addEventListener('click', function () {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleIcon.src = '../svg/showpswrd.svg';
            } else {
                passwordInput.type = 'password';
                toggleIcon.src = '../svg/hidepswrd.svg';
            }
        });
    } else {
        console.error('Toggle password functionality cannot be initialized. Missing elements.');
    }
});