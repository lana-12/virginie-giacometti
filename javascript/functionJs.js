// imgSlide


let etape = 0;

// function remove class activeImg img
function activImg(img) {
    for (let i = 0; i < img.length; i++) {
    //Pour img courante supp class active
    img[i].classList.remove("activeImg");
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
    img[etape].classList.add("activeImg");
};

//function previousSlide
const before = (img) => {
    etape--;
  //remettre à zéro
    if (etape < 0) {
        etape = img.length - 1;
    }
    activImg(img);
    img[etape].classList.add("activeImg");
};
