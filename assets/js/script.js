/*
* Déclaration des variables
*/

//Nombre aléatoire à deviner
let guessNumber;

//Nombre de coups joués
let counter = 0;

//Variable pour la difficulté
let difficulty = 'difficulté';

//Variables pour le nombre de parties jouées pour chaque catégorie
let numberOfEasyParties = 0;
let numberOfMediumParties = 0;
let numberOfHardParties = 0;

//Variables pour le meilleur score de chaque catégorie
let easyBestScore = 999;
let mediumBestScore = 999;
let hardBestScore = 999;


/*
* Initialise le tableau des statistiques
*/

//Initialisation du nombre de parties de chaque catégorie à 0
tdnumberOfEasyParties.innerHTML = numberOfEasyParties;
tdnumberOfMediumParties.innerHTML = numberOfMediumParties;
tdnumberOfHardParties.innerHTML = numberOfHardParties;

//Initialisation du meilleur score de chaque catégorie à 999
tdEasyBestScore.innerHTML = easyBestScore;
tdMediumBestScore.innerHTML = mediumBestScore;
tdHardBestScore.innerHTML = mediumBestScore;


/*
* Ecran difficulté
*/

//Permet de se passer de l'accueil à l'affichage du choix de la difficulté
play.onclick = () => {
    startGame.style.display = 'none';
    levelChoice.style.display = "block";
}

//Changement de l'image de difficulté
easyButton.onmouseover = () => {
    choiceDifficultyImage.src = "assets/img/easy.gif"
}
mediumButton.onmouseover = () => {
    choiceDifficultyImage.src = "assets/img/medium.gif"
}
hardButton.onmouseover = () => {
    choiceDifficultyImage.src = "assets/img/hard.gif"
}

//Permet de définir un nombre aléatoire en fonction de la difficulté choisie et de démarrer la partie
function difficultSettings(max) {
    guessNumber = Math.floor(Math.random() * max) + 1;
    number.setAttribute("max", max);
    levelChoice.style.display = 'none';
    gamePlay.style.display = 'block';
}


/*
* Choix de la difficulté et direction vers la page de jeu
*/

//Choix de la difficulté en mode Facile
easyButton.onclick = () => {
    difficultSettings(10);
    numberOfEasyParties++;
    tdnumberOfEasyParties.innerHTML = numberOfEasyParties;
    difficulty = 'easy';
    informationGame.innerHTML = '<p class="mt-1"> Nombre allant de 1 à 10 </p>';
}
//Choix de la difficulté en mode Moyen
mediumButton.onclick = () => {
    difficultSettings(100);
    numberOfMediumParties++;
    tdnumberOfMediumParties.innerHTML = numberOfMediumParties;
    difficulty = 'medium';
    informationGame.innerHTML = '<p class="mt-1"> Nombre allant de 1 à 100 </p>';
}
//Choix de la difficulté en mode Difficile
hardButton.onclick = () => {
    difficultSettings(1000);
    numberOfHardParties++;
    tdnumberOfHardParties.innerHTML = numberOfHardParties;
    difficulty = 'hard';
    informationGame.innerHTML = '<p class="mt-1"> Nombre allant de 1 à 1 000 </p>';
}


/*
* Comparaison des nombres
*/

//Permet de comparer la valeur entrée par le joueur avec celui à deviner
function checkValue() {
    if (number.value.match(/^[0-9]+$/)) {
        counter += 1;
        if (number.value == guessNumber) {
            indicationImage.src = "assets/img/win.gif";
            guessedNumber.innerHTML = `Le nombre était : <span class="result">${guessNumber}</span>. Vous avez trouvé en : <span class="result">${counter}</span> coups !`;
            numberEnter.style.display = 'none';
            if (difficulty == 'easy') {
                if (counter == easyBestScore) {
                    easyBestScore = counter;
                } else if (counter < easyBestScore) {
                    easyBestScore = counter;
                } else {
                    easyBestScore = easyBestScore;
                }
                tdEasyBestScore.innerHTML = easyBestScore;
            } else if (difficulty == 'medium') {
                if (counter == mediumBestScore) {
                    mediumBestScore = counter;
                } else if (counter < mediumBestScore) {
                    mediumBestScore = counter;
                } else {
                    mediumBestScore = mediumBestScore;
                }
                tdMediumBestScore.innerHTML = mediumBestScore;
            } else {
                if (counter == hardBestScore) {
                    hardBestScore = counter;
                } else if (counter < hardBestScore) {
                    hardBestScore = counter;
                } else {
                    hardBestScore = hardBestScore;
                }
                tdHardBestScore.innerHTML = hardBestScore;
            }
            winModal.style.display = "block";
        } else if (number.value > guessNumber) {
            indicationImage.src = "assets/img/less.gif";
        } else if (number.value < guessNumber) {
            indicationImage.src = "assets/img/more.gif";
        } else {
            indicationImage.src = "assets/img/error.gif";
        }
        //Enlève la valeur de l'input et ajoute 1 au compteur
        number.value = '';
    } else {
        indicationImage.src = "assets/img/error.gif";
    }
}

//Permet de fermer la modal Victoire
closeWinModal.onclick = () => {
    winModal.style.display = "none";
    restart.style.display = "block";
}

//Vérification à l'aide de la touche "Entrée"
number.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        checkValue(e);
    }
});

//Vérification à l'aide du bouton "Vérifier"
check.onclick = () => {
    checkValue();
}


/*
* Réinitialisation du jeu
*/

//Bouton pour réinitialiser le jeu
restart.onclick = () => {
    gamePlay.style.display = "none";
    number.value = '';
    counter = 0;
    indicationImage.src = "assets/img/guessthenumber.gif"
    startGame.style.display = "block";
    restart.style.display = "none";
    numberEnter.style.display = 'block';
}