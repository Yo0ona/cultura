const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral");
const espan = document.querySelectorAll("span")
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo")
const menu = document.querySelector(".menu");
const main = document.querySelector("main")

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral")
})

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode")
    circulo.classList.toggle("prendido")
});

cloud.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");

    main.classList.toggle("min-main")
    espan.forEach((span)=>{
        span.classList.toggle("oculto");
    });
   
});