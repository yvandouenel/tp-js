/**
 * fonction anonyme immédiate ou
 * Immediately invoked function expression
 * ou IIFES
 * Permet d'isoler le code et donc les
 * variables
 */

(function(){
  // code ici
  console.log("Hello dans l'IIFES");
  var i = 3;
})();

/**
 * fonction anonyme qui est
 * affectée à une variable
 */

var hello = function() {
  console.log("Hello dans la fonction affectée");
  return "Myriam";
}
hello();
console.log(hello);
console.log(typeof(hello));

