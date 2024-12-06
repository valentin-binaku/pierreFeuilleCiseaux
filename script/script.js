function nombreAleatoire(max) {
    return Math.floor(Math.random() * max);
  }
let ordiAleatoire = 0;
//Feuille = 0, Pierre = 1, Ciseaux = 2
function Papier() {
    ordiAleatoire=nombreAleatoire(3)
    console.log(ordiAleatoire)
    papper = document.getElementById("tonChoix");
    papper.innerText="Feuille";

    if (ordiAleatoire===0){
        papper = document.getElementById("ordiChoix");
        papper.innerText="Feuille";
        resultat = document.getElementById("resultat")
        resultat.innerText="Match nul ! ";
    }else if (ordiAleatoire===1){
        papper = document.getElementById("ordiChoix");
        papper.innerText="Pierre";
        resultat = document.getElementById("resultat")
        resultat.innerText="Vous avez gagné";
    }else{
        papper = document.getElementById("ordiChoix");
        papper.innerText="Ciseaux";
        resultat = document.getElementById("resultat")
        resultat.innerText="Vous avez perdu !";
    }
  }

  function Pierre() {
    ordiAleatoire=nombreAleatoire(3)
    console.log(ordiAleatoire)
    rock = document.getElementById("tonChoix");
    rock.innerText="Pierre";

    if (ordiAleatoire===0){
        rock = document.getElementById("ordiChoix");
        rock.innerText="Feuille";
        resultat = document.getElementById("resultat")
        resultat.innerText="Vous avez perdu !";
    }else if (ordiAleatoire===1){
        rock = document.getElementById("ordiChoix");
        rock.innerText="Pierre";
        resultat = document.getElementById("resultat")
        resultat.innerText="Match nul !";
    }else{
        rock = document.getElementById("ordiChoix");
        rock.innerText="Ciseaux";
        resultat = document.getElementById("resultat")
        resultat.innerText="Vous avez gagné !";
    }
  }

  function Ciseaux() {
    ordiAleatoire=nombreAleatoire(3)
    console.log(ordiAleatoire)
    cisor = document.getElementById("tonChoix");
    cisor.innerText="Ciseaux"

    if (ordiAleatoire===0){
        cisor = document.getElementById("ordiChoix");
        cisor.innerText="Feuille"
        resultat = document.getElementById("resultat")
        resultat.innerText="Vous avez gagné !";

    }else if (ordiAleatoire===1){
        cisor = document.getElementById("ordiChoix");
        cisor.innerText="Pierre"
        resultat = document.getElementById("resultat")
        resultat.innerText="Vous avez perdu !";
    }else{
        cisor = document.getElementById("ordiChoix");
        cisor.innerText="Ciseaux"
        resultat = document.getElementById("resultat")
        resultat.innerText="Match nul ! ";   
    }
  }