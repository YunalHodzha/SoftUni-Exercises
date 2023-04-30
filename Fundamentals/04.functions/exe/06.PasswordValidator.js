function passwordValidator(input) {
    let password = input;

    let validPassword = isValidLength(password);
    let validChars = isValidChar(password);
    let validDigits = isTwoDigits(password);

    isValidPassword(validPassword, validChars, validDigits);


    function isValidLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        }
        console.log("Password must be between 6 and 10 characters");
        return false;
    }

    function isValidChar(password) {
        let letterNumber = /^[0-9a-zA-Z]+$/;
        if (password.match(letterNumber)) {
            return true;
        }
        console.log("Password must consist only of letters and digits");
        return false;
    }

    function isTwoDigits(password) {
        let counter = 0;
        for (let i = 0; i < password.length; i++) {
            if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
                counter++;
            }
            if (counter >= 2) {
                return true;
            }
        }
        console.log("Password must have at least 2 digits");
        return false;
    }

    function isValidPassword(validPassword, validChars, validDigits) {
        if (validDigits && validChars && validPassword) {
            console.log("Password is valid");
        }
    }
}

passwordValidator("'Pa$s$s");