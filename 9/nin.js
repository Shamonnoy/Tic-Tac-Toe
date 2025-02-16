let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

// all win patterns
let turnO = true; //playerX, playerO
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



// reset the game
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// Setting turns
boxes.forEach((box)=>{
    box.addEventListener("click",() => {        
        // For turns
        if(turnO ===true){
            box.innerText = "O";
            turnO = false;
            // console.log("X turn")
            box.style.color = "red"
        }
        else{
            box.innerText = "X";
            turnO = true;
            // console.log("O turn")
            box.style.color = "blue"
        }
        //assures a box is not showing both turns
        box.disabled = true;
        count++
        
        let isWinner = checkWinner();
        
        if(count===9 && !isWinner){
            draw();
        }
    })
}) 

// Draw Conditions
let draw = () => {
    msg.innerText = `DRAW GAME`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// Disabling boxes after winning
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

// Enable boxes after restarting
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

// Displays winner
const showWinner = (winner) =>{
    msg.innerText = `Congratulations!!! The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// Logic for winning patterns
const checkWinner= () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                disableReset();
            }
        }
    }
};



// Makes the buttons clickable
newBtn.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame);






// 1d array
// arr = ["apple", "banana", "Lichi"];
//2d array
// arr2 = [["apple","banana"],["patato","Chili"],["pants", "shirt"]];

