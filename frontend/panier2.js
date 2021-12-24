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
            
    let ligneProduit = create_tr(`${produits._id}`);
    corpsTableau.appendChild(ligneProduit);            

    let nom = create_td("nom");
    nom.innerHTML = `${produits.name}`;
    ligneProduit.appendChild(nom);

    let quantiteProduit = create_td("quantite");
    quantiteProduit.innerHTML = `${panier[produits._id]}`;
    ligneProduit.appendChild(quantiteProduit);

    let pu = create_td("pu");
    pu.innerHTML = `${produits.price / 100}€`;
    ligneProduit.appendChild(pu);

    let pt = create_td("pt"); 
    ligneProduit.appendChild(pt);

    let ajoutSuppr = create_td("ajoutSuppr");
    ligneProduit.appendChild(ajoutSuppr); 
            
    let ajout = create_button("btn btn-light");
    ajout.innerHTML = "+1"; 
    ajout.addEventListener('click', ajouter);           
    ajoutSuppr.appendChild(ajout); 
            
    let suppr = create_button("btn btn-light");
    suppr.innerHTML = "- 1";
    suppr.addEventListener('click', supprimer)
    ajoutSuppr.appendChild(suppr); 
            
    calculate();            
}
var panier = JSON.parse(localStorage.getItem("produit"));
if(panier === null){
    var affichage = document.querySelector("#affichagePanier");
    affichage.innerHTML = "votre panier est vide"
} else{
    var affichage = document.querySelector("#affichagePanier");       
// createTable()
    let container = create_div("row p-5");

    let tableau = create_tableau("table table-dark table-striped");
    container.appendChild(tableau);
    // console.log(tableau);

    let enTeteTableau = create_tHead();
    tableau.appendChild(enTeteTableau);
    
    let intitule = create_tr();
    enTeteTableau.appendChild(intitule);

    let nomDuNounours = create_th("col");
    nomDuNounours.innerHTML = "Nom du Nounours";
    intitule.appendChild(nomDuNounours);

    let quantite = create_th("col");
    quantite.innerHTML = "Quantité";
    intitule.appendChild(quantite);

    let prixUnitaire = create_th("col");
    prixUnitaire.innerHTML = "Prix Unitaire";
    intitule.appendChild(prixUnitaire);

    let sousTotal = create_th("col");
    sousTotal.innerHTML = "Sous Total";
    intitule.appendChild(sousTotal);

    let ajouterSupprimer = create_th("col");
    ajouterSupprimer.innerHTML = "Ajouter/Supprimer";
    intitule.appendChild(ajouterSupprimer);

    var corpsTableau = create_tbody();
    tableau.appendChild(corpsTableau);        
    
    for (var key in panier) {        
        recuperationInfos(key);        
    }        
    //---------pied du tableau panier
    // createPiedTableau()
    let piedTableau = create_tfoot();
    tableau.appendChild(piedTableau);

    let ligneTotal = create_tr();
    piedTableau.appendChild(ligneTotal);        

    let caseVide1 = create_th();
    ligneTotal.appendChild(caseVide1);

    let caseVide2 = create_th();
    ligneTotal.appendChild(caseVide2);

    let prixTotal = create_th();
    prixTotal.innerHTML = "Prix Total à payer",
    ligneTotal.appendChild(prixTotal);

    let resultatPrix = create_th();
    resultatPrix.setAttribute("id", "total");
    ligneTotal.appendChild(resultatPrix);

    affichage.appendChild(tableau);   
}
// --------formulaire et bouton commander
var affichage = document.querySelector("#formulaire");
 // formulaire client
createCustomerForm()   
// input nom
createInputName() 
// input prenom
createInputFistname() 
// input adresse
createInputAdress()
// input code postal
createInputZipcode()
// input ville
createInputCity() 
// input email
createInputMail() 
// bouton
createOrderButton()   
// fonction d'envoi à l'API
envoyerDonnees()
