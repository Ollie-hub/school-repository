const cards = document.querySelectorAll('.memory-card'); // VIEW

let hasFlippedCard = false; // DATA
let lockBoard = false; // DATA
let firstCard, secondCard; // DATA

function flipCard() { // CONTROLLER
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true; 
        firstCard = this;
        return;
    }
    secondCard = this;
    checkForMatch();
}
function checkForMatch() { // CONTROLLER
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards(); 
}
function disableCards() { // CONTROLLER
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}
function unflipCards() { // CONTROLLER
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 500);
}
function resetBoard() { // CONTROLLER
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
(function shuffle() { // CONTROLLER
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random()* 12);
        card.style.order = ramdomPos;
    });
})(); 
cards.forEach(card => card.addEventListener('click', flipCard)); // VIEW


