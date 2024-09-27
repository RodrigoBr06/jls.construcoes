//elemento1
var seguir=document.querySelector("#seguir")
var voltar=document.querySelector("#voltar")
var foto=document.querySelector("#img")

function seg(){
    foto.src="img/Screenshot_20240926-204928~2.png"
}
function volt(){
    foto.src="img/Screenshot_20240926-204925~2.png" 
}
seguir.addEventListener("click",seg)
voltar.addEventListener("click",volt)
//elemento2
var seguir2=document.querySelector("#seguir2")
var voltar2=document.querySelector("#voltar2")
var foto2=document.querySelector("#img2")

function seg2(){
    foto2.src="img/Screenshot_20240926-204945~2.png"
}
function volt2(){
    foto2.src="img/Screenshot_20240926-205009~2.png"
}

seguir2.addEventListener("click",seg2)
voltar2.addEventListener("click",volt2)
//elemento3
var bt1=document.querySelector("#botao1")
var bt2=document.querySelector("#botao2")
var bt3=document.querySelector("#botao3")
var bt4=document.querySelector("#botao4")
var bt5=document.querySelector("#botao5")
var foto3=document.querySelector("#img3")

function ft1(){
    foto3.src="img/Screenshot_20240926-204851~2.png"  
    

}
function ft2(){
    foto3.src="img/Screenshot_20240926-204945~2.png"
}
function ft3(){
    foto3.src="img/Screenshot_20240926-204919~2.png"
}
function ft4(){
    foto3.src="img/Screenshot_20240926-204914~2.png"
}
function ft5(){
    foto3.src="img/Screenshot_20240926-204910~2.png" 
}

bt1.addEventListener("click",ft1)
bt2.addEventListener("click",ft2)
bt3.addEventListener("click",ft3)
bt4.addEventListener("click",ft4)
bt5.addEventListener("click",ft5)



