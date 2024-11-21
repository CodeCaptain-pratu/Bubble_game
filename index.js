function start()
{
    window.location.href="game.html";
}
gsap.from("#screenContainer h1 span",{
   x:-20,
//    duration:0.2,
    opacity:0,
    stagger:1,

})
gsap.from("#button",{
    y:100,
    duration:1,
    opacity:0,
 })

 