// fonction des calcul des prix
function calculate(){
    let lines = get_lines();
    var total = 0;
    for (tr of lines){
        // sous-total
        let qtt = get_line_qtt(tr);
        let price = get_line_price(tr);
        let sous_total = qtt * price;
        total += sous_total;
        print_sub_total(tr, sous_total);
    }
    // total
    print_total(total);
}
function get_lines(){
    return document.querySelectorAll("tbody tr");        
}
function get_line_qtt(tr){
    return tr.querySelector("td.quantite").innerHTML;    
}
function get_line_price(tr){
    return tr.querySelector("td.pu").innerHTML.slice(0, -1);
}
function print_sub_total(tr, sous_total){
    tr.querySelector("td.pt").innerHTML = sous_total + "€";    
}
function print_total(total){
    document.querySelector("tfoot #total").innerHTML = total + "€";
}
//------fonction des boutons ajouter supprimer
function ajouter(){
    // se declenche lors du click => ok
    // prends l'id du produit selectionné
    let id = this.closest("tr").className;       
    // recuperer la quantite de l'id du produits dans le ls
    let p = JSON.parse(localStorage.getItem("produit"));    
    // modifier la quantite de cet id
    p[id]++;    
    // mettre a jour le LS
    localStorage.setItem("produit", JSON.stringify(p));
    // mettre a jour la quantité dans la ligne du tableau
    let quantite = this.closest("tr").querySelector(".quantite");
    quantite.innerHTML = p[id];
    // recalculer
    calculate();    
}
function supprimer() {
    // se declenche lors du click => ok
    // prends l'id du produit selectionné
    let id = this.closest("tr").className; 
    // recuperer la quantite de l'id du produits dans le ls
    let p = JSON.parse(localStorage.getItem("produit"));     
    // modifier la quantite de cet id
    p[id]--;    
    // verifier la quantité du LS et si qte a 0 supprimer l'id
    if(p[id]==0){
        // enlever element id du p
        delete p[id];
        localStorage.setItem("produit", JSON.stringify(p));        
        // enlever l'affichage de la ligne du tableau
        this.closest("tr").remove();
        calculate();
    }
    else{
       // mettre a jour le LS
    localStorage.setItem("produit", JSON.stringify(p));
    // mettre a jour la quantité dans la ligne du tableau
    let quantite = this.closest("tr").querySelector(".quantite");
    quantite.innerHTML = p[id];
    // recalculer
    calculate();
    }
}
// -----fonctions de création du tableau panier
function createTable(){
    let container = create_div("row p-5");

    let tableau = create_tableau("table table-dark table-striped");
    container.appendChild(tableau);

    let enTeteTableau = document.createElement("tHead");
    tableau.appendChild(enTeteTableau);
    
    let intitule = document.createElement("tr")
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
}
function createPiedTableau(){
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
// ------fonctions de création du formulaire
function create_tbody(className){
    let tbody = document.createElement("tbody");
    tbody.className = className;
    return tbody;
}
function create_tfoot(className){
    let tfoot = document.createElement("tfoot");
    tfoot.className = className;
    return tfoot;
}
function create_tHead(className){
    let tHead = document.createElement("tHead");
    tHead.className = className;
    return tHead;
}
function create_tr(className){
    let tr = document.createElement("tr");
    tr.className = className;
    return tr;
}
function create_td(className) {
    let td = document.createElement("td");
    td.className = className;
    return td;
}
function create_button(className) {
    let button = document.createElement("button");
    button.className = className;
    return button;
}
function create_img(className) {
    let img = document.createElement("img");
    img.className = className;
    return img;
}
function create_div(className) {
    let div = document.createElement("div");
    div.className = className;
    return div;
}
function create_a(className){
    let a = document.createElement("a");
    a.className = className;
    return a;
}
function create_h2(className){
    let h2 = document.createElement("h2");
    h2.className = className;
    return h2;
}
function create_h3(className){
    let h3 = document.createElement("h3");
    h3.className = className;
    return h3;
}
function create_h4(className){
    let h4 = document.createElement("h4");
    h4.className = className;
    return h4;
}
function create_hr(className){
    let hr = document.createElement("hr");
    hr.className = className;
    return hr;
}
function create_p(className){
    let p = document.createElement("p");
    p.className = className;
    return p;    
}
function create_input(className) {
    let input = document.createElement("input");
    input.className = className;
    return input;
}
function create_tableau(className) {
    let tableau = document.createElement("table");
    tableau.className = className;
    return tableau;
}
function create_th(scope) {
    let th = document.createElement("th");
    th.scope = scope;
    return th;
}
function create_label(setAttribute){
    let label = document.createElement("label");
    label.setAttribute = setAttribute;
    return label
}
function create_form(className){
    let form = document.createElement("form");
    return form;
}
function createCustomerForm(){
    let formulaireGlobal = create_div("container");

    let containerFormulaire = create_div("row p-5");
    formulaireGlobal.appendChild(containerFormulaire);
    
    let titre = create_div("col");
    containerFormulaire.appendChild(titre);

    let hr = create_hr();
    titre.appendChild(hr)

    let h = create_h3();
    h.innerText = "Vos coordonnées";
    titre.appendChild(h);

    let formulaire = create_form();
    containerFormulaire.appendChild(formulaire);

    affichage.appendChild(formulaireGlobal); 
}
function createInputName(){
    let blockName = create_div("row");
    formulaire.appendChild(blockName);

    let colName = create_div("col");
    blockName.appendChild(colName);

    let inputContainerName = create_div("form-group");
    colName.appendChild(inputContainerName);

    let labelName = create_label("for", "name");    
    inputContainerName.appendChild(labelName);

    let inputName = create_input("form-control");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("placeholder", "Nom");
    inputName.setAttribute("id", "name");
    inputName.setAttribute("required", "");
    inputContainerName.appendChild(inputName);
}
function createInputFistname(){
    let blockPrenom = create_div("row");
    formulaire.appendChild(blockPrenom);

    let colPrenom = create_div("col");
    blockPrenom.appendChild(colPrenom);

    let inputContainerPrenom = create_div("form-group");
    colPrenom.appendChild(inputContainerPrenom);

    let labelPrenom = create_label("for", "fistname");
    inputContainerPrenom.appendChild(labelPrenom);

    let inputFirstName = create_input("form-control");
    inputFirstName.setAttribute("type", "text");
    inputFirstName.setAttribute("placeholder", "Prénom");
    inputFirstName.setAttribute("id", "firstname");
    inputFirstName.setAttribute("required", "");
    inputContainerPrenom.appendChild(inputFirstName);
}
function createInputAdress(){
    let blockAdresse = create_div("row");
    formulaire.appendChild(blockAdresse);

    let colAdresse = create_div("col");
    blockAdresse.appendChild(colAdresse);

    let inputContainerAdresse = create_div("form-group");
    colAdresse.appendChild(inputContainerAdresse);

    let labelAdresse = create_label("for", "adress");
    inputContainerAdresse.appendChild(labelAdresse);

    let inputAdresse = create_input("form-control") ;
    inputAdresse.setAttribute("type", "text");
    inputAdresse.setAttribute("placeholder", "Adresse");
    inputAdresse.setAttribute("id", "adress");
    inputAdresse.setAttribute("required", "");
    inputContainerAdresse.appendChild(inputAdresse);
}
function createInputZipcode(){
    let blockZipcode = create_div("row");
    formulaire.appendChild(blockZipcode);

    let colZipcode = create_div("col");
    blockZipcode.appendChild(colZipcode);

    let inputContainerZipcode = create_div("form-group");
    colZipcode.appendChild(inputContainerZipcode);

    let labelZipcode = create_label("for", "zipcode");
    inputContainerZipcode.appendChild(labelZipcode);

    let inputZipcode = create_input("form-control");
    inputZipcode.setAttribute("type", "text");
    inputZipcode.setAttribute("placeholder", "Code Postal");
    inputZipcode.setAttribute("id", "zipcode");
    inputZipcode.setAttribute("required", "");
    inputContainerZipcode.appendChild(inputZipcode);
}
function createInputCity(){
    let blockVille = create_div("row");
    formulaire.appendChild(blockVille);

    let colVille = create_div("col");
    blockVille.appendChild(colVille);

    let inputContainerVille = create_div("form-group");
    colVille.appendChild(inputContainerVille);

    let labelVille = create_label("for", "city");
    inputContainerVille.appendChild(labelVille);

    let inputVille = create_input("form-control");
    inputVille.setAttribute("type", "text");
    inputVille.setAttribute("placeholder", "Ville");
    inputVille.setAttribute("id", "city");
    inputVille.setAttribute("required", "");
    inputContainerVille.appendChild(inputVille);
}
function createInputMail(){
    let blockEmail = create_div("row");
    formulaire.appendChild(blockEmail);

    let colEmail = create_div("col");
    blockEmail.appendChild(colEmail);

    let inputContainerEmail = create_div("form-group");
    colEmail.appendChild(inputContainerEmail);

    let labelEmail = create_label("for", "emailadress");
    inputContainerEmail.appendChild(labelEmail);

    let inputEmail = create_input("form-control");
    inputEmail.setAttribute("type", "text");
    inputEmail.setAttribute("placeholder", "Adresse Mail");
    inputEmail.setAttribute("id", "emailadress");
    inputEmail.setAttribute("required", "");
    inputContainerEmail.appendChild(inputEmail);
}
function createOrderButton(){
    let blockBtn = create_div("row mt-5");
    formulaire.appendChild(blockBtn);

    let colBtn = create_div("col");
    blockBtn.appendChild(colBtn);

    let button = create_button("btn btn-primary");
    button.setAttribute("type", "submit");
    button.setAttribute("id", "btnEnvoyer");
    button.innerText = "Commander";
    blockBtn.appendChild(button);    
}
// ------fonction pour envoyer les données à l'API
function envoyerDonnees(){
// recuperation du bouton envoyer
    const btnEnvoyer = document.querySelector("#btnEnvoyer");    
// se declenche lors du clik sur commander
    btnEnvoyer.addEventListener("click", (e)=>{
    e.preventDefault();
    const valeursFormulaire = {
        lastName : document.querySelector("#name").value,
        firstName : document.querySelector("#firstname").value,
        address : document.querySelector("#adress").value,
        city : document.querySelector("#city").value,
        email : document.querySelector("#emailadress").value,       
    }
    localStorage.setItem("valeursFormulaire", JSON.stringify(valeursFormulaire));
    let produitsEnvoie = [];
    var panier = JSON.parse(localStorage.getItem("produit"));
    for(var key in panier){
        produitsEnvoie.push(key);
    }
    // mettre les produits du LS et l'objet du formulaire dans un objet a envoyer
    const aEnvoyer = {        
        contact: valeursFormulaire,
        products: produitsEnvoie,        
    }
    // ------------envoie--------
    const options = {
        method: "POST",
        body: JSON.stringify(aEnvoyer),
        headers: {
            "content-Type" : "application/json"
        } 
    };
    fetch("http://localhost:3000/api/teddies/order", options)
    .then((response) => response.json())
    .then((data) => {
        localStorage.clear();
        localStorage.setItem("orderId", data.orderId);
        document.location.href = "confirmation.html";
    })
})        
}

