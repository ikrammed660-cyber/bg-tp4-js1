"use strict";

// Déclaration d'un tableau d'objet (Tableau d'objets , slide 41 )
const etudiants = [
    { id: 1000, nom: "JOHN", prenom: "DOE", note: 14, absences: 5},
    { id: 2000, nom: "BOB", prenom: "CARLTON", note: 7, absences: 1},
    { id: 3000, nom: "RAYANE", prenom: "SMITH", note: 13, absences: 3}
];

//Fonction avec paramétre et retour (Les fonction , slide 46)
function B(note) {
    //Condition if/else (Les conditions , slide 43)
    if (note>=10) {
        return true;
    } else {
        return false;
    }
}
//Fonction sans paramétre (Les fonction , slide 46)
function A() {
    //Boucle for (Ls Boucles , slide 45)
    for (let i=0; i< etudiants.length; i++) {

       // Accès à un élément du tableau d'objets (Tableau d'objets , slide 41 ) 
        const etudiantActuel = etudiants[i];

        //Appel de fonction (Les fonction , slide 46)
        const estAdmis = B(etudiantActuel.note);

        //Condition if/else (Les conditions , slide 43)
        if (estAdmis === true) {

            // Affichage dans la console (console.log(), slide 34)
            console.log(etudiantActuel.id + ": ADMIS");
            
        } else {
            console.log(etudiantActuel.id + ": AJOURNE");
        }
    }
}