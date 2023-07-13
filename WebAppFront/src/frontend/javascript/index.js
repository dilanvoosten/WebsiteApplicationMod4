export let currentUser;

let loginForm = document.getElementById("loginForm");
let errorField = document.getElementById("errorMessage");

// add eventListener to loginForm
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // check form input
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    if (username.value === "" || password.value === "") {
        alert(`\n Invalid username or password input! \n Please check if you filled in both fields.`)
    } else {
        const formData = new FormData(document.querySelector('form'));
        const bodyData = JSON.stringify(Object.fromEntries(formData.entries()));
        // if login is successful, redirect to homepage and save credentials
        try {
            const res = await fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: bodyData
            });
            // if redirected from backend, redirect page on frontend and save user credentials in session
            if (res.status === 200) {
                window.location.href = '../html/homepage.html';
                currentUser = await res.json();
                console.log(currentUser);
            } else { // otherwise show error message
                errorField.textContent = await res.json();
            }
        } catch (err) {
            console.error('Something went wrong while sending user credentials', err);
        }
    }
});

// export default currentUser;