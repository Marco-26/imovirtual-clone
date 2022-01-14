
var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var n3 = document.querySelector('#n3')
var n4 = document.querySelector('#n4')
var n5 = document.querySelector('#n5')
var n6 = document.querySelector('#n6')
var n7 = document.querySelector('#n7')

var resultadoa = document.querySelector('#b1')
var resultadob = document.querySelector('#b2')
var resultadoc = document.querySelector('#b3')

var resultadod = document.querySelector('#b4')
var resultadoe = document.querySelector('#b5')
var resultadof = document.querySelector('#b6')
var resultadog = document.querySelector('#b7')
var resultadoh = document.querySelector('#b8')
var resultadoi = document.querySelector('#b9')

var resultadoj = document.querySelector('#b10')
var resultadok = document.querySelector('#b11')
var resultadol = document.querySelector('#b12')
var resultadom = document.querySelector('#b13')
var resultadon = document.querySelector('#b14')
var resultadoo = document.querySelector('#b15')

var resultadop = document.querySelector('#b16')
var resultadoq = document.querySelector('#b17')
var resultador = document.querySelector('#b18')
var resultados = document.querySelector('#b19')
var resultadot = document.querySelector('#b20')
var resultadou = document.querySelector('#b21')


function area1(){
    var final
    var valor
    var preco

    valor = parseInt(n1.value) * 1200
    final = valor
    

    if (5 < parseInt(n2.value) && 10> parseInt(n2.value)  )
    {
        final = final - (valor * 0.05)
    }
    

    if (parseInt(n2.value) > 10 )
    {
        final = final - (valor * 0.10)
    }


    if (parseInt(n3.value) == 2)
    {
        final = final - (valor * 0.05)
    }
    

    if (parseInt(n4.value) == 2)
    {
        final = final - ( valor * 0.10)
    }
    resultadoa.innerHTML = final
}

function area2(){
    var final
    var valor
    var preco

    valor = parseInt(n1.value) * 2000
    final = valor
    

    if (5 < parseInt(n2.value) && 10> parseInt(n2.value)  )
    {
        final = final - (valor * 0.05)
    }

    if (parseInt(n2.value) > 10 )
    {
        final = final - (valor * 0.10)
    }


    if (parseInt(n3.value) == 2)
    {
        final = final - (valor * 0.05)
    }
    

    if (parseInt(n4.value) == 2)
    {
        final = final - ( valor * 0.10)
    }


    resultadob.innerHTML= final
}
function area3(){
    var final
    var valor
    var preco

    valor = parseInt(n1.value) * 2500
    final = valor
    

    if (5 < parseInt(n2.value) && 10> parseInt(n2.value)  )
    {
        final = final - (valor * 0.05)
    }

    if (parseInt(n2.value) > 10 )
    {
        final = final - (valor * 0.10)
    }


    if (parseInt(n3.value) == 2)
    {
        final = final - (valor * 0.05)
    }
    

    if (parseInt(n4.value) == 2)
    {
        final = final - ( valor * 0.10)
    }

    resultadoc.innerHTML= final
}

function main(){

    var montante
    var entrada
    var prazo
    var spreada
    var spreadb
    var spreadc
    var jurosa
    var jurosb
    var jurosc
    var mensala 
    var mensalb
    var mensalc
    var emprestimo
    var valora
    var valorb
    var valorc

    montante = parseInt(n5.value);
    entrada = parseInt(n6.value);
    prazo = parseInt(n7.value);


    spreada = spread();
    spreadb = spread();
    spreadc = spread();

    jurosa = 0.5 +spreada;
    jurosb = 0.5 +spreadb;
    jurosc = 0.5 +spreadc;

    emprestimo = montante - entrada;


    valora = emprestimo + (emprestimo * jurosa/100);
    valorb = emprestimo + (emprestimo * jurosb/100);
    valorc = emprestimo + (emprestimo * jurosc/100);




    mensala = mensal(prazo,valora);
    mensalb = mensal(prazo,valorb);
    mensalc = mensal(prazo,valorc);
   
    mensala = arredonda(mensala);
    mensalb = arredonda(mensalb);
    mensalc = arredonda(mensalc);

    resultadod.innerHTML = montante;
    resultadoj.innerHTML = montante;
    resultadop.innerHTML = montante;

    resultadoe.innerHTML = emprestimo;
    resultadok.innerHTML = emprestimo;
    resultadoq.innerHTML = emprestimo;

    resultadof.innerHTML = jurosa;
    resultadol.innerHTML = jurosb;
    resultador.innerHTML = jurosc;

    resultadog.innerHTML = spreada;
    resultadom.innerHTML = spreadb;
    resultados.innerHTML = spreadc;

    resultadoh.innerHTML = entrada;
    resultadon.innerHTML = entrada;
    resultadot.innerHTML = entrada;

    resultadoi.innerHTML = mensala;
    resultadoo.innerHTML = mensalb;
    resultadou.innerHTML = mensalc;
}


function mensal(prazo,valor1){
var final1

prazo = prazo * 12
final1 = valor1 / prazo;
return final1;
}


function arredonda(a){
    var fac;

    fac = Math.round(a * 100) / 100;
    return fac;
};

function spread(){
    var spread 
    var none

    spread = Math.random() * (4 - 1 + 1) +1
    none = Math.round(spread * 100) / 100
    return none
};


var container =document.querySelector("#financiamento-container");


function apagar(){
if(container.style.display === 'block'){
    container.style.display = 'none'
}else{
    container.style.display = 'block';
}};

// Abrir e fechar modal financiamento

const close_financiamento_button = document.querySelector(".close-financiamento");
const modal_financimento = document.querySelector(".financiamento-modal");

close_financiamento_button.addEventListener("click",function(){
    modal_financimento.classList.remove("open-financiamento-modal");
});

const open_financiamento_button = document.querySelector(".open-financiamento-modal-button");

open_financiamento_button.addEventListener("click",function(){
    console.log("hello");
    modal_financimento.classList.add("open-financiamento-modal");
});