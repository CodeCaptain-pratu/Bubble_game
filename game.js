let isPause=false;
let highScore=0;
let timer=60;
let timerInt;
let changeScore=0;

function initializeHighScore(){
    const storedHighScore=localStorage.getItem("highScore");
    if(storedHighScore){
        highScore=Number(storedHighScore);
    }
}
function updateScore(){
    if(score>highScore){
        highScore=score;
        localStorage.setItem("highScore",highScore);
    }
}

function makebubble()
{
    let bubble="";
    let rn=0;
    for(let i=1;i<=162;i++)
        {   
            rn=Math.floor(Math.random()*10);         
            bubble+=`<div id="bubble">${rn}</div>`;
        }
        document.querySelector("#pbtm").innerHTML=bubble;
        gsap.from("#bubble",{
            y:-100,
            opacity:0,
            stagger:0.01,
        })
}
makebubble();


function settimer()
{
     timerInt = setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector(".timer").innerHTML=timer;
        }
        if(timer===0)
        {
            clearInterval(timerInt);
            updateScore();
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>
            <h2>Your score is ${score}</h2>
            <h2 id="high-score">The high score is ${highScore}</h2>`;
            
        }
       
    },1000);
}
settimer();

let newHit=0;
function getNewHit()
{
    newHit=Math.floor(Math.random()*10);
    document.querySelector(".hit").innerHTML=newHit;
   
}
getNewHit();
let score=0;
function increaseScore()
{
    score+=10;
    document.querySelector(".score").innerHTML=score;
    return score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets)
{
    let hittedBubble=Number(dets.target.innerHTML);
    if(newHit===hittedBubble)
    {
        increaseScore();
        getNewHit();
        makebubble();
    }
})

let pause=document.querySelector("#pausebtn");
pause.addEventListener("click",function(){
    console.log("pause clicked");
    isPause=true;
    clearInterval(timerInt);
    console.log("timer pause at",timer);
});


let resume=document.querySelector("#resumebtn");
resume.addEventListener("click",function(){
    console.log("resume clicked");
    if(isPause)
    {
        isPause=false;
        console.log(timer);
        settimer();
    }
})
let exit=document.querySelector("#exitbtn");
exit.addEventListener("click",function(){
    window.location.href="index.html";
})
initializeHighScore();