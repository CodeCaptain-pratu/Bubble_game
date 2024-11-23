function start()
{
    window.location.href="gameForm.html";
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

 let cursur=document.querySelector("#cursur");
 let welcomeScreen=document.querySelector("#welcomeScreen");
welcomeScreen.addEventListener("mousemove",function(dets){
    gsap.to(cursur,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out",
    })
})