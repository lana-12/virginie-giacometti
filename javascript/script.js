// START JQuery
$(document).ready(()=>{
    console.log('Jquery bien installé au cas ou !!');
    
}); // end Jquery

// window.onload = function () {
//     console.log("function called...");
//     let myModal = new bootstrap.Modal(document.getElementById("myModal"));
//     myModal.show();


// SlideImgScreenshot Start

//Init Variables

//FitnessDrive START
    // IMG view Client FitnessDrive
let imgSliderClient = document.getElementsByClassName("imgSliderClient");
    // IMG view Admin FitnessDrive
let imgSliderAdmin = document.getElementsByClassName("imgSliderAdmin");

// btn
    //FitnessDrive
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let nextAdmin = document.querySelector(".nextAdmin");
let previousAdmin = document.querySelector(".previousAdmin");

//au clic next
    // client fitnessDrive
next.addEventListener('click', ()=>{ after(imgSliderClient)});
    // Admin FitnessDrive
nextAdmin.addEventListener("click", ()=>{ after(imgSliderAdmin);})

//au clic sur previous
    // client fitnessDrive
previous.addEventListener("click", ()=> { before(imgSliderClient)});

    // Admin FitnessDrive
previousAdmin.addEventListener("click", ()=>{ before(imgSliderAdmin);})

//FitnessDrive END


//TRTConseil START
    //IMG view Recruiter and candidacy TRTConseil
let imgSliderTRTConseilClient = document.getElementsByClassName("imgSliderClientTRTConeil"
);
    //IMG view Consultant TRTConseil
let imgSliderTRTConseilConsultant = document.getElementsByClassName("imgSliderConsultantTRTConeil"
);
// btn
    //TRTConseil nextTrtConseil
let nextTRTClient = document.querySelector(".nextTrtConseil");
let previousTRTClient = document.querySelector(".previousTrtConseil");
let nextTRTConsultant = document.querySelector(".nextTrtConseilConsultant");
let previousTRTConsultant = document.querySelector(".previousTrtConseilConsultant");

//au clic next
    // client trtConseil
nextTRTClient.addEventListener("click", () => { after(imgSliderTRTConseilClient);
});
    // consultant trtConseil
nextTRTConsultant.addEventListener("click", () => { after(imgSliderTRTConseilConsultant);
});

//au clic sur previous
    // client trtConseil
previousTRTClient.addEventListener("click", () => { before(imgSliderTRTConseilClient);
});
    // consultant trtConseil
previousTRTConsultant.addEventListener("click", () => { before(imgSliderTRTConseilConsultant);
});

//TRTConseil END


//13OrTattoo START
let imgSliderTattoo = document.getElementsByClassName("imgSliderTattoo");
// btn
let nextTatto = document.querySelector(".nextTatto");
let previousTattoo = document.querySelector(".previousTatto");

//au clic next
nextTatto.addEventListener("click", () => { after(imgSliderTattoo);
});

//au clic sur previous
previousTattoo.addEventListener("click", () => { before(imgSliderTattoo);
});

//13OrTattoo END

// Assos QuatresPattes START
let imgSliderAssos = document.getElementsByClassName("imgSliderAssos");
// btn
let nextAssos = document.querySelector(".nextAssos");
let previousAssos = document.querySelector(".previousAssos");
//au clic next
nextAssos.addEventListener("click", () => { after(imgSliderAssos);
});
//au clic sur previous
previousAssos.addEventListener("click", () => { before(imgSliderAssos);
});

// Assos QuatresPattes END


// Dicegame START
let imgSliderDG = document.getElementsByClassName("imgSliderDg");
// btn
let nextDG = document.querySelector(".nextDg");
let previousDG = document.querySelector(".previousDg");
//au clic next
nextDG.addEventListener("click", () => {
    after(imgSliderDG);
});
//au clic sur previous
previousDG.addEventListener("click", () => {
    before(imgSliderDG);
});

// Dicegame START END



// };

