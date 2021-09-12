let panier = JSON.parse(localStorage.getItem("produit"));
// console.log("coucou kevin");
if(panier === null){
    // console.log("je suis vide");
} else{

    var affichage = document.querySelector("#affichagePanier");
            console.log(affichage);

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

    let corpsTableau = document.createElement("tbody");
    tableau.appendChild(corpsTableau)
        // console.log(corpsTableau);

    for (var key in panier) {
        // console.log(key + " -> " + panier[key]);

        fetch(`http://localhost:3000/api/teddies/${key}`)
        .then( function(res) {
            return res.json()            
        })         
        .then( function(data){ 
            let produits = data;
            // console.log(produits);

            let ligneProduit = document.createElement("tr")
            corpsTableau.appendChild(ligneProduit)

            let nom = document.createElement("th");
            nom.className = "nom";
            nom.innerHTML = `${produits.name}`;
            ligneProduit.appendChild(nom);

            let quantiteProduit = document.createElement("th");
            quantiteProduit.className = "quantite";
            quantiteProduit.innerHTML = `${panier[key]}`;
            ligneProduit.appendChild(quantiteProduit);

            let pu = document.createElement("th");
            pu.className = "pu";
            pu.innerHTML = `${produits.price / 100}€`;
            ligneProduit.appendChild(pu);

            let pt = document.createElement("th");
            pt.className = "pt";            
            ligneProduit.appendChild(pt);

            let ajoutSuppr = document.createElement("th");
            ajoutSuppr.className = "ajoutSuppr";
            ligneProduit.appendChild(ajoutSuppr); 
            
            let ajout = document.createElement("button");
            ajout.className ="btn btn-light";
            ajout.innerHTML = "+1";
            ajoutSuppr.appendChild(ajout);
            
            let suppr = document.createElement("button");
            suppr.className ="btn btn-light";
            suppr.innerHTML = "- 1"
            ajoutSuppr.appendChild(suppr);            
            
            affichage.appendChild(tableau);
        })             
        }
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
        ligneTotal.appendChild(resultatPrix);
        }


        
        