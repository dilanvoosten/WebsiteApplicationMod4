function showDialog() {
    document.getElementById("accountPopUp").style.visibility = "visible";
}

function closeDialog() {
    document.getElementById("accountPopUp").style.visibility = "hidden";
}

// TODO create multiple sections, now it overrides the already created one
function generateSection() {
    document.getElementById("newSections").innerHTML =
        `<label for="articleHeader"></label>
        <input type="text" id="articleHeader" placeholder="Name your header here">
        <label for="articleSection"></label>
        <textarea  id="articleSection"  name="articleSection" placeholder="Write your text here"></textarea>`;
}

// handle the data
let changeCred = document.getElementById("updateUserPass");

changeCred.addEventListener("submit", (e) => {
    e.preventDefault();

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
        // TODO: send changes to the backend
        console.log(`Changes: \n
         - Username: ${newUsername.value} \n
         - Password: ${newPassword.value} :: ${confirmPassword.value}`);
    }
});
