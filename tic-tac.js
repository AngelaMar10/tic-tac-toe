// const spaceGame = ()

const player1 = 'X'
const player2 = 'O'
var currentPlayer = ''


var boxes = document.querySelectorAll('.boxes');
// It selects all the boxes
for (let index = 0; index < boxes.length; index++) {
        boxes[index].addEventListener('click', makeMovement);
        
    
}
// the function asigns the movement to the current player.
let gameActive = true
function makeMovement(event) {
    let box = event.target
    if (!box.textContent && gameActive) {
// ! if there is anything inside
        setCurrentPlayer ()
        box.textContent = currentPlayer;
        winningCheck ()
    } 
}
// It checks if the player is the number 1, changes to number 2 and so on.
function setCurrentPlayer () {
    if (currentPlayer === player1)
    {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
}

//______________________________________________

function winningCheck (){
var box1 = (document.getElementById('1'));
var box2 = (document.getElementById('2'));
var box3 = (document.getElementById('3'));
var box4 = (document.getElementById('4'));
var box5 = (document.getElementById('5'));
var box6 = (document.getElementById('6'));
var box7 = (document.getElementById('7'));
var box8 = (document.getElementById('8'));
var box9 = (document.getElementById('9'));


if ((box1.textContent === 'X' && box2.textContent === 'X' && box3.textContent === 'X') || (box4.textContent === 'X' && box5.textContent === 'X' && box6.textContent === 'X') || (box7.textContent === 'X' && box8.textContent === 'X' && box9.textContent === 'X')){
    document.querySelector('.Text').textContent = 'Player 1' 
    gameActive = false;
} 
else if ((box1.textContent === 'X' && box4.textContent === 'X' && box7.textContent === 'X') || (box2.textContent === 'X' && box5.textContent === 'X' && box8.textContent === 'X') || (box3.textContent === 'X' && box6.textContent === 'X' && box9.textContent === 'X')){
    document.querySelector('.Text').textContent = 'Player 1' 
    gameActive = false;
}
else if ((box1.textContent === 'X' && box5.textContent === 'X' && box9.textContent === 'X') || (box3.textContent === 'X' && box5.textContent === 'X' && box7.textContent === 'X')){
    document.querySelector('.Text').textContent = 'Player 1' 
    gameActive = false;
}
else if ((box1.textContent === 'O' && box2.textContent === 'O' && box3.textContent === 'O') || (box4.textContent === 'O' && box5.textContent === 'O' && box6.textContent === 'O') || (box7.textContent === 'O' && box8.textContent === 'O' && box9.textContent === 'O')){
    document.querySelector('.Text').textContent = 'Player 2' 
    gameActive = false;
}
else if ((box1.textContent === 'O' && box4.textContent === 'O' && box7.textContent === 'O') || (box2.textContent === 'O' && box5.textContent === 'O' && box8.textContent === 'O') || (box3.textContent === 'O' && box6.textContent === 'O' && box9.textContent === 'O')){
    document.querySelector('.Text').textContent = 'Player 2' 
    gameActive = false;
}
else if ((box1.textContent === 'O' && box5.textContent === 'O' && box9.textContent === 'O') || (box3.textContent === 'O' && box5.textContent === 'O' && box7.textContent === 'O')){
    document.querySelector('.Text').textContent = 'Player 2' 
    gameActive = false;
}
else if ((box1.textContent=== 'X' || box1.textContent=== 'O') && (box2.textContent=== 'X' || box2.textContent=== 'O') && (box3.textContent=== 'X' || box3.textContent=== 'O') && (box4.textContent=== 'X' || box4.textContent=== 'O') && (box5.textContent=== 'X' || box5.textContent=== 'O') && (box6.textContent=== 'X' || box6.textContent=== 'O') &&(box7.textContent=== 'X' || box7.textContent=== 'O') && (box8.textContent=== 'X' || box8.textContent=== 'O') &&(box9.textContent=== 'X' || box9.textContent=== 'O')){
    document.querySelector('.Text').textContent = 'Draw Match'

}
else {
    document.querySelector('.Text').textContent = 'Keep playing'
}


}

document.querySelector('.play-again').addEventListener('click', resetGame);

function resetGame() {
    location.reload();
 document.getElementById('1').value = '';
 document.getElementById('2').value = '';
 document.getElementById('3').value = '';
 document.getElementById('4').value = '';
 document.getElementById('5').value = '';
 document.getElementById('6').value = '';
 document.getElementById('7').value = '';
 document.getElementById('8').value = '';
 document.getElementById('9').value = '';
    
}

