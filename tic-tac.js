

// const spaceGame = ()

const player1 = 'X'
const player2 = 'O'
var currentPlayer = ''
// var gameBoard = ['', '', '', '', '', '', '', '', '',]

var boxes = document.querySelectorAll('.boxes');
// It selects all the boxes
for (let index = 0; index < boxes.length; index++) {
        boxes[index].addEventListener('click', makeMovement);
    
}
// the function asigns the movement to the current player.
function makeMovement(event) {
    let box = event.target
    if (!box.textContent) {
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
}
else if ((box1.textContent === 'X' && box4.textContent === 'X' && box7.textContent === 'X') || (box2.textContent === 'X' && box5.textContent === 'X' && box8.textContent === 'X') || (box3.textContent === 'X' && box6.textContent === 'X' && box9.textContent === 'X')){
    document.querySelector('.Text').textContent = 'Player 1' 
}
else if ((box1.textContent === 'X' && box5.textContent === 'X' && box9.textContent === 'X') || (box3.textContent === 'X' && box5.textContent === 'X' && box7.textContent === 'X')){
    document.querySelector('.Text').textContent = 'Player 1' 
}
else if ((box1.textContent === 'O' && box2.textContent === 'O' && box3.textContent === 'O') || (box4.textContent === 'O' && box5.textContent === 'O' && box6.textContent === 'O') || (box7.textContent === 'O' && box8.textContent === 'O' && box9.textContent === 'O')){
    document.querySelector('.Text').textContent = 'Player 2' 
}
else if ((box1.textContent === 'O' && box4.textContent === 'O' && box7.textContent === 'O') || (box2.textContent === 'O' && box5.textContent === 'O' && box8.textContent === 'O') || (box3.textContent === 'O' && box6.textContent === 'O' && box9.textContent === 'O')){
    document.querySelector('.Text').textContent = 'Player 2' 
}
else if ((box1.textContent === 'O' && box5.textContent === 'O' && box9.textContent === 'O') || (box3.textContent === 'O' && box5.textContent === 'O' && box7.textContent === 'O')){
    document.querySelector('.Text').textContent = 'Player 2' 
}

else {
    document.querySelector('.Text').textContent = 'Keep playing'
}
}











//To check if the how the boxes were clicked
// cada vez que un jugador juega se verifiquen esa funcion que contiene todas las if conditions.

// Al final de cada if hacer un console.log del ganador ej Player1 wins

// function boxesClicked (event) {
//     let clickedBox = event.target;
//     if (gameBoard[clickedBoxIndex] !== '') {
//         return;
//     }
//     BoxPlayed(clickedBox, clickedBoxIndex);
//     ResultValidation();
    
// }

// Work on the winning option
// the winning positions when clicked 3 positions
    
// const winningOptions = [
//     [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] second attempt
//     // function box clicked above

//     var winningResult = document.querySelectorAll('.boxes')

//     // FOR loop to check the whole array inside winningOptions 
//     // and to validate each element

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//     }














// table = currentPlayer
        // this.textContent = currentPlayer

        // if (boxes.textContent === currentPlayer && boxes.children.textContent === ''){
        //     box.textContent = player2;
        // }
    //     if (boxes.children[0].style.backgroundColor === 'red' && boxes.children[1].style.backgroundColor === 'red' && boxes.children[2].style.backgroundColor === 'red'){
    //         boxes.children[0].style.backgroundColor = 'green'
    //         boxes.children[1].style.backgroundColor = 'green'
    //         boxes.children[2].style.backgroundColor = 'green'
    //     }
        
    // })









    // var boxes = document.querySelector('.boxes');

    // // for (let i = 0; i < boxes.length; i = i + 1) {
    //     boxes.addEventListener('click', function (event) {
    //         let box = event.target
    //         console.log(box)
    //     box.style.backgroundColor = 'red'
    //     }
    //     )

   
  

