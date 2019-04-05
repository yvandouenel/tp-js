// Création d'une "class" Personne ES5
class Personne { // Majuscule selon les standards
  constructor(nom,prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }
  // Méthodes
  sePresenter() {
    console.log("Bonjour, je m'appelle " +
    this.prenom + " " + this.nom);
  }
}
var franck = new Personne("Chazal","Franck");
franck.sePresenter();

// Création d'une "class" Enseignant qui hérite
// de la class Personne
class Enseignant extends Personne {
  constructor(nom,prenom,diplome) {
    super(nom,prenom);
    this.diplome = diplome;
  }
  // Méthodes
  enseigner() {
    console.log("J'enseigne !");
  }
}
var jerome = new Enseignant("Chagneaud","Jérôme","Agrégation");
jerome.sePresenter();
jerome.enseigner();

// Class qui spécialise la class Enseignant
class EnseignantProgrammation extends Enseignant {
  // Méthodes
  enseignerJS() {
    console.log("J'enseigne le JS !");
  }
}
var yvan = new EnseignantProgrammation("Douënel","Yvan","BAC");
yvan.sePresenter();
yvan.enseignerJS();