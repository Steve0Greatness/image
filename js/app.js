const search = location.search.substring(1),
    body = document.body; // Gets the location.search, and then removes the first character

if (search) {
    // image
    let image = document.createElement("img");
    image.src = `https://assets.scratch.mit.edu/${search}`;
    image.id = "main-image";

    // title
    document.title = search + " - view";

    // body
    body.innerHTML = ""
    body.appendChild(image);
} else {
    location.assign("/")
}