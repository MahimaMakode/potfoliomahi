var type = new Typed('.typing-text',{
    strings : [ 'web designer', 'front end developer','graphic designer','photographer','web designer','web developer'],
    typeSpeed :120,
    loop:true,
});

let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click',() =>{
    let background = color.style.background;
    document.querySelector('body').style.background = background;
}));



let changer = document.querySelector('.changer');
let menu = document.querySelector('.menu');
let container = document.querySelector('.container');
let header = document.querySelector('header');

menu.onclick = () =>{
    container.classList.remove('active');
    header.classList.remove('active'); 
    changer.classList.remove('active');
}
document.querySelector('.navbar li .a1').onclick = () =>{
    container.classList.toggle('active');
    header.classList.toggle('active');
    changer.classList.toggle('active');
    // menu.classList.active('active');
}
document.querySelector('.navbar li .a2').onclick = () =>{
    container.classList.toggle('active');
    header.classList.toggle('active');
    changer.classList.toggle('active');
    // menu.classList.active('active');
}
document.querySelector('.navbar li .a3').onclick = () =>{
    container.classList.toggle('active');
    header.classList.toggle('active');
    changer.classList.toggle('active');
    // menu.classList.active('active');
}
document.querySelector('.navbar li .a4').onclick = () =>{
    container.classList.toggle('active');
    header.classList.toggle('active');
    changer.classList.toggle('active');
    // menu.classList.active('active');
}
document.querySelector('.navbar li .a5').onclick = () =>{
    container.classList.toggle('active');
    header.classList.toggle('active');
    changer.classList.toggle('active');
    // menu.classList.active('active');
}
