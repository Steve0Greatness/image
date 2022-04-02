const search = location.search.substring(1),
    body = document.body;

if (!search) {
    body.innerHTML = `<div class="open-image">
        <h1>Open Image</h1>
        <p>Paste the URL below.</p>
        <input type="url" id="url">
    </div>`;
    document.querySelector("#url").addEventListener("change", function() {
        let elem = this.value.split(".")
            elea = this.value.substring(8).split("/");
        if (elem[0].substring(8) === "assets" && elem[1] === "scratch" && elem[2] === "mit" && elem[3].split("/")[0] === "edu") {
            let assign = 1;
            if (elea[1] == "get_image") 
                assign = 3;
            location.assign(`/app.html?${elea[assign]}`);
        } else
            alert(`${this.value} doesn't seem to be a url to Scratch Assets`);
    })
}