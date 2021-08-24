let urlSearchParams = new URLSearchParams(document.location.search);
    // console.log(urlSearchParams)

let id = urlSearchParams.get("id")
    // console.log(id)

fetch(`http://localhost:3000/api/teddies/${id}`)
        .then( function(res) {
            return res.json()            
        })         
        .then( function(data){ 
            let produits = data;
            // console.log(produits);
            let affichage = document.querySelector('#ficheProduit');
                // console.log(affichage)

            // for (let i = 0; i < 5; i++) {            
                let card = document.createElement("div");
                card.className = "col-12 col-lg-6"; 
                // console.log(card)
    
                let container = document.createElement("div")
                container.className = "row p5";
                container.appendChild(card);        
                // console.log(container)
        
                let image = document.createElement("div");
                image.className = "card p-3 border-light shadow";
                card.appendChild(image);
                // console.log(image)

                let containerImg = document.createElement("div");
                containerImg.className = "col-12";
                image.appendChild(containerImg);
                // console.log(containerImg)

                let img = document.createElement("img");
                img.src = `${produits.imageUrl}`;
                img.alt = "teddies";
                img.className = "imgProduit";
                containerImg.appendChild(img);
                // console.log(img);

                let description = document.createElement("div");
                description.className = "card-body";
                image.appendChild(description);
                // console.log(description)

                let cardTitle = document.createElement("h5");
                cardTitle.className = "card-title";
                cardTitle.innerHTML = `${produits.name}`;
                description.appendChild(cardTitle);
                // console.log(cardTitle)

                let cardContent = document.createElement("p");
                cardContent.className = "card-text";
                cardContent.innerHTML = `${produits.description}`;
                description.appendChild(cardContent);
                // console.log(cardContent)

                let cardPrice = document.createElement("h6");
                cardPrice.className = "price";                 
                cardPrice.innerHTML = `${produits.price / 100}.00 €`;                                
                description.appendChild(cardPrice);                    
    
                let link = document.createElement("a");
                link.className = "btn btn-primary";
                link.href = "panier.html";
                link.innerText = "Ajoutez au panier";
                description.appendChild(link);
                // console.log(link)

                        // debut du choix
                let colorSelect = document.getElementById("color-select");
                description.appendChild(colorSelect);           
                
                let optionColors = produits.colors;                
                
                for (var j = 0; j < optionColors.length; j++){
                    let option = document.createElement("option");
                    option.value = optionColors[j];
                    option.text = optionColors[j];
                    colorSelect.appendChild(option);

                    console.log(optionColors[j]);
                }           

                affichage.appendChild(card);   
            
            // console.log(produits);

        })        
        .catch(function(error)  {
            alert("Nos nounours ne sont pas encore prets. Revenez plus tard.");        
        })