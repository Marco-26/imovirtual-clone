var logo = document.querySelector('.container');
var menu = document.querySelector('.menu');

logo.addEventListener('click',function(){
    menu.classList.toggle('showmenu');
    logo.classList.toggle('active');
});


const submenu_parent = document.querySelector('.submenu-parent');
const submenu = document.querySelector('.submenu');
const arrow = document.querySelector('.fa-caret-down');

submenu_parent.addEventListener("click", function(){
    submenu.classList.toggle('open-submenu');
    arrow.classList.toggle('arrow-up');
});

const submenu_parent_2 = document.querySelector('.submenu-parent-2');
const submenu_2 = document.querySelector('.submenu-2');
const arrow_2 = document.querySelector('.fa-caret-down2');

submenu_parent_2.addEventListener("click", function(){
    submenu_2.classList.toggle('open-submenu');
    arrow_2.classList.toggle('arrow-up');
});

const submenu_parent_3 = document.querySelector('.submenu-parent-3');
const submenu_3 = document.querySelector('.submenu-3');
const arrow_3 = document.querySelector('.fa-caret-down3');

submenu_parent_3.addEventListener("click", function(){
    submenu_3.classList.toggle('open-submenu');
    arrow_3.classList.toggle('arrow-up');
});
