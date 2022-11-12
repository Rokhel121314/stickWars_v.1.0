//GAME START 

let gameStart = document.querySelector("#gameStart");
gameStart.type = "button";

gameStart.addEventListener("click", startGame);

function startGame() {
    // points
    p1PointDiv.insertAdjacentElement("afterbegin", p1Points);
    p2PointDiv.insertAdjacentElement("afterbegin", p2Points);

    p1PointDiv.insertAdjacentElement("beforeend", p1Score);
    p2PointDiv.insertAdjacentElement("beforeend", p2Score);


    //hp
    p1HPDiv.appendChild(p1HP);
    p1HPDiv.appendChild(p1HPCount);
    p2HPDiv.appendChild(p2HP);
    p2HPDiv.appendChild(p2HPCount);

    // atk button
    p1Btn.appendChild(p1AtkBtn);
    p2Btn.appendChild(p2AtkBtn);


    gameStart.style = "display:none;";
    actionInterface.src = "basestates/stationary-state.gif";
    actionInterface.replaceWith(actionInterface);
    
    //REMAKE
    p1AtkBtn.removeAttribute("disabled", "");
    p2AtkBtn.removeAttribute("disabled", "");

    p1HPCount.textContent = "30";
    p2HPCount.textContent = "30";
    basep2HP = 30;
    basep1HP = 30;

}

//GAME PHASE 
/* <!-- POINTS/ROUND ================================================== --> */

// PLAYER 1
let p1PointDiv = document.querySelector("#p1PointDiv");

let p1Points = document.createElement("h4");
p1Points.textContent = "POINTS:"
let p1Score = document.createElement("h4");
p1Score.textContent = 1;

//p1 score
p1Score.textContent = "0";
basep1Score = 0;





// PLAYER 2
let p2PointDiv = document.querySelector("#p2PointDiv");

let p2Points = document.createElement("h4");
p2Points.textContent = "POINTS:"
let p2Score = document.createElement("h4");
p2Score.textContent = 1;

//p1 score
p2Score.textContent = "0";
basep2Score = 0;


// <!-- PLAYER1/PLAYER2 HP ============================================ --> 

// PLAYER 1
let p1HPDiv = document.querySelector("#p1HPDiv");

let p1HP = document.createElement("h4");
p1HP.textContent = "HP:"
let p1HPCount = document.createElement("h4");
p1HPCount.textContent = "30"
basep1HP = 30;

// PLAYER 2
let p2HPDiv = document.querySelector("#p2HPDiv");

let p2HP = document.createElement("h4");
p2HP.textContent = "HP:"
let p2HPCount = document.createElement("h4");
p2HPCount.textContent = "30"
basep2HP = 30;

//<!-- ACTION/FIGHT ================================================== --> 

let actionInterface = document.querySelector("#actionInterface");

//<!-- BUTTONS AND FUNCTIONS ========================================= --> 

//PLAYER 1 ===================================================================>>>>>>
let p1Btn = document.querySelector("#p1Btn");
let p1AtkBtn = document.createElement("button");
p1AtkBtn.type = "button";
p1AtkBtn.id = "p1StrikeBtn"
p1AtkBtn.textContent = "STRIKE!!";

p1AtkBtn.addEventListener("click", attackP2);

function attackP2() {
    
    let atkStrike = Math.floor(Math.random()*4);
    console.log(atkStrike);

    if ( atkStrike == 0 ) {
        actionInterface.src = "player 1 folder/kick-missed.gif";

        p1AtkBtn.setAttribute("disabled", "");
        p2AtkBtn.removeAttribute("disabled", "");
    }
    

    if (atkStrike == 1 ){
        actionInterface.src = "player 1 folder/kick-hit2.gif";
        let newp2HPCount = basep2HP - 2;
        basep2HP = newp2HPCount;
        
        console.log(basep2HP);
        const myTimeout = setTimeout(p2HPDisplay, 2500);

        function p2HPDisplay() {
            p2HPCount.textContent = basep2HP;
        }

        p1AtkBtn.setAttribute("disabled", "");
        p2AtkBtn.removeAttribute("disabled", "");
    }

    if ( atkStrike == 2 ) {
        actionInterface.src = "player 1 folder/kick-hit2.gif";
        let newp2HPCount = basep2HP - 2;
        basep2HP = newp2HPCount;
        
        console.log(basep2HP);
        const myTimeout = setTimeout(p2HPDisplay, 2500);

        function p2HPDisplay() {
            p2HPCount.textContent = basep2HP;
        }

        p1AtkBtn.setAttribute("disabled", "");
        p2AtkBtn.removeAttribute("disabled", "");
    }

    if ( atkStrike == 3 ) {
        actionInterface.src = "player 1 folder/kick-crit5.gif";
        let newp2HPCount = basep2HP - 5;
        basep2HP = newp2HPCount;
        
        console.log(basep2HP);
        const myTimeout = setTimeout(p2HPDisplay, 2500);

        function p2HPDisplay() {
            p2HPCount.textContent = basep2HP;
        }

        p1AtkBtn.setAttribute("disabled", "");
        p2AtkBtn.removeAttribute("disabled", "");
    }
    if (basep2HP <= 0 ) {
        basep2HP = 0;
        p2HPCount.textContent = basep2HP;

        p1AtkBtn.setAttribute("disabled", "");
        p2AtkBtn.setAttribute("disabled", "");

        let newp1Score = basep1Score + 1;
        basep1Score = newp1Score;

        p1Score.textContent = basep1Score;
    

        gameStart.style = "display:block;";
        gameStart.textContent = "REMATCH";
    }

    if (basep1Score == 2) {
        p1Score.textContent = "PLAYER 1 WIN";
        p2Score.textContent = "PLAYER 2 LOST";

        gameStart.style = "display:none;"

        gameReset.appendChild(resetBtn);
    }

}


//PLAYER 2 ===================================================================>>>>>>
let p2Btn = document.querySelector("#p2Btn");
let p2AtkBtn = document.createElement("button");
p2AtkBtn.type = "button";
p2AtkBtn.id = "p2StrikeBtn"
p2AtkBtn.textContent = "THROW!!";

p2AtkBtn.addEventListener("click", attackP1);

function attackP1() {
    
    let atkStrike = Math.floor(Math.random()*4);
    console.log(atkStrike);

    if ( atkStrike == 0 ) {
        actionInterface.src = "player 2 folder/throwmissed.gif";

        p2AtkBtn.setAttribute("disabled", "");
        p1AtkBtn.removeAttribute("disabled", "");
    }
    

    if (atkStrike == 1 ){
        actionInterface.src = "player 2 folder/throwhit2.gif";
        let newp1HPCount = basep1HP - 2;
        basep1HP = newp1HPCount;
        
        console.log(basep1HP);
        const myTimeout = setTimeout(p1HPDisplay, 2500);

        function p1HPDisplay() {
            p1HPCount.textContent = basep1HP;
        }

        p2AtkBtn.setAttribute("disabled", "");
        p1AtkBtn.removeAttribute("disabled", "");
    }

    if ( atkStrike == 2 ) {
        actionInterface.src = "player 2 folder/throwhit2.gif";
        let newp1HPCount = basep1HP - 2;
        basep1HP = newp1HPCount;
        
        console.log(basep1HP);
        const myTimeout = setTimeout(p1HPDisplay, 2500);

        function p1HPDisplay() {
            p1HPCount.textContent = basep1HP;
        }

        p2AtkBtn.setAttribute("disabled", "");
        p1AtkBtn.removeAttribute("disabled", "");
    }

    if ( atkStrike == 3 ) {
        actionInterface.src = "player 2 folder/crithit5.gif";
        let newp1HPCount = basep1HP - 5;
        basep1HP = newp1HPCount;
        
        console.log(basep1HP);
        const myTimeout = setTimeout(p1HPDisplay, 2500);

        function p1HPDisplay() {
            p1HPCount.textContent = basep1HP;
        }

        p2AtkBtn.setAttribute("disabled", "");
        p1AtkBtn.removeAttribute("disabled", "");
    }

    if (basep1HP <= 0 ) {
        basep1HP = 0;
        p1HPCount.textContent = basep1HP;

        p1AtkBtn.setAttribute("disabled", "");
        p2AtkBtn.setAttribute("disabled", "");

        let newp2Score = basep2Score + 1;
        basep2Score = newp2Score;

        p2Score.textContent = basep2Score;
        
        gameStart.style = "display:block;";
        gameStart.textContent = "REMATCH";
    }

    if (basep2Score == 2) {
        p2Score.textContent = "PLAYER 1 WIN";
        p1Score.textContent = "PLAYER 2 LOST";

        gameStart.style = "display:none;"

        gameReset.appendChild(resetBtn);
    }

}

//RESET GAME
let gameReset = document.querySelector("#resetGame");
let resetBtn = document.createElement ("button");

resetBtn.type = "button";
resetBtn.textContent = "RESET GAME"

resetBtn.addEventListener("click", rstGame);

function rstGame() {
    startGame()

    p1Score.textContent = "0";
    basep1Score = 0;

    p2Score.textContent = "0";
    basep2Score = 0;

    gameReset.removeChild(resetBtn);
}








