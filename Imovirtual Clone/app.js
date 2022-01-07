// função para obter largura do ecrã
var w;
window.onresize = window.onload = function() {
    w = this.innerWidth;
}

// Abrir ou fechar hamburguer menu
var logo = document.querySelector('.container');
var menu = document.querySelector('.nav__list');

logo.addEventListener('click',function(){
    menu.classList.toggle('showmenu');
    logo.classList.toggle('active');
});

// Funções para abrir ou fechar submenus na navbar
function ToggleSubmenu(submenu){
    submenu.classList.toggle('open-submenu');
}

function ToggleSubmenuDesktop(submenu){
    submenu.classList.toggle('active__listitemdrop');
}

// Função que apenas permite ter um submenu aberto de cada vez
function CloseSubmenus(submenu1, submenu2){
    submenu1.classList.remove('active__listitemdrop') ? (w>=1215) : submenu1.classList.remove('active-listitemdrop');
    submenu2.classList.remove('active__listitemdrop') ? (w>=1215) : submenu2.classList.remove('active-listitemdrop');
}

// Submenu 1
const submenu_parent_1 = document.querySelector('.nav__item-1');
const submenu_1 = document.querySelector('.nav__drop-1');

submenu_parent_1.addEventListener("click",function(){
    CloseSubmenus(submenu_2, submenu_3);
    if(w>=1215){
        ToggleSubmenuDesktop(submenu_1);
    }
    else{
        ToggleSubmenu(submenu_1);        
    }
});

// Submenu 2
const submenu_parent_2 = document.querySelector('.nav__item-2');
const submenu_2 = document.querySelector('.nav__drop-2');

submenu_parent_2.addEventListener("click", function(){
    CloseSubmenus(submenu_1, submenu_3);
    if(w>=1215){
        ToggleSubmenuDesktop(submenu_2);
    }
    else{
        ToggleSubmenu(submenu_2);        
    }
});

// Submenu 3
const submenu_parent_3 = document.querySelector('.nav__item-3');
const submenu_3 = document.querySelector('.nav__drop-3');

submenu_parent_3.addEventListener("click", function(){
    CloseSubmenus(submenu_1,submenu_2);
    if(w>=1215){
        ToggleSubmenuDesktop(submenu_3);
    }
    else{
        ToggleSubmenu(submenu_3);        
    }
});

// Submenu 4
const submenu_parent_4 = document.querySelector('.nav__item-4');
const submenu_4 = document.querySelector('.nav__drop-4');

submenu_parent_4.addEventListener("click", function(){
    ToggleSubmenuDesktop(submenu_4);        
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
