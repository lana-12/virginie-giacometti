// imgSlide

//Permettra de savoir quelle image afficher
let etape = 0;

// function remove class active img
function activImg(img) {
    for (let i = 0; i < img.length; i++) {
    //Pour img courante supp class active
    img[i].classList.remove("active");
    }
}
// function nextSlide
const after = (img) => {
    etape++;
  //remettre à zéro
    if (etape >= img.length) {
        etape = 0;
    }
    activImg(img);
    img[etape].classList.add("active");
};

//function previousSlide
const before = (img) => {
    etape--;
  //remettre à zéro
    if (etape < 0) {
        etape = img.length - 1;
    }
    activImg(img);
    img[etape].classList.add("active");
};
