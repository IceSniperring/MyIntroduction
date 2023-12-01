var about = document.querySelector('.about');
var skills = document.querySelector('.skills');
var experience = document.querySelector('.experience');
var left_arrow = document.querySelector(".fa-caret-square-left");
var right_arrow = document.querySelector(".fa-caret-square-right");

var allSections = document.querySelectorAll(".about, .skills, .experience");

function showPopup() {
    document.getElementById("popup").style.transform = "scale(1)";
}

function hidePopup() {
    document.getElementById("popup").style.transform = "scale(0)";
}

/*向前翻页*/
function pre() {
    if (skills.classList.contains("active")) {
        toggleActiveClass(skills, about);
    } else if (experience.classList.contains("active")) {
        toggleActiveClass(experience, skills);
    }
}
/*向后翻页*/
function next() {
    if (about.classList.contains("active")) {
        toggleActiveClass(about, skills);
    } else if (skills.classList.contains("active")) {
        toggleActiveClass(skills, experience);
    }
}

left_arrow.addEventListener("click", pre);
document.addEventListener("keydown", function (event) {
    if (event.key === 'a' || event.key === "ArrowLeft") {
        pre();
        console.log("keyleft");
    }
})

left_arrow.addEventListener("mousemove", function () {
    if (about.classList.contains("active")) {
        left_arrow.style.color = "gray";
    } else {
        left_arrow.style.color = "darkorange";
    }
})

left_arrow.addEventListener("mouseout", function () {
    left_arrow.style.color = "unset";
})

right_arrow.addEventListener("click", next);
document.addEventListener("keydown", function (event) {
    if (event.key === 'd' || event.key === "ArrowRight") {
        next();
        console.log("keyright");
    }
})

right_arrow.addEventListener("mousemove", function () {
    if (experience.classList.contains("active")) {
        right_arrow.style.color = "gray";
    } else {
        right_arrow.style.color = "darkorange";
    }
})

right_arrow.addEventListener("mouseout", function () {
    right_arrow.style.color = "unset";
})

/*切换active类的位置*/
function toggleActiveClass(elementToRemove, elementToAdd) {
    elementToRemove.classList.remove("active");
    elementToRemove.style.zIndex = -1;
    elementToAdd.classList.add("active");
    elementToAdd.style.zIndex = 100;
}