//elemento1
var seguir=document.querySelector("#seguir")
var voltar=document.querySelector("#voltar")
var foto=document.querySelector("#img")

function seg(){
    foto.src="https://scontent.cdninstagram.com/v/t51.29350-15/293124355_388106466636937_8757604513731375031_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=5GdzGuSVXTwQ7kNvgHjmnTm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYBjwXeCG2M_BYzVIRIxj6VMPudjQhIsxrv92h7EA1PC3w&oe=66E1886A"
}
function volt(){
    foto.src="https://scontent.cdninstagram.com/v/t51.29350-15/291184536_186597157049301_6278880693105637722_n.webp?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=ZxQWg-7w3_UQ7kNvgH-fC8f&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYDxIIvPln5-XBQ1HvXWS7XxFMX0CTmmdNcpyC7RuxhAFQ&oe=66E16A52" 
}
seguir.addEventListener("click",seg)
voltar.addEventListener("click",volt)
//elemento2
var seguir2=document.querySelector("#seguir2")
var voltar2=document.querySelector("#voltar2")
var foto2=document.querySelector("#img2")

function seg2(){
    foto2.src="https://scontent.cdninstagram.com/v/t51.29350-15/271429433_289999933181523_1634775262575763692_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=hruVjN7FYZUQ7kNvgEiywna&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYCDfr-qXZh9w_k9D5eDENduiLPfxch8kbkP3fidktvuZQ&oe=66E17815"
}
function volt2(){
    foto2.src="https://scontent.cdninstagram.com/v/t51.29350-15/271277253_296155895789856_6176664083147839784_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=sb9ETn2vqEQQ7kNvgF5FzpF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYBUmsIt6nnuD87JVzKK71XiX29vXCffxP3i_jsJkuPWug&oe=66E183A1" 
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
    foto3.src="https://scontent.cdninstagram.com/v/t51.29350-15/245419345_1141096586428211_8094751257399204988_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=nFiYPpg4zpkQ7kNvgHaIPPL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYDSP-U6fr_1vbTSfIuurX5ouigkNHlWCkoe0kgAdaqP0g&oe=66DBB9DC"
}
function ft2(){
    foto3.src="https://scontent.cdninstagram.com/v/t51.29350-15/327150691_8755823501157925_5916429378106310971_n.webp?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=YqRKwWJ0tm8Q7kNvgGv2Lbu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYA_SnIfDzxkntVFbgBqtD0zaRM4hP_mg3psFWu2oYTTOA&oe=66DB97F4" 
}
function ft3(){
    foto3.src="https://scontent.cdninstagram.com/v/t51.29350-15/271287459_130235222801191_901004368131434897_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=62osKJ-i81sQ7kNvgFTBOCJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYAs3m2PUz9uyYj7CU4v9V0HZ6jgziOqPvklOe4qSKHvXg&oe=66DBAC82" 
}
function ft4(){
    foto3.src="https://scontent.cdninstagram.com/v/t51.29350-15/309225667_135769225621543_8686093310003703259_n.webp?stp=dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=hj8GOhmZTVoQ7kNvgEZeETs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYBUepIihz3nYo6ZIqNCj7gMZaPacUp9I30D7KxMnJOWgg&oe=66DBC8EE" 
}
function ft5(){
    foto3.src="https://scontent.cdninstagram.com/v/t51.29350-15/271380239_982420305687847_7141428040250723002_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=hNTWRq94qEYQ7kNvgHE-QHC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYDE6iUDdMWcFIKpdsrDbZWhqs5rt1VXCwGiQVDRi3np0g&oe=66DBA6EC" 
}

bt1.addEventListener("click",ft1)
bt2.addEventListener("click",ft2)
bt3.addEventListener("click",ft3)
bt4.addEventListener("click",ft4)
bt5.addEventListener("click",ft5)



