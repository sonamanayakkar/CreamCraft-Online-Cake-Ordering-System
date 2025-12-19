

const c_cross = document.querySelector('.cross');
const cc_cart = document.querySelector('.cc-cart');
const carticon = document.querySelector('.tr3');



c_cross.addEventListener('click',()=>{
  console.log("clicked");
  cc_cart.style.display="none";
})
carticon.addEventListener('click',()=>{
  console.log("clicked");
  
  cc_cart.style.display="flex";
})



const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const value_of = document.querySelector('.value-of');
var tot_al= document.querySelector('.tot-al');

 const fixedprice = document.querySelector('.fixedprice');


plus.addEventListener('click',()=>{
  var incre = value_of.innerHTML;
  incre++;

 
  var mul = fixedprice.innerHTML;
  
  value_of.innerHTML=incre;
  var a = incre*mul;
 

  tot_al.innerHTML=a;
 
})
minus.addEventListener('click',()=>{
 

  if ( value_of.innerHTML >1) {

    var decre =  value_of.innerHTML
    decre--;

     var mul = fixedprice.innerHTML;

    value_of.innerHTML=decre;
    var m =  decre*mul;

    tot_al.innerHTML=m;
    // tot_al.innerHTML*=value_of.innerHTML++;
  }
 
 
})





function total(){

    const total = document.querySelector('.ttotal');

    var tot_al= document.querySelector('.tot-al');



  total.innerHTML=tot_al ;




}