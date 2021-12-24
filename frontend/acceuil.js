fetch('http://localhost:3000/api/teddies')
.then( function(res) {
    return res.json()            
})         
.then( function(data){ 
    let produits = data;
    let affichage = document.querySelector('#injectHere');

    for (let i = 0; i < 5; i++) {            
        let card = create_div("col-12 col-lg-4");
        let container = create_div("row py-3 px-5");                
        container.appendChild(card);
        
        let image = create_div("card mt-4 mb-lg-0 p-3 border-light shadow")
        card.appendChild(image);
    
        let link = create_a("stretched-link");
        link.href = `produits.html?id=${produits[i]._id}`;
        image.appendChild(link);  
    
        let img = create_img("card-img-top");
        img.src = produits[i].imageUrl;
        img.alt = "teddies";
        image.appendChild(img);
                
        let description = create_div("card-body");
        image.appendChild(description);
                
        let cardTitle = create_h2("card-title");
        cardTitle.innerHTML = produits[i].name;
        description.appendChild(cardTitle);
                
        let cardPrice = create_h4("price");
        produits[i].price = produits[i].price / 100;
        cardPrice.innerHTML = new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"})
        .format(produits[i].price);
        description.appendChild(cardPrice);
                
        let cardContent = create_p("card-text");
        cardContent.innerHTML = "Disponible en différentes versions.....<br>Cliquez pour plus d'information";
        description.appendChild(cardContent);

        affichage.appendChild(card);   
    }
})        
.catch(function(error)  {
    alert("Nos nounours ne sont pas encore prets. Revenez plus tard.");        
})
