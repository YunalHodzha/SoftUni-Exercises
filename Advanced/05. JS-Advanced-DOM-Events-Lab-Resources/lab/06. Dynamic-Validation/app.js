function validate() {

    const emailPattern = /[a-z]+@[a-z]+.[a-z]+/;
    const emailEl = document.getElementById("email");

    emailEl.addEventListener("change", validateEmail)

    function validateEmail(e) {
        const emailInput = document.getElementById("email").value;

        if (emailPattern.test(emailInput)) {
            e.target.classList.remove("error");
            return
        }
        e.target.classList.add("error");
    }
}