// Abrir ou fechar hamburguer menu
var logo = document.querySelector('.container');
var menu = document.querySelector('.nav__list');

logo.addEventListener('click',function(){
    console.log('hello');
    menu.classList.toggle('showmenu');
});

// Função para abrir ou fechar submenus na navbar
function ToggleSubmenu(submenu){
    submenu.classList.toggle('open-submenu');
}

// Submenu 1
const submenu_parent_1 = document.querySelector('.nav__item-1');
const submenu_1 = document.querySelector('.nav__drop-1');

submenu_parent_1.addEventListener("click",function(){
    ToggleSubmenu(submenu_1);
});

// Submenu 2
const submenu_parent_2 = document.querySelector('.nav__item-2');
const submenu_2 = document.querySelector('.nav__drop-2');

submenu_parent_2.addEventListener("click", function(){
    ToggleSubmenu(submenu_2);
});

// // Submenu 3
// const submenu_parent_3 = document.querySelector('.submenu-parent-3');
// const submenu_3 = document.querySelector('.submenu-3');

// submenu_parent_3.addEventListener("click", function(){
//     ToggleSubmenu(submenu_3, arrow_3);
// });