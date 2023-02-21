window.onload = ()=>{

    let form = document.getElementById("contact");
    let validEmail = document.getElementById("validEmail");
    let validMessage = document.getElementById("validMessage");
    let email = document.getElementById("email");
    let content = document.getElementById("message");

    email.addEventListener("focus", (e)=>{
        email.target;
    })
    email.focus();

    function emailValid(value){
        let regexEmail = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/; 
        if(value === ""){
            validEmail.classList.remove("valid");
            validEmail.classList.add("invalid");
            validEmail.innerText ="Ce champ ne peut pas être vide";
        } 
        else if (!regexEmail.test(value)) {
            validEmail.classList.add("invalid");
            validEmail.classList.remove("valid");
            validEmail.innerText = "Veuillez saisir un email valide !"
        } else{
            validEmail.classList.add("valid");
            validEmail.classList.remove("invalid");
            validEmail.innerText = "Email valide"
            return true;
        }
    }

    email.addEventListener("change", ()=>{
        emailValid(email.value);
        });

        content.addEventListener("input", (e)=>{
            console.log(e.target.value)
            let txt = e.target.value;
            let trim = txt.trim();
            let regexMessage = /^[a-zA-Z0-9-.\s]+$/;
            console.log(trim)
            
            if (txt.trim() ===""){
                validMessage.classList.remove("valid");
                validMessage.classList.add("invalid");
                validMessage.innerText ="Ce champ ne peut pas être vide, merci de saisir du texte";
                e.preventDefault();
            }else if (regexMessage.test(txt) === false) {
                validMessage.classList.remove("valid");
                validMessage.classList.add("invalid");
                validMessage.innerText ="je ne sais pas ";
                e.preventDefault();
            }
        })
    form.addEventListener("submit",function(e){
        console.log(e.target);
        for (let i = 0; i < form.elements.length; i++) {
            console.log(form.elements[i].value)
            if (form.elements[i].value.trim() === ""){
                e.preventDefault();
            }
            
        }
    })

};