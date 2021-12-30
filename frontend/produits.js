let urlSearchParams = new URLSearchParams(document.location.search);
var id = urlSearchParams.get("id");

fetch(`http://localhost:3000/api/teddies/${id}`)
.then( function(res) {
    return res.json()            
})         
.then( function(data){ 
    let produits = data;

    let affichage = document.querySelector('#ficheProduit');

    let card = create_div("col-12 col-lg-5");
    
    let container = create_div("row p5");                
    container.appendChild(card);        
        
    let image = create_div("card p-3 border-light shadow");                
    card.appendChild(image);

    let containerImg = create_div("col-12");                
    image.appendChild(containerImg);

    let img = create_img("imgProduit");
    img.src = `${produits.imageUrl}`;
    img.alt = "teddies";
    containerImg.appendChild(img);

    let description = create_div("card-body");                
    image.appendChild(description);

    let cardTitle = create_h2("card-title");
    cardTitle.innerHTML = `${produits.name}`;
    description.appendChild(cardTitle);

    let cardContent = create_p("card-text")
    cardContent.innerHTML = `${produits.description}`;
    description.appendChild(cardContent);

    let cardPrice = create_h3("price");                
    cardPrice.innerHTML = `${produits.price / 100}€`;                                
    description.appendChild(cardPrice); 

    let link = create_input("btn btn-primary");                
    link.type = "submit";
    link.value = "Ajoutez au panier";
    description.appendChild(link);                        

    link.addEventListener("click", function(){

        let panier = JSON.parse(localStorage.getItem("produit"));
                
        // ------------pop up confirmation-----------
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
            popupConfirmation();
        }
        else{
            panier = {};
            panier[id] = 1;
            localStorage.setItem("produit", JSON.stringify(panier));
            popupConfirmation();               
        }                                 
    })         
    //----------- color choice---------                
    let colorSelect = document.getElementById("color-select");
    description.appendChild(colorSelect);               
    let optionColors = produits.colors;               
    for (let j = 0; j < optionColors.length; j++){
        let option = document.createElement("option");
        option.value = optionColors[j];
        option.text = optionColors[j];
        colorSelect.appendChild(option);
    }  
    affichage.appendChild(card);            
})        
.catch(function(error)  {
    alert("Nos nounours ne sont pas encore prets. Revenez plus tard.");        
})     