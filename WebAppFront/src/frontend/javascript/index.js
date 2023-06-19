let loginForm = document.getElementById("loginForm");

// add eventListener to loginForm
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (username.value === "" || password.value === "") {
        alert(`\n Invalid username or password input! \n Please check if you filled in both fields.`)
    } else {
        // TODO: send username and password to backend to get it checked
        console.log(`Username: ${username.value} :: Password: ${password.value}`);
    }
});
