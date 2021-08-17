//Tous les éléments ciblés dans le HTML
let devineMot = document.getElementById("devine");
let validationButton = document.getElementById("validation");
 
 

 //  tableau  
const mots = ["PLUIE", "NEIGE", "PLAGE", "BRUIT", "ARBRE"];


// tirage aléatoire + stockage 

let randomIndex = Math.floor(Math.random() * mots.length);
let randomMots =mots[randomIndex];
console.log(randomMots); 


 
 let paragraphe= document.getElementById("message"); 
 paragraphe.innerHTML = randomMots;
 

//
 initGame()

 

 function initGame() {

  let motToDisplay = "";
  
 for(let i = 0; i < randomMots.length; i++){
    motToDisplay = motToDisplay   + " _ ";
 }
 }



 
 
//console.log(motsToDisplay)

//motsChoisi.innerHTML = motsToDisplay ;   
 
 



 

var value, compteur, button, test, target, restart;
value = 8;
compteur = value;
test= true;
button = document.getElementsByClassName('bout')[0];
restart = document.getElementsByClassName('restart')[0];
target = document.getElementsByClassName('target')[0];

target.innerHTML ='Tentative(s) restate(s): <b><span">'+compteur+'</span></b>';

button.onclick = function(){
if(test==true){
  restart.style.display = 'none';
	compteur--;
target.innerHTML ='Tentative(s) restate(s): <b><span">'+compteur+'</span></b>';
    if (compteur==0){
      target.innerHTML ='Game Over';
      restart.style.display = 'block';
      
      test=false;
    }
}
}

restart.onclick = function(){
	test=true;
  compteur = value;
target.innerHTML ='Tentative(s) restate(s): <b><span">'+compteur+'</span></b>';
  restart.style.display = 'none';
  button.style.opacity = '1';
}




//Insérer le nombre de tentatives au texte/
// document.getElementById("text").innerHTML += tentatives;
  
 
  
 

  



 


 