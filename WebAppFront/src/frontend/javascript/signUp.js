const signupForm = document.getElementById('signUpForm');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector('form'));
    const bodyData = JSON.stringify(Object.fromEntries(formData.entries()));
    try {

        console.log(bodyData);
        const res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyData
        });
        if (res.redirected) {
            window.location.href = "homepage.html";
        }
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.error('Something went wrong while sign up fetch', e);
    }
});