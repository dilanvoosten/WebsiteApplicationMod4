// variables for this module
// article parent
let article = document.createElement('article');
// article list parent
let articleList = document.createElement('ul');
// category articles list parent
let categoryArticlesList = document.createElement('ul');
// category list
let categoryList = document.querySelector('#drop-content');
// container of the main text of the webpage
const main = document.querySelector('.wrapper');

// basic styling of main
main.style.color = '#D9D9D9';


async function showCategories() {
    const response = await fetch('http://localhost:3000/categories');
    const data = await response.json();

    for (const category of data) {
        const option = document.createElement("a");
        // option.value = category.category;
        option.text = category.category;
        // make each item clickable
        option.addEventListener('click', () => {
            showArticlesOfCategory(category.category);
        })
        // option styling
        option.style.cursor = 'pointer';
        option.style.color = '#C8D6E5';
        option.style.textDecoration = 'underline';
        categoryList.appendChild(option);
    }

    // styling the list of categories
    categoryList.style.display = 'flex';
    categoryList.style.flexDirection = 'column';
    categoryList.style.alignItems = 'flex-start';
    categoryList.style.backgroundColor = '#2E86DE';
    categoryList.style.top = '10vh';
    categoryList.style.maxWidth = '10vw';
    categoryList.style.boxShadow = '0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2)';
    categoryList.style.zIndex = '20';

}


async function showDialog() {
    document.getElementById("accountPopUp").style.visibility = "visible";
    /**
     * For now using a testing user with username updateTest
     * This will show that the functionality works, even though without
     * the current logged-in user
     */
    const response = await fetch('http://localhost:3000/users/updateTest');
    const user = await response.json();

    document.getElementById("usernameLabel").textContent = user.username;
    document.getElementById("passwordLabel").textContent = printStars(user.password);
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

// get the list of all articles
async function showAllArticles() {
    const response = await fetch('http://localhost:3000/articles');
    const data = await response.json();

    for (const article of data) {
        const listItem = document.createElement("li");
        // content of the list item
        listItem.textContent = article.title;
        // make each item clickable
        listItem.addEventListener('click', () => {
            showArticleOnTitle(article.title);
        })
        // styling of list item
        listItem.style.cursor = 'pointer';

        articleList.appendChild(listItem);
    }
    // style the list
    articleList.style.display = 'flex';
    articleList.style.flexDirection = 'column';

    // remove existing element from the container if there are any
    if (main.hasChildNodes()) {
        main.removeChild(article);
        main.appendChild(articleList);
    } else {
        main.appendChild(articleList);
    }
}

async function showArticleOnTitle(title) {
    // get the specific article which has been clicked on
    const response = await fetch(`http://localhost:3000/articles/${title}`);
    const articleData = await response.json();

    console.log(articleData);
    console.log(`${articleData.title} : 
    ${articleData.article_text} : 
    ${articleData.category} : 
    ${articleData.writer}`);

    // create article title from response
    let articleTitle = document.createElement('h1');
    articleTitle.textContent = articleData.title;

    // create article text from response
    let articleText = document.createElement('p');
    articleText.textContent = articleData.article_text;

    // add children to the parent element
    article.appendChild(articleTitle);
    article.appendChild(articleText);

    // styling the article
    article.style.display = 'flex';
    article.style.flexDirection = 'column';
    article.style.gap = '2vh';


    // remove existing element from the container if there are any
    if (main.hasChildNodes()) {
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        main.appendChild(article);
    } else {
        main.appendChild(article);
    }

}

async function showArticlesOfCategory(category) {
    const response = await fetch(`http://localhost:3000/articles/categories/${category}`);
    const data = await response.json();

    console.log(data);

    if (data.length === 0) {
        main.textContent = `Category: "${category}" does not have any articles!`;
    } else {
        // TODO: give message if no articles are found by given category

        for (const article of data) {
            const listItem = document.createElement('li');
            // content of the list item
            listItem.textContent = article.title;
            // make each item clickable
            listItem.addEventListener('click', () => {
                showArticleOnTitle(article.title);
            });
            // styling of the list item
            listItem.style.cursor = 'pointer';

            categoryArticlesList.appendChild(listItem);
        }
        // style the list
        categoryArticlesList.style.display = 'flex';
        categoryArticlesList.style.flexDirection = 'column';

        // remove existing element from the container if there are any
        if (main.hasChildNodes()) {
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            main.appendChild(categoryArticlesList);
        } else {
            main.appendChild(categoryArticlesList);
        }
    }
}

function printStars(word) {
    let result = "";
    for (let i = 0; i < word.length; i++) {
        result += "*";
    }
    return result;
}






