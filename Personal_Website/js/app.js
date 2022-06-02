const wrapper = document.querySelector('.icon-1 svg')
const wrapper_2 = document.querySelector('.icon-2 svg')
const wrapper_3 = document.querySelector('.icon-3 svg')

setTimeout(()=>{wrapper.classList.add('active');},10)
setTimeout(()=>{wrapper_2.classList.add('active');},700)
setTimeout(()=>{wrapper_3.classList.add('active');},1500)


const last_1=document.querySelector(".icon-4");
wrapper_2.addEventListener("animationend",()=>{
    const element_g = document.getElementById("green-logo");
    const element_b = document.getElementById("blue-logo");
    element_g.remove();
    element_b.remove();
})


last_1.addEventListener("animationend",()=>{
    const element_gr = document.getElementById("gray-logo");
    element_gr.remove();
})

const last=document.querySelector(".animation");

last.addEventListener("animationend",()=>{
    last.style="transition: all 1s;opacity:0;";
    const body_srcollable=document.body;
    body_srcollable.style.overflow="auto";
    setTimeout(()=>{last.remove();},1400);
})


