//console.log(document.documentURI);
let prod = document.getElementById("pro");
//prod = document.querySelector("div");
//console.log("prod="+prod);
prod.innerHTML = `
<h1 id='h1pro'> ${produits[nb].type}</h1>
<h2 id='h2pro'>Prix ${produits[nb].prixmin} - ${produits[nb].prixmax} €</h2>
<form id='taillepro'></form>
<ul id='despro'></ul>
<img src="../produits/${produits[nb].image1}" alt="" id='im1pro' onMouseOver='grandimage(this.src)'/>
<img src="../produits/${produits[nb].image2}" alt="" id='im2pro' onMouseOver='grandimage(this.src)'/>
<img src="../produits/${produits[nb].image3}" alt="" id='im3pro' onMouseOver='grandimage(this.src)'/>
<img src="../produits/${produits[nb].image4}" alt="" id='im4pro' onMouseOver='grandimage(this.src)'/>
<img src="../produits/${produits[nb].image1}" alt="Grande_image" id="im5pro" />
`;

radtaille(this.produits[nb].taille); //pour faire des radios boutons sur chaque taille
listedescrip(this.produits[nb].description); //pour lister les descriptifs


function grandimage(x)
{
    let photos = document.getElementById("im5pro");
    photos.setAttribute("src", x);
}
;

function radtaille(z) {
    let prod = document.getElementById('taillepro');
    prod.innerHTML += `tailles : `;
    for (let i in z) {
        let  v = z[i];
        prod.innerHTML += `<label class="radio-inline" for="taille${v}"><input type="radio" id="taille${v}" name="taille" value=${v}/>
      ${v}</label>`;
    }
}
;

function listedescrip(y)
{
    let prod = document.getElementById('despro');
    prod.innerHTML += `Description : `;
    for (let i in y) {
        prod.innerHTML += `<li>${y[i]}</li>`;
    }
}
;
