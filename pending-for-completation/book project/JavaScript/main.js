const btns = document.querySelectorAll("[data-target]");
const close_modal = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");
//for opening popup
btns.forEach((btns) => {
    btns.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});
// for closing popup using X sign
close_modal.forEach((btn) => {
    btn.addEventListener('click', () => { const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
    });
});
//after opening popup , if you click out the popup , it will close.
window.onclick = (event)=>{
    if (event.target == overlay) {
        const modal = document.querySelectorAll('.modal');
        modal.forEach((modal)=>modal.classList.remove("active"));
        overlay.classList.remove("active");
        
    }
};
