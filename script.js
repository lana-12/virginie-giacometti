// START JQuery
$(document).ready(()=>{
    console.log('Jquery bien installé au cas ou !!');
    
    

}); // end Jquery

// window.onload = function () {
//     console.log("function called...");
//     let myModal = new bootstrap.Modal(document.getElementById("myModal"));
//     myModal.show();
// };


// SlideImgScreenshot Start
//Init Variables

//FitnessDrive
    // IMG view Client FitnessDrive
let imgSliderClient = document.getElementsByClassName("imgSliderClient");
    // IMG view Admin FitnessDrive
let imgSliderAdmin = document.getElementsByClassName("imgSliderAdmin");

    //IMG view Recruiter and candidacy TRTConseil
let imgSliderTRTConseilClient = document.getElementsByClassName("imgSliderClientTRTConeil"
);
    //IMG view Consultant TRTConseil
let imgSliderTRTConseilConsultant = document.getElementsByClassName("imgSliderConsultantTRTConeil"
);
    //IMG view Admin TRTConseil

// btn
    //FitnessDrive
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let nextAdmin = document.querySelector(".nextAdmin");
let previousAdmin = document.querySelector(".previousAdmin");
    //TRTConseil nextTrtConseil
let nextTRTClient = document.querySelector(".nextTrtConseil");
let previousTRTClient = document.querySelector(".previousTrtConseil");
let nextTRTConsultant = document.querySelector(".nextTrtConseilConsultant");
let previousTRTConsultant = document.querySelector(".previousTrtConseilConsultant");



//au clic next
    // client fitnessDrive
next.addEventListener('click', ()=>{ after(imgSliderClient)});
    // Admin FitnessDrive
nextAdmin.addEventListener("click", ()=>{ after(imgSliderAdmin);})

    // client trtConseil
nextTRTClient.addEventListener("click", () => { after(imgSliderTRTConseilClient);
});
    // consultant trtConseil
nextTRTConsultant.addEventListener("click", () => { after(imgSliderTRTConseilConsultant);
});


//au clic sur previous
    // client fitnessDrive
previous.addEventListener("click", ()=> { before(imgSliderClient)});
    // Admin FitnessDrive
previousAdmin.addEventListener("click", ()=>{ after(imgSliderAdmin);})

    // client trtConseil
previousTRTClient.addEventListener("click", () => { after(imgSliderTRTConseilClient);
});
    // consultant trtConseil
previousTRTConsultant.addEventListener("click", () => { after(imgSliderTRTConseilConsultant);
});


// SlideImg End