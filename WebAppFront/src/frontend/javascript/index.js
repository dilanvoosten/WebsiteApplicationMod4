let loginForm = document.getElementById("loginForm");

// add eventListener to loginForm
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (username.value === "" || password.value === "") {
        alert(`\n Invalid username or password input! \n Please check if you filled in both fields.`)
    } else {
        // TODO: send username and password to backend to get it checked
        try {
            const fd = new FormData(document.querySelector('form'));
            const urlEncoded = new URLSearchParams(fd).toString();
            await fetch('http://localhost:3000/', {
                method: "POST",
                body: urlEncoded,
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                }
            })
        } catch (e) {
            console.error('Error while fetching login credentials', e);
            throw e;
        }

    }
});
