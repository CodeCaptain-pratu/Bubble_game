

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
}
makebubble();


let timer=60;
function settimer()
{
    let timerInt = setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector(".timer").innerHTML=timer;
        }
        else
        {
            clearInterval(timerInt);
            document.querySelector("#pbtm").style.backgroundColor="black";
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>
            <h2>Your score is ${score}</h2>`;
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
let cursur=document.querySelector("#cursur");
 let main=document.querySelector("#main");
 let panel=document.querySelector("#panel");
main.addEventListener("mousemove",function(dets){
    gsap.to(cursur,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out",
    })
})