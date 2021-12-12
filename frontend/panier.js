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
    let produits = data; 
    var panier = JSON.parse(localStorage.getItem("produit"));

    // fonction de calcul        

    document.querySelector("tbody");
        
        let ligneProduit = document.createElement("tr");
        ligneProduit.className = `${produits._id}`;
        corpsTableau.appendChild(ligneProduit);
        

        let nom = document.createElement("td");
        nom.className = "nom";
        nom.innerHTML = `${produits.name}`;
        ligneProduit.appendChild(nom);

        let quantiteProduit = document.createElement("td");
        quantiteProduit.className = "quantite";
        
        quantiteProduit.innerHTML = `${panier[produits._id]}`;
        ligneProduit.appendChild(quantiteProduit);

        let pu = document.createElement("td");
        pu.className = "pu";
        pu.innerHTML = `${produits.price / 100}€`;
        ligneProduit.appendChild(pu);

        let pt = document.createElement("td");
        pt.className = "pt"; 
        ligneProduit.appendChild(pt);

        let ajoutSuppr = document.createElement("td");
        ajoutSuppr.className = "ajoutSuppr";
        ligneProduit.appendChild(ajoutSuppr); 
        
        let ajout = document.createElement("button");
        ajout.className ="btn btn-light";
        ajout.innerHTML = "+1"; 
        ajout.addEventListener('click', ajouter);           
        ajoutSuppr.appendChild(ajout); 
        
        let suppr = document.createElement("button");
        suppr.className ="btn btn-light";
        suppr.innerHTML = "- 1";
        suppr.addEventListener('click', supprimer)
        ajoutSuppr.appendChild(suppr); 
        
        calculate();
        
}
var panier = JSON.parse(localStorage.getItem("produit"));
if(panier === null){
// console.log("je suis vide");
} else{

var affichage = document.querySelector("#affichagePanier");
        // console.log(affichage);

let container = document.createElement("div");
container.className = "row p-5";

let tableau = document.createElement("table") ;
tableau.className = "table table-dark table-striped";
container.appendChild(tableau);
// console.log(tableau);

let enTeteTableau = document.createElement("tHead");
tableau.appendChild(enTeteTableau);
// console.log(enTeteTableau);

let intitule = document.createElement("tr")
enTeteTableau.appendChild(intitule);

let nomDuNounours = document.createElement("th");
nomDuNounours.scope = "col";
nomDuNounours.innerHTML = "Nom du Nounours";
intitule.appendChild(nomDuNounours);

let quantite = document.createElement("th");
quantite.scope = "col";
quantite.innerHTML = "Quantité";
intitule.appendChild(quantite);

let prixUnitaire = document.createElement("th");
prixUnitaire.scope = "col";
prixUnitaire.innerHTML = "Prix Unitaire";
intitule.appendChild(prixUnitaire);

let sousTotal = document.createElement("th");
sousTotal.scope = "col";
sousTotal.innerHTML = "Sous Total";
intitule.appendChild(sousTotal);

let ajouterSupprimer = document.createElement("th");
ajouterSupprimer.scope = "col";
ajouterSupprimer.innerHTML = "Ajouter/Supprimer";
intitule.appendChild(ajouterSupprimer);

var corpsTableau = document.createElement("tbody");
tableau.appendChild(corpsTableau);        

for (var key in panier) {        
    recuperationInfos(key);        
}        
//---------pied du tableau panier
let piedTableau = document.createElement("tfoot");
tableau.appendChild(piedTableau);

let ligneTotal = document.createElement("tr");
piedTableau.appendChild(ligneTotal);        

let caseVide1 = document.createElement("th");
ligneTotal.appendChild(caseVide1);

let caseVide2 = document.createElement("th");
ligneTotal.appendChild(caseVide2);

let prixTotal = document.createElement("th");
prixTotal.innerHTML = "Prix Total à payer",
ligneTotal.appendChild(prixTotal);

let resultatPrix = document.createElement("th");
resultatPrix.setAttribute("id", "total");
ligneTotal.appendChild(resultatPrix);

affichage.appendChild(tableau);   
} 

// --------formulaire et bouton commander

var affichage = document.querySelector("#formulaire");

// formulaire client
let formulaireGlobal = document.createElement("div");
formulaireGlobal.className = "container";
// console.log(formulaireGlobal);

let containerFormulaire = document.createElement("div");
containerFormulaire.className = "row p-5";
formulaireGlobal.appendChild(containerFormulaire);

let titre = document.createElement("div");
titre.className = "col";
containerFormulaire.appendChild(titre);

let hr = document.createElement("hr");
titre.appendChild(hr)

let h = document.createElement("h3");
h.innerText = "Vos coordonnées";
titre.appendChild(h);

let formulaire = document.createElement("form");
containerFormulaire.appendChild(formulaire);


// input nom
let blockName = document.createElement("div");
blockName.className = "row";
formulaire.appendChild(blockName);

let colName = document.createElement("div");
colName.className = "col";
blockName.appendChild(colName);

let inputContainerName = document.createElement("div");
inputContainerName.className = "form-group";
colName.appendChild(inputContainerName);

let labelName = document.createElement("label");
labelName.setAttribute("for", "name");
inputContainerName.appendChild(labelName);

let inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("placeholder", "Nom");
inputName.setAttribute("id", "name");
inputName.className = "form-control";
inputName.setAttribute("required", "");
inputContainerName.appendChild(inputName);


// input prenom
let blockPrenom = document.createElement("div");
blockPrenom.className = "row";
formulaire.appendChild(blockPrenom);

let colPrenom = document.createElement("div");
colPrenom.className = "col";
blockPrenom.appendChild(colPrenom);

let inputContainerPrenom = document.createElement("div");
inputContainerPrenom.className = "form-group";
colPrenom.appendChild(inputContainerPrenom);

let labelPrenom = document.createElement("label");
labelPrenom.setAttribute("for", "fistname");
inputContainerPrenom.appendChild(labelPrenom);

let inputFirstName = document.createElement("input");
inputFirstName.setAttribute("type", "text");
inputFirstName.setAttribute("placeholder", "Prénom");
inputFirstName.setAttribute("id", "firstname");
inputFirstName.className = "form-control";
inputFirstName.setAttribute("required", "");
inputContainerPrenom.appendChild(inputFirstName);


// input adresse
let blockAdresse = document.createElement("div");
blockAdresse.className = "row";
formulaire.appendChild(blockAdresse);

let colAdresse = document.createElement("div");
colAdresse.className = "col";
blockAdresse.appendChild(colAdresse);

let inputContainerAdresse = document.createElement("div");
inputContainerAdresse.className = "form-group";
colAdresse.appendChild(inputContainerAdresse);

let labelAdresse = document.createElement("label");
labelAdresse.setAttribute("for", "adress");
inputContainerAdresse.appendChild(labelAdresse);

let inputAdresse = document.createElement("input");
inputAdresse.setAttribute("type", "text");
inputAdresse.setAttribute("placeholder", "Adresse");
inputAdresse.setAttribute("id", "adress");
inputAdresse.className = "form-control";
inputAdresse.setAttribute("required", "");
inputContainerAdresse.appendChild(inputAdresse);


// input code postal
let blockZipcode = document.createElement("div");
blockZipcode.className = "row";
formulaire.appendChild(blockZipcode);

let colZipcode = document.createElement("div");
colZipcode.className = "col";
blockZipcode.appendChild(colZipcode);

let inputContainerZipcode = document.createElement("div");
inputContainerZipcode.className = "form-group";
colZipcode.appendChild(inputContainerZipcode);

let labelZipcode = document.createElement("label");
labelZipcode.setAttribute("for", "zipcode");
inputContainerZipcode.appendChild(labelZipcode);

let inputZipcode = document.createElement("input");
inputZipcode.setAttribute("type", "text");
inputZipcode.setAttribute("placeholder", "Code Postal");
inputZipcode.setAttribute("id", "zipcode");
inputZipcode.className = "form-control";
inputZipcode.setAttribute("required", "");
inputContainerZipcode.appendChild(inputZipcode);


// input ville
let blockVille = document.createElement("div");
blockVille.className = "row";
formulaire.appendChild(blockVille);

let colVille = document.createElement("div");
colVille.className = "col";
blockVille.appendChild(colVille);

let inputContainerVille = document.createElement("div");
inputContainerVille.className = "form-group";
colVille.appendChild(inputContainerVille);

let labelVille = document.createElement("label");
labelVille.setAttribute("for", "city");
inputContainerVille.appendChild(labelVille);

let inputVille = document.createElement("input");
inputVille.setAttribute("type", "text");
inputVille.setAttribute("placeholder", "Ville");
inputVille.setAttribute("id", "city");
inputVille.className = "form-control";
inputVille.setAttribute("required", "");
inputContainerVille.appendChild(inputVille);


// input email
let blockEmail = document.createElement("div");
blockEmail.className = "row";
formulaire.appendChild(blockEmail);

let colEmail = document.createElement("div");
colEmail.className = "col";
blockEmail.appendChild(colEmail);

let inputContainerEmail = document.createElement("div");
inputContainerEmail.className = "form-group";
colEmail.appendChild(inputContainerEmail);

let labelEmail = document.createElement("label");
labelEmail.setAttribute("for", "emailadress");
inputContainerEmail.appendChild(labelEmail);

let inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "text");
inputEmail.setAttribute("placeholder", "Adresse Mail");
inputEmail.setAttribute("id", "emailadress");
inputEmail.className = "form-control";
inputEmail.setAttribute("required", "");
inputContainerEmail.appendChild(inputEmail);


// bouton
let blockBtn = document.createElement("div");
blockBtn.className = "row mt-5";
formulaire.appendChild(blockBtn);

let colBtn = document.createElement("div");
colBtn.className = "col";
blockBtn.appendChild(colBtn);

let button = document.createElement("button");
button.setAttribute("type", "submit");
button.className = "btn btn-primary";
button.setAttribute("id", "btnEnvoyer");
button.innerText = "Commander";
blockBtn.appendChild(button);

affichage.appendChild(formulaireGlobal);

// recuperation du bouton envoyer
const btnEnvoyer = document.querySelector("#btnEnvoyer");

// se declenche lors du clik sur commander
btnEnvoyer.addEventListener("click", (e)=>{
e.preventDefault();

const valeursFormulaire = {
    nom : document.querySelector("#name").value,
    prenom : document.querySelector("#firstname").value,
    adresse : document.querySelector("#adress").value,
    // codePostal : document.querySelector("#zipcode").value,
    ville : document.querySelector("#city").value,
    email : document.querySelector("#emailadress").value,       
}
localStorage.setItem("valeursFormulaire", JSON.stringify(valeursFormulaire));

produitsEnvoie = []
    var panier = JSON.parse(localStorage.getItem("produit"));
    for(var key in panier){
        produitsEnvoie.append(key)
        // console.log(products_to_send)
    }
    


// mettre les produits du LS et l'objet du formulaire dans un objet a envoyer
const aEnvoyer = {        
    contact: valeursFormulaire,
    products: produitsEnvoie,
    
}
// console.log(aEnvoyer)
// ------------envoie--------
const envoieDonnees = fetch("http://localhost:3000/api/teddies", {
    method: "POST",
    body: JSON.stringify(aEnvoyer),
    headers: {
        "content-Type" : "application/json"
    },
});

} )        