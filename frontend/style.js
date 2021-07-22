
/*fontion de creation des div*/
function createDiv(classes) {
    let div = document.createElement("div");
    div.className = classes;
    return div;
}

/*fonction de creation de l'image*/
function createImg(src, alt, classes) {
    let img = document.createElement("img")
        img.src = src;
        img.alt = alt;
        img.className = classes;
        return img;
}

/*fonction de creation des h5*/
function createH5(classes, content) {
    let cardTitle = document.createElement("h5");
        cardTitle.className = classes;
        cardTitle.innerHTML = content;
        return cardTitle;
}

/*fonction de creation des P*/
function createP(classes, content) {
    let cardContent = document.createElement("p");
        cardContent.className = classes;
        cardContent.innerHTML = content;
        return cardContent;
}

/*fontion de creation des cartes*/
function createCard(img_url) {
    let mainDiv = createDiv("col-12 col-lg-4");
    let cardDiv = createDiv("card mt-4 mb-lg-0 p-3 border-light shadow");
    mainDiv.appendChild(cardDiv);
    let img = createImg(img_url, "appareil photo 2", "card-img-top");
    cardDiv.appendChild(img);
    let cardBodyDiv = createDiv("card-body");
    cardDiv.appendChild(cardBodyDiv);
    let cardTitle = createH5("card-title", "Norbert");
    cardBodyDiv.appendChild(cardTitle);
    let cardContent = createP("car-text", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea sapiente tempora placeat illum odio quam voluptas tempore. Officiis ipsam ipsum, dignissimos eius deserunt numquam esse illo minima ut porro." );
    cardBodyDiv.appendChild(cardContent);
    let link = document.createElement("a");
    link.className = "stretched-link";
    link.href = "#";
    cardBodyDiv.appendChild(link);
    return mainDiv;
}

/*boucle d'affichage des 5 cartes*/
for (let i = 0; i < 5; i++) {
    let mainDiv = createCard("https://th.bing.com/th/id/R.dfafe65de2c08badd9c79c5677dead38?rik=iUHS7nx4B9TmhQ&pid=ImgRaw");
    var container = document.querySelector('#injectHere');
    container.appendChild(mainDiv)
}