const search = location.search.substring(1),
    body = document.body,
    hash = location.hash.substring(1);

function validateURL(urlArray) {
    console.log(urlArray)
    return (
        urlArray[0].substring(8) === "assets" &&
        urlArray[1] === "scratch" &&
        urlArray[2] === "mit" &&
        urlArray[3].split("/")[0] === "edu"
    )
}

function sendError(message) {
    const error = document.querySelector(".error-message"),
        hideError = () => { error.style.display = "none"; };
    error.innerText = message;
    error.style.display = "flex";
    setTimeout(hideError, 5000);
    error.addEventListener("click", hideError)
}

if (search || hash) {
    location.assign(`app.html?${search || hash}`)
}

body.innerHTML += `<div class="open-image">
    <h1>Open Image</h1>
    <lable for="url" class="URL">Paste the URL below.</lable>
    <input type="url" id="url">
</div>
<div class="error-message"></div>`;
document.querySelector("#url").addEventListener("change", function() {
    let elem = this.value.split("."),
        elea = this.value.substring(8).split("/");
    if (validateURL(elem)) {
        let assign = 1;
        if (elea[1] == "get_image") 
            assign = 3;
        // location.assign(`/app.html?${elea[assign]}`);
        console.log(assign, elea[assign], elea)
    } else
        sendError(`${this.value} doesn't seem to be a url to Scratch Assets`);
})