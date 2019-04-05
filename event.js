//Création d'un élément div du DOM
let div1 = document.createElement("div");

// Création d'un élément texte du DOM
let text1 = document.createTextNode("Texte 1");

// Ajout de text1 à div1
div1.appendChild(text1);

// Ajout de div1 à body
document.body.appendChild(div1);

// gestion de l'événement click sur div1
div1.onclick = function(){
  console.log("click sur le div 1");
};

// Récupération d'un élément du DOM
let h1 = window.document.getElementById("h1");

// gestion de l'événement click sur h1
h1.onclick = function() {
  console.log("click sur le h1");
};
