var wrapper = document.querySelector('.icon-1 svg')
var wrapper_2 = document.querySelector('.icon-2 svg')
var wrapper_3 = document.querySelector('.icon-3 svg')

setTimeout(()=>{wrapper.classList.add('active');},10)
setTimeout(()=>{wrapper_2.classList.add('active');},700)
setTimeout(()=>{wrapper_3.classList.add('active');},1500)

const last=document.querySelector(".animation");
const last_1=document.querySelector(".icon-4");

last_1.addEventListener("animationend",()=>{
    const element_g = document.getElementById("green-logo");
    const element_b = document.getElementById("blue-logo");
    const element_gr = document.getElementById("gray-logo");
    element_gr.remove();
    element_g.remove();
    element_b.remove();
})

last.addEventListener("animationend",()=>{
    const element = document.getElementById("st");
    last.style="transition: all 1s ease;opacity:0;pointer-events:none;";
    setTimeout(()=>{element.remove();},1500)
})
