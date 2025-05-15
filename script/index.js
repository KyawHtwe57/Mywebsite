const signIn = document.querySelector("#signIn");
signIn.addEventListener("submit", (e) => {
    e.preventDefault(); 

    let isValid = true;

    const getEmail = document.querySelector('#email').value;
    const getPassword = document.querySelector('#password').value;

    if(getEmail.trim() === "") {
        isValid = false;
        const getEmailError = document.querySelector("#emailError");
        getEmailError.innerHTML = "Email is required";
        getEmailError.classList.remove('hidden');
    }else if((/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(getEmail) === false && (/^(?:\+?\d{1,3})?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/).test(getEmail) === false) {
        isValid = false;
        const getEmailError = document.querySelector("#emailError");
        getEmailError.innerHTML = "Email or Phone number is not valid";
        getEmailError.classList.remove('hidden');
    }else{
        const getEmailError = document.querySelector("#emailError");
        getEmailError.innerHTML = "";
        getEmailError.classList.add('hidden');
    }

    if(getPassword.trim() === "") {
        isValid = false;
        const getPasswordError = document.querySelector("#passwordError");
        getPasswordError.innerHTML = "Password is required";
        getPasswordError.classList.remove('hidden');
    }else if(getPassword.length < 8) {
        isValid = false;
        const getPasswordError = document.querySelector("#passwordError");
        getPasswordError.innerHTML = "Password must be more than 8 characters";
        getPasswordError.classList.remove('hidden');
    }else{
        const getPasswordError = document.querySelector("#passwordError");
        getPasswordError.innerHTML = "";
        getPasswordError.classList.add('hidden');
    }

    if(isValid) {
        window.location.assign('main.html');
    }

});
    