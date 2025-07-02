// loader 
const loader = document.querySelector("#loader");
const firstShow = document.querySelector("#firstShow");
const secShow = document.querySelector("#secShow");
const thrShow = document.querySelector("#thrShow");

const loaderFunction = () => {
    setTimeout(() => {
        firstShow.style.display = "block"
    }, 1000)
    setTimeout(() => {
        firstShow.style.display = "none"
        secShow.style.display = "block"
    }, 2000)
    setTimeout(() => {
        firstShow.style.display = "none"
        secShow.style.display = "none"
        thrShow.style.display = "block"
    }, 3000)
    setTimeout(() => {
        loader.style.top = "-190%"
    }, 4200)
}
loaderFunction()


// media show while hover 
let countImg = 0;
    const myElement = document.querySelectorAll('.elem');
const fixed = document.querySelector('#fixed-image');
myElement.forEach((elem) => {
    document.addEventListener('mouseover', (e) => {
        if (elem.contains(e.target)) {
            image = elem.getAttribute("data-image");
            fixed.style.display = "block"
            fixed.style.backgroundImage = `url(${image})`;
            countImg = elem;
        }
        else if (fixed.contains(e.target)) {
            image = countImg.getAttribute("data-image");
            fixed.style.display = "block";
            fixed.style.backgroundImage = `url(${image})`;
            elemHover[1].classList.add("hoverImg");
        }
    })

    elem.addEventListener('mouseleave', (e) => {
        fixed.style.display = "none";
    })
})

// --btns-- and --img-- and --content-- change 
const scrollBtn = document.querySelectorAll(".scroll-btn");
const scrollTracker = document.querySelector("#page5-scroll-tracker");
const Images = document.querySelector("#page5-img")
const paragraph = document.querySelector("#page5-para");

const paragraphChange1 = () => {
    paragraph.textContent = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
    Images.src = "https://images.unsplash.com/photo-1476365518243-f738bf58443d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBzdHVkaW98ZW58MHwxfDB8fHww"
}
const paragraphChange2 = () => {
    paragraph.textContent = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
    Images.src = "https://images.unsplash.com/photo-1598016677484-ad34c3fd766e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBzdHVkaW98ZW58MHwxfDB8fHww"
}
const paragraphChange3 = () => {
    paragraph.textContent = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
    Images.src = "https://images.unsplash.com/photo-1646932579343-0345c2203186?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGVyJTIwc3R1ZGlvfGVufDB8MXwwfHx8MA%3D%3D"
}

scrollBtn[0].style.color = "white";
scrollBtn.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (btn === scrollBtn[0]) {
            scrollBtn[0].style.color = "white";
            scrollBtn[1].style.color = "#504A45";
            scrollBtn[2].style.color = "#504A45";
            scrollTracker.style.top = "0";

            paragraphChange1()
        }
        else if (btn === scrollBtn[1]) {
            scrollBtn[0].style.color = "#504A45";
            scrollBtn[1].style.color = "white";
            scrollBtn[2].style.color = "#504A45";
            scrollTracker.style.top = "35%";

            paragraphChange2()
        }
        else if (btn === scrollBtn[2]) {
            scrollBtn[0].style.color = "#504A45";
            scrollBtn[1].style.color = "#504A45";
            scrollBtn[2].style.color = "white";
            scrollTracker.style.top = "72%";

            paragraphChange3()
        }
    })
})


// menu navbar 
const body = document.querySelector("body");
const navbar = document.querySelector("#mobile-nav");
const menu = document.querySelector("#menu");
const firstMenuTrack = document.querySelector("#firstMenuTrack");
const secMenuTrack = document.querySelector("#secMenuTrack");

let check = 0
menu.addEventListener('click', () => {
    if (check == 0) {
        navbar.style.top = "0";
        body.style.overflow = "hidden";
        firstMenuTrack.style.transform = " rotate(48deg)translate(2px, 3px)";
        secMenuTrack.style.transform = " rotate(-48deg) translate(2px, -3px)";
        check = 1
    }
    else {
        navbar.style.top = "-150%";
        body.style.overflow = "";
        firstMenuTrack.style.transform = " rotate(0)translate(0)"
        secMenuTrack.style.transform = " rotate(0) translate(0)"
        check = 0
    }
})