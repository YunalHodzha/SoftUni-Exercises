function validate() {
    const inputs = {
        userName: false,
        email: false,
        password: false,
        confirm: false,
        company: true,
    }

    const submitButton = document.getElementById("submit");
    const isCompany = document.getElementById("company");

    //button function

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
    });

    submitButton.addEventListener("click", validateUserName);
    submitButton.addEventListener("click", validateEmail);
    submitButton.addEventListener("click", validatePassword);
    submitButton.addEventListener("click", validateCompany);
    submitButton.addEventListener("click", check);

    // helper functions

    function validateUserName() {
        const userElement = document.getElementById("username");
        const userName = userElement.value;
        const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;

        const isValid = usernameRegex.test(userName);

        if (isValid) {
            userElement.style.border = "none";
            inputs.userName = true;
        } else {
            userElement.style.border = "1px solid black";
            userElement.style.borderColor = "red";
            inputs.userName = false;
        }
    }

    function validateEmail() {
        
        const emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;
        const emailField = document.getElementById("email");
        const emailInput = emailField.value;

        const isValid = emailRegex.test(emailInput);

        if (isValid) {
            emailField.style.border = "none";
            inputs.email = true;
        } else {
            emailField.style.border = "1px solid black";
            emailField.style.borderColor = "red";
            inputs.email = false;
        }
    }

    function validatePassword() {
        const passwordElement = document.getElementById("password");
        const passwordInput = passwordElement.value;

        const confirmPasswordElement = document.getElementById("confirm-password");
        const confirmPasswordInput = confirmPasswordElement.value;
        const passwordRegex = /^[\w]{5,15}$/;

        const isValid = passwordRegex.test(passwordInput);
        if (isValid) {
            passwordElement.style.border = "none";
            inputs.password = true;
        } else {
            passwordElement.style.border = "1px solid black";
            passwordElement.style.borderColor = "red";
            inputs.password = false;
        }

        const isValid2 = passwordRegex.test(confirmPasswordInput);
        if (isValid2 === true && confirmPasswordInput === passwordInput) {
            confirmPasswordElement.style.border = "none";
            inputs.confirm = true;
        } else {
            passwordElement.style.border = "1px solid black";
            passwordElement.style.borderColor = "red";
            inputs.password = false;

            confirmPasswordElement.style.border = "1px solid black";
            confirmPasswordElement.style.borderColor = "red";
            inputs.confirm = false;
        }
    }

    function validateCompany() {

        if (isCompany.checked) {
            const companyNumberRegex = /^[1-9][0-9]{3}$/;
            const companyNumberElement = document.getElementById("companyNumber");
            const companyNumberInput = companyNumberElement.value

            const isValid = companyNumberRegex.test(companyNumberInput);

            if (isValid) {
                companyNumberElement.style.border = "none";
                inputs.company = true;
            } else {
                companyNumberElement.style.border = "1px solid black";
                companyNumberElement.style.borderColor = "red";
                inputs.company = false;
            }
        } else {
            return;
        }
    }

    //is Company
    isCompany.addEventListener("change", isChecked)

    function isChecked() {
        const companyInfo = document.getElementById("companyInfo");

        if (isCompany.checked) {
            companyInfo.style.display = "block";
        } else {
            companyInfo.style.display = "none";
        }
    }

    // checking all inputs are valid

    function check() {
        const valid = document.getElementById("valid");
        let isValid = true;

        for (let value of Object.values(inputs)) {
            if (value === false) {
                valid.style.display = "none";
                isValid = false;
                return;
            }
        }
        if (isValid) {
            valid.style.display = "block";
        }
    }
}
