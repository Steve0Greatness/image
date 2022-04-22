const search = location.search.substring(1),
    body = document.body,
    hash = location.hash.substring(1);

if (hash) {
    location.assign(`?${hash}`)
}

if (search) {
    // image
    let image = document.createElement("img");
    image.src = `https://assets.scratch.mit.edu/${search}`;
    image.id = "main-image";

    // title
    document.title = `${search} - view`;

    // body
    body.appendChild(image);
} else {
    location.assign("/")
}