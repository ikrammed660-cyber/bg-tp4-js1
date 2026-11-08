//Declaration d'un objet (Les objets,slide 40)
const produit = {
  nom: "Stylo",
  prix: 2.5,
  quantite: 40
};
//operations arithmetiques (Les operateurs,slide 42)
//Acces aux proprietes d'un objet (Les objets,slide40)
const valeurStock = produit.prix * produit.quantite;
//Affichage avec template literals (Console.Log(),slide 34)
console.log("=== 1. Produit unique ===");
console.log(`Produit : ${produit.nom}`);
//affichage dans la console (Console.Log(), slide 34)
console.log(`Valeur totale du stock : ${valeurStock} €`);

//Declaration d'un tableau d'objets(Tableau d'objets,slide 41)
const catalogue = [
  { nom: "Stylo", prix: 2.5, quantite: 40 },
  { nom: "Cahier", prix: 3.8, quantite: 25 },
  { nom: "Sac à dos", prix: 35, quantite: 10 },
  { nom: "Règle", prix: 1.2, quantite: 60 },
  { nom: "Calculatrice", prix: 18, quantite: 15 }
];
//Methode reduce sur tableau (Methodes utiles,slide 39)
//Fonction flechee (Fonction flechee,slide 47)
//division arithmetique (les operateurs,slide 42)
const prixMoyen = catalogue.reduce((somme, p) => somme + p.prix, 0) / catalogue.length;
//Affichage dans la console (Console.Log(), slide 34)
console.log("\n=== 2. Prix moyen et produits supérieurs ===");
Methode toFixed sur nombre (Console.Log(), slide 34)
console.log(`Prix moyen du catalogue : ${prixMoyen.toFixed(2)} €`);
//Methode filter sur tableau (methodes utiles,slide 39)
//Fonction flechee(fonction flechee,slide 47)

const produitsChers = catalogue.filter(p => p.prix > prixMoyen);
//Methode forEach sur tableau(Les boucles,slide 45)
produitsChers.forEach(p =>
  console.log(`- ${p.nom} (${p.prix} €)`)
);


console.log("\n=== 3. Totaux via reduce ===");
//Methode reduce pour calculer un total (Methodes utiles,slide 39)
//Fonction flechee (Fonction slechee,slide 47)

const totalArticles = catalogue.reduce((total, p) => total + p.quantite, 0);

//Methode reduce avec calcul arithmetique (Methodes utiles,slide 39)

const valeurGlobale = catalogue.reduce((total, p) => total + p.prix * p.quantite, 0);
//Affichage dans la console (Console.Log(), slide 34)

console.log(`Nombre total d'articles : ${totalArticles}`);
//Affichage avec toFixed (Console.Log,slide 34)
console.log(`Valeur globale du stock : ${valeurGlobale.toFixed(2)} €`);

//Declaration d'une fonction avec parametre et retour(Les fonctions,slide 46)
function calculerValeurStock(produit) {
  //Operation arithmetique (Les Operateurs,slide 42)
  return produit.prix * produit.quantite;
}
//Affichage dans la console (Console.Log(), slide 34)

console.log("\n=== 4. Vérification sur plusieurs produits ===");
//Methode forEach sur tableau(Les boucles,slide 45)
//Fonction flechee (Fonction slechee,slide 47)
catalogue.forEach(p => {
  //Appel de fonction (Les fonctions,slide 46)
  console.log(`- ${p.nom} : ${calculerValeurStock(p).toFixed(2)} €`);
});

//Fonction avec parametre callback(Fonctions de rappel(Callbacks),slide48)
function traiterCatalogue(catalogue, callback) {
  //Methode forEach(Les boucles,slide 45)
  //Appel du callback(Fonctions des rappels (callbacks),slide 48)
  catalogue.forEach(produit => callback(produit));
}
//Affichage dans la console (Console.Log(), slide 34)


console.log("\n=== 5a. Affichage des noms (callback) ===");
//Appel de fonction avec callback annonyme(Fonction anonyme,Slide 47)
traiterCatalogue(catalogue, p => console.log(`- ${p.nom}`));
//Affichage dans la console (Console.Log(), slide 34)

console.log("\n=== 5b. Affichage des prix (callback) ===");
//Appel de fonction avec callback annonyme(Fonction anonyme,Slide 47)
traiterCatalogue(catalogue, p => console.log(`- ${p.prix} €`));

//Affichage dans la console (Console.Log(), slide 34)

console.log("\n=== 5c. Affichage complet (callback) ===");
//Appel de fonction avec callback annonyme et template literals(Fonction anonyme,Slide 47)

traiterCatalogue(catalogue, p =>
  console.log(`${p.nom} | prix : ${p.prix} € | qté : ${p.quantite}`)
);