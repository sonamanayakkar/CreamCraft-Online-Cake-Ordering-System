


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




document.addEventListener('DOMContentLoaded', () => {

    const slider = document.getElementById('slider');
    const btnLeft = document.querySelector('.nav.left');
    const btnRight = document.querySelector('.nav.right');

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    window.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        slider.scrollLeft = scrollLeft - (x - startX);
    });

    const scrollAmount = 250;

    btnLeft?.addEventListener('click', () => {
        slider.scrollLeft -= scrollAmount;
    });

    btnRight?.addEventListener('click', () => {
        slider.scrollLeft += scrollAmount;
    });

});











//----------------cart-------------------//




















//shop



