var about = document.querySelector('#about');
var skills = document.querySelector('#skills');
var experience = document.querySelector('#experience');
var left_arrow = document.querySelector(".fa-caret-square-left");
var right_arrow = document.querySelector(".fa-caret-square-right");


function showPopup() {
    document.getElementById("popup").style.transform = "scale(1)";
}

function hidePopup() {
    document.getElementById("popup").style.transform = "scale(0)";
}
