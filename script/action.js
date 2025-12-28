const container = document.querySelector('.container1');
const regbtn = document.querySelector('.click');
const logbtn = document.querySelector('.click2');


regbtn.addEventListener('click',() =>{
    container.classList.add('active');
})

logbtn.addEventListener('click',() =>{
    container.classList.remove('active');
})
