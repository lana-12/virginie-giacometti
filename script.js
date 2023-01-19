// START JQuery
$(document).ready(()=>{
    console.log('Jquery bien installé au cas ou !!');
    
    

}); // end Jquery
// alert(" Site en cours de Construction !! Merci de votre compréhension ;)");

// première méthode avec <body class="..." onload="myModal()" >
// function myModal(){
//     var myModal = new bootstrap.Modal(document.getElementById("myModal"));
//     myModal.show(myModal);
// }

window.onload = function () {
    console.log("function called...");
    var myModal = new bootstrap.Modal(document.getElementById("myModal"));
    myModal.show();
};



