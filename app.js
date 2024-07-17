let point = document.querySelector(".point");   
let hover = document.querySelector(".hover");   
window.addEventListener("mousemove",(evt)=>{
        point.style.left= evt.clientX + 'px';
        point.style.top=evt.clientY + 'px';
        hover.style.left= evt.clientX + 'px';
        hover.style.top=evt.clientY + 'px';  
       
})

let imeges=document.querySelectorAll(".img-part img");
let buttonPart1=document.querySelector(".button-part1");
let buttonPart2=document.querySelector(".button-part2");

let index=0;
const imgesFun=()=>{
    gsap.to(imeges[index],{
        left: "-=100%",
        ease:Expo.easeInOut,
        delay:1,
        onComplete: function(){
           gsap.set(this._targets[0],{left:"100%"})
        }
    })
    index===imeges.length-1? index=0:index++;
    gsap.to(imeges[index],{
        left:"-=100%",
        ease:Expo.easeInOut,
        delay:1,
    })
}
setInterval(() => {
    imgesFun();
}, 2000);
buttonPart1.addEventListener("click",imgesFun);

