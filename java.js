// DE QUOI J'AI BESOIN POUR CE JEU




// Générer les mots aléatoire
// Donner à l'utilisateur la capacité de deviner(jouer)
// Faire deviner l'utilisateur et s'il a faux, on lui fait recommencer le jeu 
// S'il gagne on le filicite(stop)



   //------------------------------------------------ 


 window.onload=function(){
    alert("Bienvenue dans ce jeu Mot Mystère \n\n Deviner le mot \n\n Pour se faire, vous n'aurez droit qu'à 8 essais");  
 }


 
 // 1- Un tableau de mots
 var mots = ["PLUIE", "NEIGE", "PLAGE", "BRUIT", "ARBRE"];

    
 // 2- Un générateur aléatoire de mots de la longueur du tableau
 const randomMots = mots[Math.floor(Math.random() * mots.length)];
 console.log(randomMots);


 // 3- Une fonction qui affiche donc un mot choisit au hasard sur mes tierts 
const motChoisi = document.getElementById("mot");
motChoisi.innerHTML = tableauMots[generateurMot];

 // 4- Une variable qui s'occupe du tentatives
const tentativeEvent = 0;




// 4- Un gestionnaire d'évènement valider




// Récupérer les élements du DOM
const message = document.getElementById('message');
const formulaire = document.getElementById('form');
const input = document.getElementById('lettre');
const validerBtn = document.getElementById('valider');
const rejouerBtn = document.getElementById('rejouer');
const text = document.getElementById('saisie');
const nombre = document.getElementById('nbr');


 
  
  
  
 
 
 


 
  