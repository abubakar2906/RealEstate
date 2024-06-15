const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80)
});

let menuList = document.getElementById("menuList");
let menuClose = document.getElementById("menuClose");
menuList.style.display = "none";
menuClose.style.display = "none";


function toggleMenu(){
    if(menuList.style.display = "none")
    {
        menuList.style.display = "Block";
         menuOpen.style.display = "none";
         menuClose.style.display = "block";
    }
    else{
        menuClose.style.display = "none";
    }
};



function toggleClose(){
    if(menuList.style.display = "Block")
    {   
       
        menuList.style.display = "none";
        menuClose.style.display = "none";
        menuOpen.style.display = "block";
         
      
        
    }
    else{
        menuClose.style.display = "block";
    }
};
