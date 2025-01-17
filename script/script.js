let choixJoueur1 = "";
let choixJoueur2 = "";
let modeDeJeu = "";

function choisirMode(mode) {
    modeDeJeu = mode;
    resetJeu();
    document.getElementById("jeu").style.display = "block";
    if (mode === 'humain') {
        document.getElementById("joueur2").style.display = "block";
    } else {
        document.getElementById("joueur2").style.display = "none";
    }
}

function choisir(choix, joueur) {
    if (joueur === 1) {
        choixJoueur1 = choix;
        document.getElementById("choixJoueur1").innerText = "Choix effectué";
        if (modeDeJeu === 'bot') {
            choixJoueur2 = ["Feuille", "Pierre", "Ciseaux"][nombreAleatoire(3)];
            document.getElementById("choixJoueur2").innerText = "Choix effectué";
            determinerGagnant();
        }
    } else {
        choixJoueur2 = choix;
        document.getElementById("choixJoueur2").innerText = "Choix effectué";
        determinerGagnant();
    }
}

function determinerGagnant() {
    const resultat = document.getElementById("resultat");

    if (choixJoueur1 === choixJoueur2) {
        resultat.innerText = "Match nul !";
    } else if (
        (choixJoueur1 === "Feuille" && choixJoueur2 === "Pierre") ||
        (choixJoueur1 === "Pierre" && choixJoueur2 === "Ciseaux") ||
        (choixJoueur1 === "Ciseaux" && choixJoueur2 === "Feuille")
    ) {
        resultat.innerText = "Joueur 1 a gagné !";
    } else {
        resultat.innerText = "Joueur 2 a gagné !";
    }

    document.getElementById("choixJoueur1").innerText = choixJoueur1;
    document.getElementById("choixJoueur2").innerText = choixJoueur2;
}

function nombreAleatoire(max) {
    return Math.floor(Math.random() * max);
}

function resetJeu() {
    choixJoueur1 = "";
    choixJoueur2 = "";
    document.getElementById("choixJoueur1").innerText = "Cliquez sur l'image voulue";
    document.getElementById("choixJoueur2").innerText = "";
    document.getElementById("resultat").innerText = "";
}