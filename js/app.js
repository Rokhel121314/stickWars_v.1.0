//PLAYER VS PLAYER JS =====================================================//

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

    //ROUNDS
    roundsNum.appendChild(numRounds);
    countRound()

    //hp
    p1HPDiv.appendChild(p1HP);
    p1HPDiv.appendChild(p1HPCount);
    p2HPDiv.appendChild(p2HP);
    p2HPDiv.appendChild(p2HPCount);

    // atk button
    p1Btn.appendChild(p1AtkBtn);
    p2Btn.appendChild(p2AtkBtn);


    gameStart.style = "display:none;";
    botgameStart.style = "display:none;";
    actionInterface.src = "basestates/stationary-state.gif";
    actionInterface.replaceWith(actionInterface);
    
    //REMAKE
    //reenable atk buttons
    p1AtkBtn.removeAttribute("disabled", "");
    p2AtkBtn.removeAttribute("disabled", "");

    //reseting HP
    p1HPCount.textContent = "20";
    p2HPCount.textContent = "20";
    basep2HP = 20;
    basep1HP = 20;
    //reseting Rounds
    


    //reseting HP color
    p1HPCount.style = "color:black;"
    p2HPCount.style = "color:black;"

}

//GAME PHASE 
/* <!-- POINTS/ROUND ================================================== --> */

// PLAYER 1
let p1PointDiv = document.querySelector("#p1PointDiv");

let p1Points = document.createElement("h4");
p1Points.textContent = "POINTS:"
let p1Score = document.createElement("h4");
p1Score.classList = "pScore";
p1Score.textContent = 1;

//p1 score
p1Score.textContent = "0";
basep1Score = 0;


// PLAYER 2
let p2PointDiv = document.querySelector("#p2PointDiv");

let p2Points = document.createElement("h4");
p2Points.textContent = "POINTS:"
let p2Score = document.createElement("h4");
p2Score.classList = "pScore";
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
p1HPCount.textContent = "20"
basep1HP = 20;

// PLAYER 2
let p2HPDiv = document.querySelector("#p2HPDiv");

let p2HP = document.createElement("h4");
p2HP.textContent = "HP:"
let p2HPCount = document.createElement("h4");
p2HPCount.textContent = "20"
basep2HP = 20;

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

    if (basep2HP <= 7 ){
        const myTimeout = setTimeout(p2HPDisplay, 2500);

        function p2HPDisplay() {
            p2HPCount.style = "color:red;"
        }
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

    
    if (basep1HP <= 7 ){
        const myTimeout = setTimeout(p1HPDisplay, 2500);

        function p1HPDisplay() {
            p1HPCount.style = "color:red;"
        }
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

    numRounds.textContent = "ROUND" + " " + 1;
    baseRoundCount = 1;

    gameReset.removeChild(resetBtn);
}

//number of rounds
let roundsNum = document.querySelector("#roundsNum");
let numRounds = document.createElement("h4");

numRounds.type = "text";
numRounds.textContent = "ROUND" + " " + 1;
let baseRoundCount = 0;


function countRound() {
    let newbaseRoundCount = baseRoundCount + 1;
    baseRoundCount = newbaseRoundCount;
    numRounds.textContent = "ROUND" + " " + baseRoundCount;

}


//PLAYER VS BOT JS =====================================================//


//GAME START 1 PLAYER

let botgameStart = document.querySelector("#botGameStart");
botgameStart.type = "button";

botgameStart.addEventListener("click", botStartGame);

function botStartGame() {
    // points
    botp1PointDiv.insertAdjacentElement("afterbegin", botp1Points);
    botp2PointDiv.insertAdjacentElement("afterbegin", botp2Points);

    botp1PointDiv.insertAdjacentElement("beforeend", botp1Score);
    botp2PointDiv.insertAdjacentElement("beforeend", botp2Score);

    //ROUNDS
    botroundsNum.appendChild(botnumRounds);
    botcountRound()

    //hp
    botp1HPDiv.appendChild(botp1HP);
    botp1HPDiv.appendChild(botp1HPCount);
    botp2HPDiv.appendChild(botp2HP);
    botp2HPDiv.appendChild(botp2HPCount);

    // atk button
    botp1Btn.appendChild(botp1AtkBtn);
    botp1AtkBtn.style = "display:block;"
    // p2Btn.appendChild(p2AtkBtn);


    botgameStart.style = "display:none;";
    gameStart.style = "display:none;";
    botactionInterface.src = "basestates/stationary-state.gif";
    botactionInterface.replaceWith(botactionInterface);
    
    //REMAKE
    //reenable atk buttons
    botp1AtkBtn.removeAttribute("disabled", "");
    // p2AtkBtn.removeAttribute("disabled", "");

    //reseting HP
    botp1HPCount.textContent = "20";
    botp2HPCount.textContent = "20";
    botbasep2HP = 20;
    botbasep1HP = 20;
    //reseting Rounds
    // numRounds.textContent = "ROUND" + " " + 1;
    // baseRoundCount = 1;
    //reseting HP color
    botp1HPCount.style = "color:black;"
    botp2HPCount.style = "color:black;"

}

//GAME PHASE 
/* <!-- POINTS/ROUND ================================================== --> */

// PLAYER 1
let botp1PointDiv = document.querySelector("#p1PointDiv");

let botp1Points = document.createElement("h4");
botp1Points.textContent = "P1 SCORE:"
let botp1Score = document.createElement("h4");
botp1Score.classList = "pScore";
botp1Score.textContent = 1;

//p1 score
botp1Score.textContent = "0";
botbasep1Score = 0;


// PLAYER 2
let botp2PointDiv = document.querySelector("#p2PointDiv");

let botp2Points = document.createElement("h4");
botp2Points.textContent = "BOT SCORE:"
let botp2Score = document.createElement("h4");
botp2Score.classList = "pScore";
botp2Score.textContent = 1;

//p1 score
botp2Score.textContent = "0";
botbasep2Score = 0;


// <!-- PLAYER1/PLAYER2 HP ============================================ --> 

// PLAYER 1
let botp1HPDiv = document.querySelector("#p1HPDiv");

let botp1HP = document.createElement("h4");
botp1HP.textContent = "HP:"
let botp1HPCount = document.createElement("h4");
botp1HPCount.textContent = "20"
basep1HP = 20;

// PLAYER 2
let botp2HPDiv = document.querySelector("#p2HPDiv");

let botp2HP = document.createElement("h4");
botp2HP.textContent = "HP:"
let botp2HPCount = document.createElement("h4");
botp2HPCount.textContent = "20"
botbasep2HP = 20;

//<!-- ACTION/FIGHT ================================================== --> 

let botactionInterface = document.querySelector("#actionInterface");

//<!-- BUTTONS AND FUNCTIONS ========================================= --> 

//PLAYER 1 ===================================================================>>>>>>
let botp1Btn = document.querySelector("#p1Btn");
let botp1AtkBtn = document.createElement("button");
botp1AtkBtn.type = "button";
botp1AtkBtn.id = "p1StrikeBtn"
botp1AtkBtn.textContent = "STRIKE!!";

botp1AtkBtn.addEventListener("click", botattackP2);

function botattackP2() {

    
    let botatkStrike = Math.floor(Math.random()*4);
    console.log(botatkStrike);

    if ( botatkStrike == 0 ) {
        botactionInterface.src = "player 1 folder/kick-missed.gif";

        botp1AtkBtn.setAttribute("disabled", "");
        // p2AtkBtn.removeAttribute("disabled", "");
        
    }
    

    if (botatkStrike == 1 ){
        botactionInterface.src = "player 1 folder/kick-hit2.gif";
        let botnewp2HPCount = botbasep2HP - 2;
        botbasep2HP = botnewp2HPCount;
        
        console.log(botbasep2HP);
        const myTimeout = setTimeout(p2HPDisplay, 2500);

        function p2HPDisplay() {
            botp2HPCount.textContent = botbasep2HP;
        }

        botp1AtkBtn.setAttribute("disabled", "");
        // p2AtkBtn.removeAttribute("disabled", "");
        
    }

    if ( botatkStrike == 2 ) {
        botactionInterface.src = "player 1 folder/kick-hit2.gif";
        let botnewp2HPCount = botbasep2HP - 2;
        botbasep2HP = botnewp2HPCount;
        
        console.log(botbasep2HP);
        const myTimeout = setTimeout(p2HPDisplay, 2500);

        function p2HPDisplay() {
            botp2HPCount.textContent = botbasep2HP;
        }

        botp1AtkBtn.setAttribute("disabled", "");
        // p2AtkBtn.removeAttribute("disabled", "");\
    }

    if ( botatkStrike == 3 ) {
        botactionInterface.src = "player 1 folder/kick-crit5.gif";
        let botnewp2HPCount = botbasep2HP - 5;
        botbasep2HP = botnewp2HPCount;
        
        console.log(botbasep2HP);
        const myTimeout = setTimeout(p2HPDisplay, 2500);

        function p2HPDisplay() {
            botp2HPCount.textContent = botbasep2HP;
        }

        botp1AtkBtn.setAttribute("disabled", "");
        // p2AtkBtn.removeAttribute("disabled", "");

        
    }
    if (botbasep2HP <= 0 ) {
        botbasep2HP = 0;
        botp2HPCount.textContent = botbasep2HP;

        botp1AtkBtn.setAttribute("disabled", "");
        // p2AtkBtn.setAttribute("disabled", "");

        let botnewp1Score = botbasep1Score + 1;
        botbasep1Score = botnewp1Score;

        botp1Score.textContent = botbasep1Score;
    

        botgameStart.style = "display:block;";
        botgameStart.textContent = "REMATCH";
        
    }

    if (botbasep2HP <= 7 ){
        const myTimeout = setTimeout(p2HPDisplay, 2500);

        function p2HPDisplay() {
            botp2HPCount.style = "color:red;"
        }
    }

    if (botbasep1Score == 2) {
        botp1Score.textContent = "PLAYER 1 WIN";
        botp2Score.textContent = "PLAYER 2 LOST";

        botgameStart.style = "display:none;"

        botgameReset.appendChild(botresetBtn);
    }

    if ( botbasep2HP >= 1) {
        const comTimeout = setTimeout(computerAtk, 5000);
    
        function computerAtk() {
            botattackP1();
        }
        
    }
}


//PLAYER 2 ===================================================================>>>>>>
// let p2Btn = document.querySelector("#p2Btn");
// let p2AtkBtn = document.createElement("button");
// p2AtkBtn.type = "button";
// p2AtkBtn.id = "p2StrikeBtn"
// p2AtkBtn.textContent = "THROW!!";

// p2AtkBtn.addEventListener("click", attackP1);

function botattackP1() {


    
    let botatkStrike = Math.floor(Math.random()*4);
    console.log(botatkStrike);

    if ( botatkStrike == 0 ) {
        botactionInterface.src = "player 2 folder/throwmissed.gif";

        // p2AtkBtn.setAttribute("disabled", "");
        const myTimeout = setTimeout(p1HPDisplay, 2500);

        function p1HPDisplay() {
            botp1AtkBtn.removeAttribute("disabled", "");
        }
    }
    

    if (botatkStrike == 1 ){
        botactionInterface.src = "player 2 folder/throwhit2.gif";
        let botnewp1HPCount = botbasep1HP - 2;
        botbasep1HP = botnewp1HPCount;
        
        console.log(botbasep1HP);
        const myTimeout = setTimeout(p1HPDisplay, 2500);

        function p1HPDisplay() {
            botp1HPCount.textContent = botbasep1HP;
            botp1AtkBtn.removeAttribute("disabled", "");
        }

        // p2AtkBtn.setAttribute("disabled", "");
        
    }

    if ( botatkStrike == 2 ) {
        botactionInterface.src = "player 2 folder/throwhit2.gif";
        let botnewp1HPCount = botbasep1HP - 2;
        botbasep1HP = botnewp1HPCount;
        
        console.log(botbasep1HP);
        const myTimeout = setTimeout(p1HPDisplay, 2500);

        function p1HPDisplay() {
            botp1HPCount.textContent = botbasep1HP;
            botp1AtkBtn.removeAttribute("disabled", "");
        }

        // p2AtkBtn.setAttribute("disabled", "");
        
    }

    if ( botatkStrike == 3 ) {
        botactionInterface.src = "player 2 folder/crithit5.gif";
        let botnewp1HPCount = botbasep1HP - 5;
        botbasep1HP = botnewp1HPCount;
        
        console.log(botbasep1HP);
        const myTimeout = setTimeout(p1HPDisplay, 2500);

        function p1HPDisplay() {
            botp1HPCount.textContent = botbasep1HP;
            botp1AtkBtn.removeAttribute("disabled", "");
        }

        // p2AtkBtn.setAttribute("disabled", "");
        
    }

    if (botbasep1HP <= 0 ) {
        botbasep1HP = 0;
        botp1HPCount.textContent = botbasep1HP;

        botp1AtkBtn.style = "display:none;"
        // p2AtkBtn.setAttribute("disabled", "");

        let botnewp2Score = botbasep2Score + 1;
        botbasep2Score = botnewp2Score;

        botp2Score.textContent = botbasep2Score;
        
        botgameStart.style = "display:block;";
        botgameStart.textContent = "REMATCH";
    }

    
    if (botbasep1HP <= 7 ){
        const myTimeout = setTimeout(p1HPDisplay, 2500);

        function p1HPDisplay() {
            botp1HPCount.style = "color:red;"
        }
    }

    if (botbasep2Score == 2) {
        botp2Score.textContent = "PLAYER 1 WIN";
        botp1Score.textContent = "PLAYER 2 LOST";

        botgameStart.style = "display:none;"

        botgameReset.appendChild(botresetBtn);
    }

}

//RESET GAME
let botgameReset = document.querySelector("#resetGame");
let botresetBtn = document.createElement ("button");

botresetBtn.type = "button";
botresetBtn.textContent = "RESET GAME"

botresetBtn.addEventListener("click", botrstGame);

function botrstGame() {
    botStartGame()

    botp1Score.textContent = "0";
    botbasep1Score = 0;

    botp2Score.textContent = "0";
    botbasep2Score = 0;

    
    botnumRounds.textContent = "ROUND" + " " + 1;
    botbaseRoundCount = 1;

    botgameReset.removeChild(botresetBtn);
    
}

// number of rounds
let botroundsNum = document.querySelector("#roundsNum");
let botnumRounds = document.createElement("h4");

botnumRounds.type = "text";
botnumRounds.textContent = "ROUND" + " " + 1;
let botbaseRoundCount = 0;


function botcountRound() {
    let botnewbaseRoundCount = botbaseRoundCount + 1;
    botbaseRoundCount = botnewbaseRoundCount;
    botnumRounds.textContent = "ROUND" + " " + botbaseRoundCount;

}


// END OF JAVASCRIPT ================================================//













