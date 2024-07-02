let userScore=0;
let compScore=0;

let ch=document.querySelectorAll(".choice");
let para_msg=document.querySelector("#msg");
let box=document.querySelector(".msg-container");
let u_val=document.querySelector("#user-score");
let c_val=document.querySelector("#comp-score");
function compPlay(){
let arr=["rock","paper","scissors"];
let ranIndx=Math.floor(Math.random()*3);
return arr[ranIndx];
}
function showChampion(userWin,userChoice,compChoice){
    if(userWin===true){
        para_msg.innerHTML=`User Won Computer Lost <br> Your ${userChoice} beats ${compChoice}`;
        para_msg.style.backgroundColor="Green";
        userScore++;
        u_val.innerHTML=userScore;
    }
    else {
        para_msg.innerHTML=`Computer Won User Lost <br> ${compChoice} beats your ${userChoice}`;
        para_msg.style.backgroundColor="Red";
        compScore++;
        c_val.innerHTML=compScore;
    }
}
function matchDraw(){
    para_msg.innerHTML="Match Draw!! Try Again";
       para_msg.style.backgroundColor="Blue";
}
function userPlay(userChoice){
    let compChoice=compPlay();
    if(userChoice===compChoice){
       matchDraw();
    }
    else {
        let userWin=true;
        if(userChoice=== "rock"){
            userWin=(compChoice==="paper")? false : true;
        }
        else if(userChoice=== "paper"){
            userWin=(compChoice==="rock")?true : false;
        }
        else if(userChoice=== "scissors"){
            if(compChoice=== "scissors"){
                matchDraw();
            }
            else {
            userWin=(compChoice==="rock")?false: true;
            }
        }
        showChampion(userWin,userChoice,compChoice);
    }
}


ch.forEach((choice)=>
choice.addEventListener("click",function(){
    let userChoice=choice.getAttribute("id");
    userPlay(userChoice);
})
);