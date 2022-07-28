// button click handler


const play = (event) => {

    
    console.log(event); 
    console.log(state);

    if(!isReplay){
        stepRecords.push(event.target.id);
    }

    console.log(stepRecords);
    //console.log(stepRecords.shift());
    
    move -= 1;

    if(flag === 0){
         
        flag = 1;
        var index = parseInt(event.target.id.substring(4,5));
        state[index-1] = "X";
        event.target.innerText ="X";
        nextPlayer.innerText = "Turned Played by: X";


    }
    else{
        flag = 0;
        index = parseInt(event.target.id.substring(4,5));
        state[index-1] ="O";
        event.target.innerText ="O";
        nextPlayer.innerText = "Turned Player by: O";

    }


    event.target.disabled = true;
    moveCount.innerHTML = "Moves left: " + move;

    var winner = getWinner(state);
     
    
    if(winner){
        winnerDisplay.innerHTML =winner + " is winner";
        winnerDisplay.style.display ="block";
        var buttons = document.querySelectorAll(".enabled");
        buttons.forEach((button)=>{
            button.setAttribute("disabled", "true");
        })
          
    }
    
    else if(move === 0){
        winnerDisplay.innerHTML = "It's a draw";
        winnerDisplay.style.display = "block";
    }
}      
    


//apply event to generate new game state
   
// game state renderer renders the generated game state

// renders text on button clicked with X or O

// disable the button clicked

// update panel values such as Turn Played By and Moves Left

// reset panel values to default values

// implement logic to get the winner

// announce winner


// REPLAY-MODE :: replay-game-button-clicked->fetches events recorded->apply event->generates new game state->render game state


// reset game to start a new
var reStart = document.getElementById("reset");
//reStart.addEventListener("click", reStartGame);
reStart.addEventListener("click", ()=>{
    window.location.reload();
})


var rePlay = document.getElementById("replay");
rePlay.addEventListener("click", getReplay);



var flag = 0;
var move = 9;
var winnerDisplay = document.getElementById("winner-display-board");
var state = ["", "", "", "", "", "", "", "", ""];
var nextPlayer = document.getElementById("next-player");
var moveCount = document.getElementById("move-count");
var isReplay = false;

var stepRecords = [];

function getWinner(state){
  
    if(state[0] === state[1] && state[1] === state[2] && state[0] !== ""){
            return state[0];
    }

    else if(state[3] === state[4] && state[4] === state[5] && state[3] !== ""){
        return state[3];
    }

    else if(state[6] === state[7] && state[7] === state[8] && state[6] !== ""){
        return state[6];
    }


    else if(state[0] === state[3] && state[3] === state[6] && state[0] !== ""){
           return state[0];
    }

    else if(state[1] === state[4] && state[4] ===state[7] && state[1] !== ""){
        return state[1];
    }

    else if(state[2] === state[5] && state[5] === state[8] && state[2] !== ""){
        return state[2];
    }

    else if (state[0] === state[4] && state[4] === state[8] && state[0] !== ""){
        return state[0]; 
    }
   
    else if(state[2] === state[4] && state[4] === state[6] && state[2] !== ""){
            return state[2];
    }
}

function reStartGame(){

    winnerDisplay.style.display = "none";
    for (let i=0; i<state.length; i++){
        state[i] ="";
    }

    var buttons = document.querySelectorAll(".enabled");
    buttons.forEach((button)=>{
        button.innerHTML = "";
        button.disabled = false;
    })

    flag = 0;
    move = 9;
    stepRecords = [];
    nextPlayer.innerHTML = "Turn Played By: ------";
    moveCount.innerHTML = "Moves Left: 9";  

}

function stripeResult(){
    winnerDisplay.style.display = "none";
    var buttons = document.querySelectorAll(".enabled");
    buttons.forEach((button)=>{
        button.innerHTML = "";
        button.disabled = false;
    })

    flag = 0;
    move = 9;
   
    nextPlayer.innerHTML = "Turn Played By: ------";
    moveCount.innerHTML = "Moves Left: 9";  
}



function getReplay(){
    stripeResult();
    flag = 0;
    getButton();
  
     

}
    
function getButton(){
    setTimeout(()=>{
        var id = stepRecords.shift();
       
        var button = document.getElementById(id);
        if(flag === 0){
            button.innerText = "X";
            flag = 1;
        }
        else{
            button.innerText = "O";
            flag = 0;
        }

          
        if(id !== "undefined"){
            getButton();
        }
    }, 2000);
           
}   
    
// bind events to clickable buttons
function enableButtons() {

    
    /*var box1 = document.getElementById("box-1");
    var box2 = document.getElementById("box-2");
    var box3 = document.getElementById("box-3");
    var box4 = document.getElementById("box-4");
    var box5 = document.getElementById("box-5");
    var box6 = document.getElementById("box-6");
    var box7 = document.getElementById("box-7");
    var box8 = document.getElementById("box-8");
    var box9 = document.getElementById("box-9");

    box1.addEventListener("click", play);
    box2.addEventListener("click", play);
    box3.addEventListener("click", play);
    box4.addEventListener("click", play);
    box5.addEventListener("click", play);
    box6.addEventListener("click", play);
    box7.addEventListener("click", play);
    box8.addEventListener("click", play);
    box9.addEventListener("click", play);*/

    var buttons = document.querySelectorAll(".enabled");
    console.log(buttons);
    buttons.forEach((button)=>{
        button.addEventListener('click', play);
    })
    

   
}

window.onload = enableButtons;

module.exports = play;
