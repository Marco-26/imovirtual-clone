// Abrir ou fechar hamburguer menu
var logo = document.querySelector('.container');
var menu = document.querySelector('.menu');

logo.addEventListener('click',function(){
    menu.classList.toggle('showmenu');
    logo.classList.toggle('active');
});

// Função para abrir ou fechar submenus na navbar
function ToggleSubmenu(submenu, arrow){
    submenu.classList.toggle('open-submenu');
    arrow.classList.toggle('arrow-up');
}

// Submenu 1
const submenu_parent_1 = document.querySelector('.submenu-parent');
const submenu_1 = document.querySelector('.submenu');
const arrow_1 = document.querySelector('.fa-caret-down');

submenu_parent_1.addEventListener("click",function(){
    ToggleSubmenu(submenu_1, arrow_1);
});

// Submenu 2
const submenu_parent_2 = document.querySelector('.submenu-parent-2');
const submenu_2 = document.querySelector('.submenu-2');
const arrow_2 = document.querySelector('.fa-caret-down2');

submenu_parent_2.addEventListener("click", function(){
    ToggleSubmenu(submenu_2, arrow_2);
});

// Submenu 3
const submenu_parent_3 = document.querySelector('.submenu-parent-3');
const submenu_3 = document.querySelector('.submenu-3');
const arrow_3 = document.querySelector('.fa-caret-down3');

submenu_parent_3.addEventListener("click", function(){
    ToggleSubmenu(submenu_3, arrow_3);
});

// Abrir modal formulário
const modal = document.querySelector('.more-opt-modal'); // Modal formulário
const modal_button = document.querySelector('.more-opt') // Botão que abre o modal formulário

modal_button.addEventListener("click",function(){
    modal.classList.add('modal-active');
});

// Fechar modal formulário
const button = document.querySelector('.close-modal'); // Botão que fecha o modal formulario

button.addEventListener("click",function(){
    modal.classList.remove('modal-active');
});

// Limpar todas as checkbox's do formulario

const checkboxs = document.querySelectorAll('.checkbox');
const cleanCheckboxBtn = document.querySelector('.clean-checkbox');

cleanCheckboxBtn.addEventListener('click',function(){
    // Fazer loop em todas as checkboxs e desativa-las
    checkboxs.forEach(function(checkbox){
        checkbox.checked = false;
    });
});
