let eyeicon = document.getElementById("eye-icon");
let password = document.querySelector(".box");

let isInvisible = false;

eyeicon.onclick = function () {
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "openEye.png";
        isInvisible = false;
    }else {
        password.type = "password"
        eyeicon.src ="closedEye.png";
        isInvisible = true;
    }
}