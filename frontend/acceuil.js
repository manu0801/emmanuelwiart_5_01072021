fetch('http://localhost:3000/api/teddies')
        .then( function(res) {
            return res.json()            
        })         
        .then( function(data){ 
            let produits = data;
            // console.log(produits);
            let toto = document.querySelector('#injectHere');

            for (let i = 0; i < 5; i++) {            
                // let mainDiv = card();
                let card = document.createElement("div");
                card.className = "col-12 col-lg-4"; 
                // console.log(card)
    
                let container = document.createElement("div")
                container.className = "row py-3 px-5"
                container.appendChild(card);
        
                    // console.log(container)
        
                let image = document.createElement("div");
                image.className = "card mt-4 mb-lg-0 p-3 border-light shadow";
                card.appendChild(image);
                console.log(image)
    
                let link = document.createElement("a");
                link.className = "stretched-link";
                link.href = "#";
                image.appendChild(link);
                // console.log(link) 
    
                let img = document.createElement("img");
                img.src = produits[i].imageUrl;
                img.alt = "teddies";
                img.className = "card-img-top";
                image.appendChild(img);
                console.log(img)
                
                let description = document.createElement("div");
                description.className = "card-body";
                image.appendChild(description);
                    // console.log(description)
                
                let cardTitle = document.createElement("h5");
                cardTitle.className = "card-title";
                cardTitle.innerHTML = produits[i].name;
                description.appendChild(cardTitle);
                    // console.log(cardTitle)
                
                let cardPrice = document.createElement("h6");
                cardPrice.className = "price";
                
                cardPrice.innerHTML = produits[i].price;
                description.appendChild(cardPrice);
                    // console.log(cardPrice)
                
                let cardContent = document.createElement("p");
                cardContent.className = "card-text";
                cardContent.innerHTML = "Disponible en différentes versions.....<br>Cliquez pour plus d'information";
                description.appendChild(cardContent);
                    // console.log(cardContent) 
                toto.appendChild(card);   
            }
            console.log(produits);

        })        
        .catch(function(error)  {
            alert("Nos nounours ne sont pas encore prets. Revenez plus tard.");        
        })
