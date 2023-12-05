const mobileNav = document.querySelector(".mobileNav");
const button = document.querySelector(".burger");

button.addEventListener("click",function(){
    mobileNav.classList.toggle("hidden");
})