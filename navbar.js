const hamburger = document.getElementById("hamburger");
window.addEventListener("scroll",()=> {
    const scrollY = window.scrollY;
    if(scrollY > 1){
        document.querySelectorAll(".navbar").forEach(function(el) {
        el.classList.add("scroll");
        });
        document.querySelectorAll(".menu-option").forEach(function(el) {
        el.classList.add("scroll");
        });
        hamburger.classList.add('scroll');
        
    }
    else{
       document.querySelectorAll(".navbar").forEach(function(el) {
        el.classList.remove("scroll");
        });
        document.querySelectorAll(".menu-option").forEach(function(el) {
        el.classList.remove("scroll");
        });
        hamburger.classList.remove('scroll');
    }
}); 
