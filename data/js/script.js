$(document).ready(function(){
    $('.editContact').submit(function (event){
        event.preventDefault();
        // Variables
        var name = $('#name').val();
        var mail = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
        const regexMail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,}$/;
        const checkRegexMail = mail.match(regexMail);
        const regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		const checkRegexPhone = phone.match(regexPhone);

        // Nom
        if (name.length === 0) {
            $('#name').addClass('error');
        }
        else {
            $('#name').removeClass('error');
        }

        // Mail
        if ((mail.length === 0) || (checkRegexMail === false) || (checkRegexMail === null)) {
            $('#email').addClass('error');
        }
        else {
            $('#email').removeClass('error');
        }

        // Phone
        if ((phone.length === 0) || (checkRegexPhone === false) || (checkRegexPhone === null)) {
            $('#phone').addClass('error');
        }
        else {
            $('#phone').removeClass('error');
        }

        // Mail
        if (message.length === 0) {
            $('#message').addClass('error');
        }
        else {
            $('#message').removeClass('error');
        }
        
    });
});