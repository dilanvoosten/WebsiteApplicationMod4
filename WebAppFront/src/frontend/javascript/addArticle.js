let errorField = document.getElementById("errorMessage");

function showDialog() {
    document.getElementById("accountPopUp").style.visibility = "visible";
}

function closeDialog() {
    document.getElementById("accountPopUp").style.visibility = "hidden";
}

// handle the change credentials data
let changeCred = document.getElementById("updateUserPass");

changeCred.addEventListener("submit", async (e) => {
    e.preventDefault();

    // check form input
    let newUsername = document.getElementById("updateUsername");
    let newPassword = document.getElementById("updatePassword");
    let confirmPassword = document.getElementById("confirmPassword");

    // check if user filled any fields in
    if (newUsername.value === "" && newPassword.value === "" && confirmPassword.value === "") {
        alert(`\n Invalid username or password input! \n Please check if you filled in some fields .`)
        // check if one of the password fields is left empty when the other isn't
    } else if ((newPassword.value !== "" && confirmPassword.value === "") ||
        (newPassword.value === "" && confirmPassword.value !== "")) {
        alert(`\n Invalid input for password change! \n Please fill in both password fields.`)
        // check if the inserted passwords are the same
    } else if (newPassword.value !== confirmPassword.value) {
        alert(`\n Invalid input for password change! \n Inserted passwords are not the same.`);
        // username can be left empty, so that has not been checked separately
    } else {
        // update the credentials of updateTest
        try {
            const formData = new FormData(document.querySelector('#updateUserPass'));
            const bodyData = JSON.stringify(Object.fromEntries(formData.entries()));
            console.log(bodyData);
            const res = await fetch('http://localhost:3000/users/updateTest', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: bodyData
            });
            // catch the responses from the backend
            switch (res.status) {
                case 200:
                    errorField.style.color = '#1dd1a1';
                    errorField.textContent = await res.json();
                    break;
                case 400:
                    errorField.style.color = '#ff6b6b';
                    errorField.textContent = await res.json();
                    break;
                case 404:
                    errorField.style.color = '#ff6b6b';
                    errorField.textContent = await res.json();
                    break;
                default:
                    console.log(`No error from backend/database, or status is ${res.status}`);
            }
        } catch (e) {
            console.error(`Error while fetching new credentials`, e);
            throw e;
        }

    }
});


// handle the data for making a new article
let newArticle = document.getElementById("newArticle");

newArticle.addEventListener("submit", async (e) => {
    e.preventDefault();

    // check form input
    let title = document.getElementById("articleTitle");
    let articleText = document.getElementById("articleText");
    let category = document.getElementById("category");
    if (title.value === "" || articleText.value === "" || category.value === "") {
        alert(`\n Invalid title, text or category input! \n Please check if you filled in all fields.`);
    } else {
        // add article
        try {
            const formData = new FormData(document.querySelector('#newArticle'));
            // TODO: get current user in session for the writer
            // give dummy writer as parameter
            formData.append('writer', 'testdilan');

            let bodyData = JSON.stringify(Object.fromEntries(formData.entries()));
            console.log(bodyData);
            const res = await fetch('http://localhost:3000/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: bodyData
            });
            // catch the responses from the backend
            switch (res.status) {
                case 200 :
                    errorField.style.color = '#1dd1a1';
                    errorField.textContent = await res.json();
                    console.log(res.json());
                    break;
                case 400 :
                    errorField.textContent = await res.json();
                    console.log(res.json());
                    break;
                case 403 :
                    errorField.textContent = await res.json();
                    console.log(res.json());
                    break;
                default :
                    console.log(`No error from database/backend, or status is ${res.status}`);
            }
        } catch (err) {
            console.error('Something went wrong while adding article fetch', err);
        }
    }
});




