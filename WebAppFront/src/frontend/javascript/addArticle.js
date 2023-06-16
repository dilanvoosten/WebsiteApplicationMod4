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
