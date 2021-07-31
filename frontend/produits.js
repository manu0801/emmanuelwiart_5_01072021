/*fiche produits*/

function createDiv(classes) {
    let div = document.createElement("div");
    div.className = classes;
    return div;
}
function createImg(src, alt, classes) {
    let img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        img.className = classes;
        return img;
}
function createH5(classes, content) {
    let cardTitle = document.createElement("h5");
        cardTitle.className = classes;
        cardTitle.innerHTML = content;
        return cardTitle;
}
function createP(classes, content) {
    let cardContent = document.createElement("p");
        cardContent.className = classes;
        cardContent.innerHTML = content;
        return cardContent;
}

function createButton(classes, content) {
    let link = document.createElement("a");
        link.className = classes;
        link.innerHTML = content;
        return link;
}

function createCard(img_url) {
    let mainDiv = createDiv("col-12 col-lg-12");
    let cardDiv = createDiv("card p-3 border-light shadow flex-row");
    mainDiv.appendChild(cardDiv);
    let cardImg = createDiv("col-6");
    cardDiv.appendChild(cardImg)
    let img = createImg(img_url, "appareil photo 2", "card-img-top");
    cardImg.appendChild(img);
    let cardBody = createDiv("card-body");
    cardDiv.appendChild(cardBody);
    let cardTitle = createH5("card-title", "Norbert");
    cardBody.appendChild(cardTitle);
    let cardContent = createP("card-text", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea sapiente tempora placeat illum odio quam voluptas tempore. Officiis ipsam ipsum, dignissimos eius deserunt numquam esse illo minima ut porro.");
    cardBody.appendChild(cardContent);
    let link = createButton("a", "Ajouter au panier");
    link.className = "btn btn-primary";
    link.href = "#";
    cardBody.appendChild(link);
    return mainDiv;
}
for (let i = 0; i < 1; i++) {
    let mainDiv = createCard("https://th.bing.com/th/id/R.dfafe65de2c08badd9c79c5677dead38?rik=iUHS7nx4B9TmhQ&pid=ImgRaw");
    var container = document.querySelector('#ficheProduit');
    container.appendChild(mainDiv);
}