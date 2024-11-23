let cursur=document.querySelector("#cursur");
let main=document.querySelector("#main2");
main.addEventListener("mousemove",function(dets){
    gsap.to(cursur,{
        x:dets.x,
        y:dets.y,
    })
});
function startgame(e){
    window.location.href="game.html";
}