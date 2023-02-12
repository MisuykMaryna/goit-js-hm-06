const form = document.querySelector(".login-form");

function loginPasswordForm(event) {
    event.preventDefault();
    
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formData = { email, password };
    email === "" || password === "" ? alert("Fill out the form") : console.log(formData),
        event.currentTarget.reset();
   
   

}

form.addEventListener("submit", loginPasswordForm);

