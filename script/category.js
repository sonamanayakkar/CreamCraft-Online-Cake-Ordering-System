


const uparrow = document.querySelector('.fa-angle-up');
const downarrow = document.querySelector('.fa-angle-down');
const menulist = document.querySelector('.menulist');




downarrow.addEventListener('click' ,()=>{
   menulist.style.display="flex";
   uparrow.style.display="flex";
   downarrow.style.display="none";
})

uparrow.addEventListener('click' ,()=>{
   menulist.style.display="none";
   uparrow.style.display="none";
    downarrow.style.display="block";
  
})
