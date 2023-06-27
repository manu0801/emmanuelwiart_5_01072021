let urlSearchParams = new URLSearchParams(document.location.search);
var id = urlSearchParams.get("id");

fetch(`http://localhost:3000/api/teddies/${id}`)
.then( function(res) {
    return res.json()            
})         
.then( function(data){ 
    let products = data;

    let display = document.querySelector('#ficheProduit');

    let card = create_div("col-12 col-lg-5");
    
    let container = create_div("row p5");                
    container.appendChild(card);        
        
    let image = create_div("card p-3 border-light shadow");                
    card.appendChild(image);

    let containerImg = create_div("col-12");                
    image.appendChild(containerImg);

    let img = create_img("imgProduit");
    img.src = `${products.imageUrl}`;
    img.alt = "teddies";
    containerImg.appendChild(img);

    let description = create_div("card-body");                
    image.appendChild(description);

    let cardTitle = create_h2("card-title");
    cardTitle.innerHTML = `${products.name}`;
    description.appendChild(cardTitle);

    let cardContent = create_p("card-text")
    cardContent.innerHTML = `${products.description}`;
    description.appendChild(cardContent);

    let cardPrice = create_h3("price");                
    cardPrice.innerHTML = `${products.price / 100}€`;                                
    description.appendChild(cardPrice); 

    let link = create_input("btn btn-primary");                
    link.type = "submit";
    link.value = "Ajoutez au panier";
    description.appendChild(link);                        

    link.addEventListener("click", function(){

        let basket = JSON.parse(localStorage.getItem("produit"));
                
        // ------------pop up confirmation-----------
        const popupConfirmation = () =>{
            if(window.confirm(`${products.name} au prix de ${products.price / 100} € a bien été ajouté au panier.
            Consultez le panier OK ou continuez vos achats ANNULER`)){
                window.location.href = "panier.html";
            }else{
                window.location.href = "index.html";
            }
        }
        if(basket){                    
            if(basket[id]){
                basket[id]++;  
            }
            else{
                basket[id] = 1;
            }
            // panier.push(optionProduit);
            localStorage.setItem("produit", JSON.stringify(basket));
            popupConfirmation();
        }
        else{
            basket = {};
            basket[id] = 1;
            localStorage.setItem("produit", JSON.stringify(basket));
            popupConfirmation();               
        }                                 
    })         
    //----------- color choice---------                
    let colorSelect = document.getElementById("color-select");
    description.appendChild(colorSelect);               
    let optionColors = products.colors;               
    for (let j = 0; j < optionColors.length; j++){
        let option = document.createElement("option");
        option.value = optionColors[j];
        option.text = optionColors[j];
        colorSelect.appendChild(option);
    }  
    display.appendChild(card);            
})        
.catch(function(error)  {
    alert("Nos nounours ne sont pas encore prets. Revenez plus tard.");        
})     