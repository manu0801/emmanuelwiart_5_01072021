//-------fonction-------
function recuperationInfos(key){
    fetch(`http://localhost:3000/api/teddies/${key}`)
    .then( function(res) {        
        return res.json()           
    })         
    .then(async function(data){            
        await insertionInfos(data);
    })
}
async function insertionInfos(data){
    let products = data; 
    var basket = JSON.parse(localStorage.getItem("produit")); 

    // fonction de calcul
    
    let tableBody = document.querySelector("tbody");
            
    let productLine = create_tr(`${products._id}`);
    tableBody.appendChild(productLine);            

    let name = create_td("nom");
    name.innerHTML = `${products.name}`;
    productLine.appendChild(name);

    let productQuantity = create_td("quantite");
    productQuantity.innerHTML = `${basket[products._id]}`;
    productLine.appendChild(productQuantity);

    let pu = create_td("pu");
    pu.innerHTML = `${products.price / 100}€`;
    productLine.appendChild(pu);

    let pt = create_td("pt"); 
    productLine.appendChild(pt);

    let incrementDecrement = create_td("ajoutSuppr");
    productLine.appendChild(incrementDecrement); 
            
    let incremente = create_button("btn btn-light");
    incremente.innerHTML = "+1"; 
    incremente.addEventListener('click', checkOutIncrementProduct);           
    incrementDecrement.appendChild(incremente); 
            
    let decremente = create_button("btn btn-light");
    decremente.innerHTML = "- 1";
    decremente.addEventListener('click', checkOutDecrementProduct)
    incrementDecrement.appendChild(decremente); 
            
    calculate();            
}
var basket = JSON.parse(localStorage.getItem("produit"));
if(basket === null){
    var display = document.querySelector("#affichagePanier");
    display.className = "text-center h1"
    display.innerHTML = "votre panier est vide"
} else{
    var affichage = document.querySelector("#affichagePanier");

    var table = createBasketTable();    
    
    for (var key in basket) {        
        recuperationInfos(key);        
    }        
    
    createBasketTableStand(table);    
}
// --------form and order button
var display = document.querySelector("#formulaire");
 // customer form

var form = createCustomerForm()   
// input name
createInputName(form) 
// input firstname
createInputFirstname(form) 
// input adress
createInputAdress(form)
// input zip code
createInputZipcode(form)
// input city
createInputCity(form) 
// input email
createInputMail(form) 
// button
createOrderButton(form)   
// send function to API
envoyerDonnees()
