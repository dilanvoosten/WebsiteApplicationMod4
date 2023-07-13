const signupForm = document.getElementById('signUpForm');
let errorField = document.getElementById("errorMessage");

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // check form input
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    if (username.value === "" || password.value === "") {
        alert(`\n Invalid username or password input! \n Please check if you filled in both fields.`);
    } else {
        // create new user
        const formData = new FormData(document.querySelector('form'));
        const bodyData = JSON.stringify(Object.fromEntries(formData.entries()));
        try {
            const res = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: bodyData
            });
            if (res.redirected) {
                window.location.href = "homepage.html";
            } else {
                errorField.textContent = await res.json();
            }
            const data = await res.json();
            console.log(data);
        } catch (e) {
            console.error('Something went wrong while sign up fetch', e);
        }
    }
});