function start()
{
    window.location.href="index.html";
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