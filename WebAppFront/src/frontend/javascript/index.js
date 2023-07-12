let loginForm = document.getElementById("loginForm");
let errorField = document.getElementById("errorMessage");

// add eventListener to loginForm
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(document.querySelector('form'));
    const bodyData = JSON.stringify(Object.fromEntries(formData.entries()));
    console.log(bodyData);

    // check form input
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    if (username.value === "" || password.value === "") {
        alert(`\n Invalid username or password input! \n Please check if you filled in both fields.`)
    } else {
        // if login is successful, redirect to homepage and save credentials
        try {
            const res = await fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: bodyData
            });
            if (res.redirected) {
                window.location.href = '../html/homepage.html';
            } else {
                errorField.textContent = await res.json();
            }
        } catch (err) {
            console.error('Something went wrong while sending user credentials', err);
        }
    }
});

