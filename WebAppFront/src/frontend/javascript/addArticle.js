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

// boolean and event listener for checking if section has been added
let sectionAdded = false;
document.getElementById("addSection").addEventListener("click", () => {
    sectionAdded = true;
});

// handle the data for making a new article
let newArticle = document.getElementById("newArticle");

newArticle.addEventListener("submit", (e) => {
    e.preventDefault();

    // standard input fields
    let articleTitle = document.getElementById("articleTitle");
    let articleText = document.getElementById("articleText");
    // section input fields
    let articleHeader = document.getElementById("articleHeader");
    let articleSection = document.getElementById("articleSection");

    // check if title is left empty
    if (articleTitle.value === "" || articleText.value === "") {
        alert(`\n Invalid input for making a new article! \n Title and text have to be given`);
        // check if section has been added, if so, check if fields aren't left empty
    } else {
        if (sectionAdded) {
            // check for empty fields
            if (articleHeader.value === "" || articleSection.value === "") {
                alert(`\n Invalid input for making a new article! \n Header and corresponding text have to be given.`);
            } else {
                console.log(`Title: ${articleTitle.value} \n
            Text: ${articleText.value} \n
            Header: ${articleHeader.value} \n
            Section text: ${articleSection.value}`);
            }
        } else {
            // TODO: make this method useful for multiple extra sections
            // set values of uncreated sections to empty string

            // TODO: send data to backend
            console.log(`Title: ${articleTitle.value} \n
            Text: ${articleText.value}`);
        }


    }

});
