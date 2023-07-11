function showDialog() {
    document.getElementById("accountPopUp").style.visibility = "visible";
}

function closeDialog() {
    document.getElementById("accountPopUp").style.visibility = "hidden";
}

// handle the data
// let changeCred = document.getElementById("updateUserPass");
//
// changeCred.addEventListener("submit", (e) => {
//     e.preventDefault();
//
//     let newUsername = document.getElementById("updateUsername");
//     let newPassword = document.getElementById("updatePassword");
//     let confirmPassword = document.getElementById("confirmPassword");
//
//     // check if user filled any fields in
//     if (newUsername.value === "" && newPassword.value === "" && confirmPassword.value === "") {
//         alert(`\n Invalid username or password input! \n Please check if you filled in some fields .`)
//         // check if one of the password fields is left empty when the other isn't
//     } else if ((newPassword.value !== "" && confirmPassword.value === "") ||
//         (newPassword.value === "" && confirmPassword.value !== "")) {
//         alert(`\n Invalid input for password change! \n Please fill in both password fields.`)
//         // check if the inserted passwords are the same
//     } else if (newPassword.value !== confirmPassword.value) {
//         alert(`\n Invalid input for password change! \n Inserted passwords are not the same.`);
//         // username can be left empty, so that has not been checked separately
//     } else {
//         console.log(`Changes: \n
//          - Username: ${newUsername.value} \n
//          - Password: ${newPassword.value} :: ${confirmPassword.value}`);
//     }
// });


// handle the data for making a new article
let newArticle = document.getElementById("newArticle");

newArticle.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector('#newArticle'));

    // TODO: get current user in session for the writer
    // give dummy writer as parameter
    formData.append('writer', 'testdilan');

    let bodyData = JSON.stringify(Object.fromEntries(formData.entries()));
    console.log(bodyData);
    try {
        const res = await fetch('http://localhost:3000/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyData
        });
        // catch the errors from the backend
        switch (res.status) {
            case 200 :
                console.log(res.json());
                break;
            case 400 :
                console.log(res.json());
                break;
            case 403 :
                console.log(res.json());
                break;
            default :
                console.log(`No error from database/backend, or status is ${res.status}`);
        }
    } catch (err) {
        console.error('Something went wrong while adding article fetch', err);
    }
});




