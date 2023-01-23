// window.onload = function () {
//     console.log("function called...");
//     let myModal = new bootstrap.Modal(document.getElementById("myModal"));
//     myModal.show();
// };


// init variable slideImg
    //13OrTattoo
let imgSliderTattoo = document.getElementsByClassName("imgSliderTattoo");
let nextTatto = document.querySelector(".nextTatto");
let previousTattoo = document.querySelector(".previousTatto");

    // Assos QuatresPattes
let imgSliderAssos = document.getElementsByClassName("imgSliderAssos");
let nextAssos = document.querySelector(".nextAssos");
let previousAssos = document.querySelector(".previousAssos");


//au clic next
    //13OrTattoo
nextTatto.addEventListener("click", () => {
    after(imgSliderTattoo);
});
    // Assos QuatresPattes
nextAssos.addEventListener("click", () => {
    after(imgSliderAssos);
});



//au clic sur previous
    //13OrTattoo
previousTattoo.addEventListener("click", () => {
    before(imgSliderTattoo);
});

    // Assos QuatresPattes
previousAssos.addEventListener("click", () => {
    before(imgSliderAssos);
});
