// // 
    
    // const spaceGame = ()
    
    const player1 = 'X'
    const player2 = 'O'
    var currentPlayer = ''
    var gameBoard = ['', '', '', '', '', '', '', '', '',]

    var boxes = document.querySelectorAll('.boxes').forEach(Object,i);
// It selects all the boxes
    for (let index = 0; index < boxes.length; index++) {
         boxes[index].addEventListener('click', makeMovement);
        
    }
// the function asigns the movement to the current player.
    function makeMovement(event, positions) {
        let box = event.target
        if (!box.textContent) {
 // ! if there is anything inside
            setCurrentPlayer ()
            box.textContent = currentPlayer;
            alert(positions)
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


//To check if the how the boxes were clicked

function boxesClicked (event) {
    let clickedBox = event.target;
    if (gameBoard[clickedBoxIndex] !== '') {
        return;
    }
    BoxPlayed(clickedBox, clickedBoxIndex);
    ResultValidation();
    
}

// Work on the winning option
// the winning positions when clicked 3 positions
    
const winningOptions = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
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

   
  

