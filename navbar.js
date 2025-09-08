const menuOption = document.getElementById("menu-option");
const navBar = document.getElementById("navbar");
window.addEventListener("scroll",()=> {
    const scrollY = window.scrollY;
    if(scrollY > 1){
        document.querySelectorAll(".navbar").forEach(function(el) {
        el.classList.add("scroll");
        });
        document.querySelectorAll(".menu-option").forEach(function(el) {
        el.classList.add("scroll");
        });
    }
    else{
       document.querySelectorAll(".navbar").forEach(function(el) {
        el.classList.remove("scroll");
        });
        document.querySelectorAll(".menu-option").forEach(function(el) {
        el.classList.remove("scroll");
        });
    }
}); 
