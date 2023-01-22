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

// btn
    //FitnessDrive
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let nextAdmin = document.querySelector(".nextAdmin");
let previousAdmin = document.querySelector(".previousAdmin");

//Permettra de savoir quelle image afficher
let etape = 0;

// function remove class active img
function activImg(img){
    for (let i = 0; i < img.length; i++) {
        //Pour img courante supp class active
        img[i].classList.remove("active");
    } 
}
// function nextSlide
const after = (img) => 
{
    etape++;
  //remettre à zéro
    if (etape >= img.length) {
        etape = 0;
    }
    activImg(img);
    img[etape].classList.add("active");
}

//function previousSlide
const before = (img)=> 
{
    etape--;
    //remettre à zéro
    if (etape < 0) {
        etape = img.length - 1;
    }
    activImg(img);
    img[etape].classList.add("active");
}

//au clic next
    // client fitnessDrive
next.addEventListener('click', ()=>{ after(imgSliderClient)});
    // Admin FitnessDrive
nextAdmin.addEventListener("click", ()=>{ after(imgSliderAdmin);})

//au clic sur previous
// client fitnessDrive
previous.addEventListener("click", ()=> { before(imgSliderClient)});
// Admin FitnessDrive
previousAdmin.addEventListener("click", ()=>{ after(imgSliderAdmin);})

// SlideImg End