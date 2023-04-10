//PHP - FRONTEND

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slides = document.getElementsByClassName("slides");

next.addEventListener("click", ()=>{
    after(slides);
});
prev.addEventListener("click", ()=>{
    before(slides);
});

