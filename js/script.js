
let  openMenu=document.querySelector("#openMenu");
let  closeMenu=document.querySelector("#closeMenu");
let nav =document.querySelector("#nav");
openMenu.addEventListener("click",function(){    
    openMenu.style.display="none";
    closeMenu.style.display="block"; 
    nav.classList.remove("navResponsive2"); 
    nav.classList.add("navResponsive");
}) 

closeMenu.addEventListener("click",function(){
    openMenu.style.display="block";
    closeMenu.style.display="none";
    nav.classList.add("navResponsive2");  

   
})
