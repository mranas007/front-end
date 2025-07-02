// hovering on --school-- nav link
const schoolNavhover = document.querySelector("#schoolLink");
const leftBox = document.querySelector(".contanair-left");
const rightBox = document.querySelector(".hover-right");

document.addEventListener("mouseover", schooLink)
function schooLink(event) {
    if (!leftBox.contains(event.target) && schoolNavhover.contains(event.target)) {
        console.log(event.target);
        rightBox.style.right = "0";
        rightBox.style.opacity = "1";

        leftBox.style.left = "0";
        leftBox.style.opacity = "1";

        leftBox.style.zIndex = "999";
        rightBox.style.zIndex = "999";
    }
    else if (leftBox.contains(event.target) || rightBox.contains(event.target)) {
        rightBox.style.right = "0";
        rightBox.style.opacity = "1";

        leftBox.style.left = "0";
        leftBox.style.opacity = "1";

        leftBox.style.zIndex = "999";
        rightBox.style.zIndex = "999";
    }
    else {
        rightBox.style.right = "-20%";
        rightBox.style.opacity = "0";

        leftBox.style.left = "-20%";
        leftBox.style.opacity = "0";

        leftBox.style.zIndex = "-999";
        rightBox.style.zIndex = "-999";
    }
}


// hovering on --Courses-- nav link

const courseLink = document.querySelector("#courseLink");
const courseCon = document.querySelector(".cours-1");
function courseLinkFn(event) {
    if (!courseCon.contains(event.target) && courseLink.contains(event.target)) {
        courseCon.style.top = "70px";
        courseCon.style.opacity = "1";
        courseCon.style.zIndex = "999";
    } else if (courseCon.contains(event.target)) {
        courseCon.style.top = "70px";
        courseCon.style.opacity = "1";
        courseCon.style.zIndex = "999";
    } else {
        courseCon.style.top = "120px";
        courseCon.style.opacity = "0";
        courseCon.style.zIndex = "-999";
    }
}

document.addEventListener("mouseover", courseLinkFn)