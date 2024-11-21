function start()
{
    window.location.href="game.html";
}
gsap.from("#screenContainer h1",{
   y:-100,
   duration:2,
    opacity:0,
})
gsap.from("#button",{
    y:100,
    duration:2,
    opacity:0,
 })