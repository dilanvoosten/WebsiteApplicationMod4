let signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let role = document.getElementById("role");

    // check if input fields are left empty
    if (username.value === "" || password.value === "") {
        alert(`\n Invalid username or password input! \n Please check if you filled in both fields`);
    } else
        // TODO: send data to username to create an account
        console.log(`Username: ${username.value} :: Password: ${password.value} :: Role: ${role.value}`)
});