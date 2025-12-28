


const header = document.querySelector('.header1');
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;



    console.log(scroll);

    if (scroll > 150) {
        console.log("success")
        
        header.classList.add('header2');
      

    }
    else {
       header.classList.remove('header2');
    }
})




const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.nav.left');
const btnRight = document.querySelector('.nav.right');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('dragging');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('dragging');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('dragging');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.2; // multiplier for faster drag
  slider.scrollLeft = scrollLeft - walk;
});

/* Buttons */
btnLeft.addEventListener('click', () => {
  slider.scrollBy({ left: -260, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  slider.scrollBy({ left: 260, behavior: 'smooth' });
});












//----------------cart-------------------//























//shop



