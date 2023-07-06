async function showCategories() {
    let dropContent = document.getElementById('drop-content');
    const response = await fetch('http://localhost:3000/categories');
    const data = await response.json();

    for (const category of data) {
        const option = document.createElement("a");
        // option.value = category.category;
        option.text = category.category;
        option.href = '#';
        option.style.color = '#C8D6E5';
        option.style.textDecoration = 'underline';
        dropContent.appendChild(option);
    }

    dropContent.style.display = 'flex';
    dropContent.style.flexDirection = 'column';
    dropContent.style.alignItems = 'flex-start';
    dropContent.style.backgroundColor = '#2E86DE';
    dropContent.style.top = '10vh';
    dropContent.style.maxWidth = '10vw';
    dropContent.style.boxShadow = '0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2)';
    dropContent.style.zIndex = '20';

}


function showDialog() {
    document.getElementById("accountPopUp").style.visibility = "visible";
    fetch('http://localhost:3000/users/current')
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(jsonRes => {
            document.getElementById('usernameLabel').textContent = jsonRes.username;
        }).catch(e => {
        console.error('Fetch error:', e)
    })
    // show current user on account information
    // document.getElementById('usernameLabel').innerHTML = user.username;

}

function closeDialog() {
    document.getElementById("accountPopUp").style.visibility = "hidden";
}

function goToAddArticle() {
    window.location = '../html/addArticle.html';
}

// handle the data
let changeCred = document.getElementById("updateUserPass");

changeCred.addEventListener("submit", async (e) => {
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
        try {
            const fd = new FormData(document.querySelector('form'));
            const urlEncoded = new URLSearchParams(fd).toString();
            await fetch('http://localhost:3000/users/update', {
                method: "POST",
                body: urlEncoded,
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                }
            }).then((res) => {
                if (res.redirected) {
                    window.location = '../html/homepage.html';
                }
            });
        } catch (e) {
            console.error(`Error while fetching new credentials`, e);
            throw e;
        }

    }
});




