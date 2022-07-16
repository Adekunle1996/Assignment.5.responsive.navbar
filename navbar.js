const menuSlide= ()=>{
    const navMenu=document.querySelector(".nav-menu");
    const burger=document.querySelector(".burger");
    const navItem=document.querySelectorAll(".nav-menu li");
    
    burger.addEventListener("click", ()=>{
        navMenu.classList.toggle("menu-display");
        navItem.forEach((value, index)=>{
            if(value.style.animation){
                value.style.animation="";
            }else{
                value.style.animation=`menu-item-animate 0.3s ease forwards ${index/7 + 0.5}s`
            }
        });
        burger.classList.toggle("toggle");
        
    })
    
}
menuSlide();
    

    

    