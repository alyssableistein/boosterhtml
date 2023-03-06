let parameters = {
    count : false,
    letters : false,
    numbers : false,
    special : false
}

let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");

function strengthChecker(){
    let userPassword = document.getElementById("userPassword").value;

    parameters.letters = (/[A-Za-z]+/.test(userPassword))?true:false;
    parameters.numbers = (/[0-9]+/.test(userPassword))?true:false;
    parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(userPassword))?true:false;
    parameters.count = (userPassword.length > 7)?true:false;

    let barLength = Object.values(parameters).filter(value=>value);

    console.log(Object.values(parameters), barLength);

    strengthBar.innerHTML = "";
    for( let i in barLength){
        let span = document.createElement("span");
        span.classList.add("strength");
        strengthBar.appendChild(span);
    }

    let spanRef = document.getElementsByClassName("strength");
    for( let i = 0; i < spanRef.length; i++){
        switch(spanRef.length - 1){
            case 0 :
                spanRef[i].style.background = "#ffa590";
                msg.textContent = "Your password is weak";
                break;
            case 2:
                spanRef[i].style.background = "#FFFFE0";
                msg.textContent = "Your password is simple";
                break;
            case 3:
                spanRef[i].style.background = "#74B72E";
                msg.textContent = "Your password is strong";
                break;
        }
    }
}


function toggle(){
    let userPassword = document.getElementById("userPassword");
    let eye = document.getElementById("toggle");

    if(userPassword.getAttribute("type") == "userPassword"){
        password.setAttribute("type","text");
        eye.style.color = "#0be881";
    }
    else{
        userPassword.setAttribute("type","userPassword");
        eye.style.color = "#808080";
    }
}
