function validate() {
    const emailPattern = /[a-z]+@[a-z]+.[a-z]+/;
    const emailField = document.getElementById("email");

    emailField.addEventListener("change", validateEmail);

    function validateEmail(e) {
        const emailInput = document.getElementById("email").value;
        const {target} = e;

        console.log(target);
        const operation = emailPattern.test(emailInput) ? "remove" : "add";
        target.classList[operation]("error");
    }
}