"use strict";

const etudiants = [
    { id: 1000, nom: "JOHN", prenom: "DOE", note: 14, absences: 5},
    { id: 2000, nom: "BOB", prenom: "CARLTON", note: 7, absences: 1},
    { id: 3000, nom: "RAYANE", prenom: "SMITH", note: 13, absences: 3}
];
function B(note) {
    if (note>=10) {
        return true;
    } else {
        return false;
    }
}
function A() {
    for (let i=0; i< etudiants.length; i++) {
        const etudiantActuel = etudiants[i];
        const estAdmis = B(etudiantActuel.note);
        if (estAdmis === true) {
            console.log(etudiantActuel.id + ": ADMIS");
        } else {
            console.log(etudiantActuel.id + ": AJOURNE");
        }
    }
}