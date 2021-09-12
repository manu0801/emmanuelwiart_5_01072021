let urlSearchParams = new URLSearchParams(document.location.search);
    // console.log(urlSearchParams)

var id = urlSearchParams.get("id")
    // console.log(id)

fetch(`http://localhost:3000/api/teddies/${id}`)
        .then( function(res) {
            return res.json()            
        })         
        .then( function(data){ 
            let produits = data;
            // console.log(id);

            let affichage = document.querySelector('#ficheProduit');
                console.log(affichage)

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

                let cardTitle = document.createElement("h2");
                cardTitle.className = "card-title";
                cardTitle.innerHTML = `${produits.name}`;
                description.appendChild(cardTitle);
                // console.log(cardTitle)

                let cardContent = document.createElement("p");
                cardContent.className = "card-text";
                cardContent.innerHTML = `${produits.description}`;
                description.appendChild(cardContent);
                // console.log(cardContent)

                let cardPrice = document.createElement("h3");
                cardPrice.className = "price";                 
                cardPrice.innerHTML = `${produits.price / 100}€`;                                
                description.appendChild(cardPrice); 
                // console.log(cardPrice)

                let link = document.createElement("input");
                link.className = "btn btn-primary";
                link.type = "submit";
                link.value = "Ajoutez au panier";
                description.appendChild(link);                
                // console.log(link)            

            link.addEventListener("click", function(){

                let panier = JSON.parse(localStorage.getItem("produit"));
                
                    // ------------fenetre de confirmation panier-----------
                const popupConfirmation = () =>{
                    if(window.confirm(`${produits.name} au prix de ${produits.price / 100} € a bien été ajouté au panier.
                    Consultez le panier OK ou continuez vos achats ANNULER`)){
                        window.location.href = "panier.html";
                    }else{
                        window.location.href = "acceuil.html";
                    }
                }
                if(panier){                    
                    if(panier[id]){
                        panier[id]++;  
                    }
                    else{
                        panier[id] = 1;
                    }
                    // panier.push(optionProduit);
                    localStorage.setItem("produit", JSON.stringify(panier));
                    console.log(panier);
                    popupConfirmation();
                }
                else{
                    panier = {};
                    panier[id] = 1;
                    localStorage.setItem("produit", JSON.stringify(panier));
                    console.log(panier); 
                    popupConfirmation();               
                }                                 
            })         
                //----------- debut du choix-----------
                
                let colorSelect = document.getElementById("color-select");
                description.appendChild(colorSelect);           
                
                let optionColors = produits.colors;                
                
                for (let j = 0; j < optionColors.length; j++){
                    let option = document.createElement("option");
                    option.value = optionColors[j];
                    option.text = optionColors[j];
                    colorSelect.appendChild(option);

                // console.log(optionColors[j]);
                }  
                affichage.appendChild(card);                
            
                })        
        .catch(function(error)  {
            alert("Nos nounours ne sont pas encore prets. Revenez plus tard.");        
        })

     