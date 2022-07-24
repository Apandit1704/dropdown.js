const menu = document.querySelector(".menu");
const navcross = document.querySelector(".nav-cross");
const mobilenav =document.querySelector(".mobile-nav");

menu.addEventListener("click",function(){
    mobilenav.classList.remove("invisible")
});

navcross.addEventListener("click", function(){
    mobilenav.classList.add("invisible")
});





