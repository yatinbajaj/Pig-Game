var scores, roundScore, activePlayer, isGamePlaying,lastDice;
var finalScore,winningScore;
init(); 
document.querySelector('.btn--roll').addEventListener('click', function () {
    if (isGamePlaying) {
        // 1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1;
        
        // 2. Display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        // 3. Update the roundScore IF the rolled Number was NOT 1
        if (dice === 6 && lastDice === 6) {
            // player losses  score
            scores[activePlayer] = 0;
            document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }else if (dice !== 1) {
            //Add Score
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
            Update();
            if (scores[activePlayer] >= winningScore) {
            winner();
            }
        } else {
            // Next Player
            nextPlayer();
        }

        lastDice = dice;
    }
    
});

document.querySelector('.btn--hold').addEventListener('click', function () {

    if (isGamePlaying) {
        Update();
        nextPlayer();
    }
    
});

function Update() {
    // Add current Score to Global
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
    // check if user won the game
    getWinningScore();
    if (scores[activePlayer] >= winningScore) {
        winner();
    }
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.querySelector('#current--0').textContent = 0;
        document.querySelector('#current--1').textContent = 0;

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');

        document.querySelector('.dice').style.display = 'none';
}
function getWinningScore() {
    finalScore = document.querySelector('.final-score').value;
    if (!finalScore) {
        winningScore = 100;
    } else {
        winningScore = finalScore;
    }
    console.log(winningScore);
}
function winner() {
    isGamePlaying = 0;
    document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player--' + activePlayer).classList.remove('player--active');
    document.querySelector('.player--' + activePlayer).classList.add('player--winner');
    
}
document.querySelector('.btn--new').addEventListener('click',init);
function init() {
    
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    isGamePlaying = 1;
    
    document.getElementById('score--0').textContent=0;
    document.getElementById('score--1').textContent=0;
    document.getElementById('current--0').textContent=0;
    document.getElementById('current--1').textContent=0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    
    document.querySelector('.player--' + activePlayer).classList.add('player--active');
    
};