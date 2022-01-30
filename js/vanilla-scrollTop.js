window.addEventListener('scroll', ()=>{
    let scroll = document.querySelector('#arrow-btn');
    scroll.classList.toggle("active", window.scrollY > 300);
});

