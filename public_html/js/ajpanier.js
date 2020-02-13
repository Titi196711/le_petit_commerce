
valeur = "";
p = 0;
Pan=[];


function ajpanier() {
    
    let choix = document.getElementsByName('taille');
    for (var i = 0; i < choix.length; i++) {
        if (choix[i].checked) {
            valeur = choix[i].value;
            p = i;
        }
    }

    let diff = (parseFloat(produits[nb].prixmax) - parseFloat(produits[nb].prixmin)) / 4;

//alert(p+' '+diff);
    panier[0].type = produits[nb].type;
    panier[0].couleur = produits[nb].couleur;
    panier[0].description = produits[nb].description;
    panier[0].taille = valeur;
    switch (p) {
        case 0:
            panier[0].prix = parseFloat(produits[nb].prixmin);
            break;
        case 1:
            panier[0].prix = arronDecimal(parseFloat(produits[nb].prixmin) + diff, 2);
            break;
        case 2:
            panier[0].prix = arronDecimal(parseFloat(produits[nb].prixmin) + diff * 2, 2);
            break;
        case 3:
            panier[0].prix = arronDecimal(parseFloat(produits[nb].prixmin) + diff * 3, 2);
            break;
        case 4:
            panier[0].prix = parseFloat(produits[nb].prixmax);
            break;
    }
    ;
    panier[0].image = produits[nb].image1;
    alert("Votre article a bien été ajouté au panier");
}
;
function ajpanier2() {
    
    let choix = document.getElementsByName('taille');
    for (var i = 0; i < choix.length; i++) {
        if (choix[i].checked) {
            valeur = choix[i].value;
            p = i;
        }
    }

    let diff = (parseFloat(produits[nb].prixmax) - parseFloat(produits[nb].prixmin)) / 4;

//alert(p+' '+diff);
    panier[0].type = produits[nb].type;
    panier[0].couleur = produits[nb].couleur;
    panier[0].description = produits[nb].description;
    panier[0].taille = valeur;
    switch (p) {
        case 0:
            panier[0].prix = parseFloat(produits[nb].prixmin);
            break;
        case 1:
            panier[0].prix = arronDecimal(parseFloat(produits[nb].prixmin) + diff, 2);
            break;
        case 2:
            panier[0].prix = arronDecimal(parseFloat(produits[nb].prixmin) + diff * 2, 2);
            break;
        case 3:
            panier[0].prix = arronDecimal(parseFloat(produits[nb].prixmin) + diff * 3, 2);
            break;
        case 4:
            panier[0].prix = parseFloat(produits[nb].prixmax);
            break;
    }
    ;
    panier[0].image = produits[nb].image1;
    Pan += panier[0].type +"/"+panier[0].couleur+"/"+panier[0].description+"/"+panier[0].taille+"/"+panier[0].prix;
//    alert(Pan);
    tout = tout + nb + ',' + panier[0].taille + ',' + panier[0].prix + ',';
    window.open('../pages/panier.html?p='+tout);
    return(Pan);
}
;
function arronDecimal(nombre, precision) {
    var precision = precision || 2;
    var tmp = Math.pow(10, precision);
    return Math.round(nombre * tmp) / tmp;
}


