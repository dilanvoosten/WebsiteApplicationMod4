let signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    // check if input fields are left empty
    if (username.value === "" || password.value === "") {
        alert(`\n Invalid username or password input! \n Please check if you filled in both fields`);
    } else
        // handle submitted data
        try {
            const fd = new FormData(document.querySelector('form'));
            const urlEncoded = new URLSearchParams(fd).toString();
            await fetch('http://localhost:3000/users', {
                method: "POST",
                body: urlEncoded,
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                }
            });

        } catch (e) {
            console.error('Error while fetching new user', e);
            throw e;
        }
});