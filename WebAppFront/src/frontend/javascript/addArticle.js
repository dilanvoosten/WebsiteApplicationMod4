function showDialog() {
    document.getElementById("accountPopUp").style.visibility = "visible";
}

function closeDialog() {
    document.getElementById("accountPopUp").style.visibility = "hidden";
}

function generateSection() {
    document.getElementById("newSections").innerHTML =
        `<label for="articleHeader"></label>
        <input type="text" id="articleHeader" name="articleHeader" placeholder="Name your header here">
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

newArticle.addEventListener("submit", async (e) => {
    e.preventDefault();

    // standard input fields
    let articleTitle = document.getElementById("articleTitle");
    let articleText = document.getElementById("articleText");
    // section input fields
    let articleHeader = document.getElementById("articleHeader");
    let articleSection = document.getElementById("articleSection");
    // category input field
    let category = document.getElementById("category");

    // check if title is left empty
    if (articleTitle.value === "" || articleText.value === "" || category.value === "") {
        alert(`\n Invalid input for making a new article! \n Title, Text and Category have to be given`);
        // check if section has been added, if so, check if fields aren't left empty
    } else {
        // handle submitted data without extra section
        const fd = new FormData(document.getElementById('newArticle'));
        const urlEncoded = new URLSearchParams(fd).toString();
        await fetch('http://localhost:3000/articles', {
            method: "POST",
            body: urlEncoded,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            }
        });

    }
});




