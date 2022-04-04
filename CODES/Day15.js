const ifo=document.getElementById("ifo-id");
const btn = document.getElementById("btn-id");
const close_ifo = document.getElementById("close-id");

btn.onclick=function(){
    ifo.style.display="block";
}

close_ifo.onclick=function(){
    ifo.style.display="none";
}

