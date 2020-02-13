param = {};
window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
            param[key] = value !== undefined ? value : '';
        }
);
nb = parseInt(param.p);
pani = '';
function panierpage(){
    pani = ajpanier2(nb);
}

let decoupe = param.p.split(','); 
//alert(nb+'decoupe : '+decoupe);
for (let i=0; i< panier.length; i++) {
    let pan = document.getElementById("pan");
    pan.innerHTML = `
<h2 id='typepan'> ${produits[nb].type}</h2>
<h2 id='despan'>${produits[nb].description}</h2>
<H2 id='colpan'>${produits[nb].couleur}</h2>    
<h2 id='taillepan'>${decoupe[1]}</h2>
<h2><img src="../produits/${produits[nb].image1}" alt="image 1 du produit" id='impan' /></h2>    
<h2 id='prixpan'>Prix ${decoupe[2]} €</h2>
`;
}
;


