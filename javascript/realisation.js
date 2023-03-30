window.onload = function () {
//     console.log("function called...");
//     let myModal = new bootstrap.Modal(document.getElementById("myModal"));
//     myModal.show();

/////////////////////////////////////

//TRTConseil START

let imgSliderTRTConseil= document.getElementsByClassName("imgSliderTRTConseil"
);

// btn
    //TRTConseil nextTrtConseil
let nextTRT = document.querySelector(".nextTrtConseil");
let previousTRT = document.querySelector(".previousTrtConseil");

//au clic next
nextTRT.addEventListener("click", () => { after(imgSliderTRTConseil);
});

//au clic sur previous
previousTRT.addEventListener("click", () => { before(imgSliderTRTConseil);
});
//TRTConseil END

/////////////////////////////////////

//FitnessDrive START

let imgSliderFD = document.getElementsByClassName("imgSliderFitnessDrive");

// btn
    //FitnessDrive
let nextFD = document.querySelector(".next");
let previousFD = document.querySelector(".previous");

//au clic next
nextFD.addEventListener('click', ()=>{ after(imgSliderFD)});

//au clic sur previous
previousFD.addEventListener("click", ()=> { before(imgSliderFD)});


//FitnessDrive END

//PHP Start
let imgSliderPhp = document.getElementsByClassName("imgSliderPhp");

// btn
let nextPhp = document.querySelector(".nextPhp");
let previousPhp = document.querySelector(".previousPhp");

//au clic next
nextPhp.addEventListener('click', ()=>{ after(imgSliderPhp)});

//au clic sur previous
previousPhp.addEventListener("click", ()=> { before(imgSliderPhp)});




//PHP END

// init variable slideImg
    //13OrTattoo
let imgSliderTattoo = document.getElementsByClassName("imgSliderTattoo");
let nextTatto = document.querySelector(".nextTatto");
let previousTattoo = document.querySelector(".previousTatto");

//     // Assos QuatresPattes
let imgSliderAssos = document.getElementsByClassName("imgSliderAssos");
let nextAssos = document.querySelector(".nextAssos");
let previousAssos = document.querySelector(".previousAssos");

//     // Dicegame
let imgSliderDG = document.getElementsByClassName("imgSliderDg");
let nextDG = document.querySelector(".nextDg");
let previousDG = document.querySelector(".previousDg");


//au clic next
    //13OrTattoo
nextTatto.addEventListener("click", () => {
    after(imgSliderTattoo);
});
//     // Assos QuatresPattes
nextAssos.addEventListener("click", () => {
    after(imgSliderAssos);
});

//     // DiceGame
nextDG.addEventListener("click", () => {
    after(imgSliderDG);
    // alert('ok')
});



//au clic sur previous
//     //13OrTattoo
previousTattoo.addEventListener("click", () => {
    before(imgSliderTattoo);
});

//     // Assos QuatresPattes
previousAssos.addEventListener("click", () => {
    before(imgSliderAssos);
});

//     // DiceGame
previousDG.addEventListener("click", () => {
    before(imgSliderDG);
});

};

