
var seguir=document.querySelector("#seguir")
var voltar=document.querySelector("#voltar")
var foto=document.querySelector("#img")

function seg(){
    foto.src="https://scontent.cdninstagram.com/v/t51.29350-15/293124355_388106466636937_8757604513731375031_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=tA03kmy7ccUQ7kNvgF_01pp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYDtmergRx7stQNoc273iHwPfijY-0AZgNJCBIGh9PvxoA&oe=66DAF0EA"
}
function volt(){
    foto.src="https://scontent.cdninstagram.com/v/t51.29350-15/291184536_186597157049301_6278880693105637722_n.webp?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=_z_IqaS7z7wQ7kNvgEXSsu1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYBWyvp0pDnu0YMyyA7khgzf9QPfQMDbiM8bQqXtoUTDYw&oe=66DAD2D2" 
}
seguir.addEventListener("click",seg)
voltar.addEventListener("click",volt)

var seguir2=document.querySelector("#seguir2")
var voltar2=document.querySelector("#voltar2")
var foto2=document.querySelector("#img2")

function seg2(){
    foto2.src="https://scontent.cdninstagram.com/v/t51.29350-15/271429433_289999933181523_1634775262575763692_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=tt0_lvsvoz0Q7kNvgHHSs6M&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&_nc_gid=AtbdG1dh_zWuYzcBLXWZJnu&oh=00_AYD_PmN5TzsJ5cTDLXux4HCplxYGBKAE0yvUTuD62BLWlw&oe=66DAE095"
}
function volt2(){
    foto2.src="https://scontent.cdninstagram.com/v/t51.29350-15/271277253_296155895789856_6176664083147839784_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=qBW6cV8zhEgQ7kNvgE9SrRI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYB1qHUjrmq7KqhmMy4XlSaZz3jgE9rNpdHwZjDba4uNOg&oe=66DAEC21" 
}
seguir2.addEventListener("click",seg2)
voltar2.addEventListener("click",volt2)



const images=[
    {'id':'1', 'url':'https://scontent.cdninstagram.com/v/t51.29350-15/271287459_130235222801191_901004368131434897_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=62osKJ-i81sQ7kNvgFTBOCJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYCRO_OJzTjx1jdF7a2gIHoFv5BUg_VWsWB7LqGaAkHFlw&oe=66DB03C2'},

    {'id':'2','url':'https://scontent.cdninstagram.com/v/t51.29350-15/245419345_1141096586428211_8094751257399204988_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=nFiYPpg4zpkQ7kNvgHaIPPL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&_nc_gid=AHJfEWTCKYXr54RK6mmasmj&oh=00_AYARTaGcogAXE1IxeK_1TAqyk7YMvwrQ8VVuRxKVOk-YSg&oe=66DAD8DC'},

    {'id':'3', 'url':'https://scontent.cdninstagram.com/v/t51.29350-15/327150691_8755823501157925_5916429378106310971_n.webp?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=YqRKwWJ0tm8Q7kNvgGv2Lbu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYC327bvbFfP2sqgo8gN4JurTe6LPMEjqKlopU4DRr7Gzg&oe=66DAEF34'},

    {'id':'4', 'url':'https://scontent.cdninstagram.com/v/t51.29350-15/309225667_135769225621543_8686093310003703259_n.webp?stp=dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=hj8GOhmZTVoQ7kNvgEZeETs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYBjSdnEpDTO-OyyBt65zMMXNY9kRKUM91JGJHhVjxcQyA&oe=66DAE7EE'},

    {'id':'5', 'url':'https://scontent.cdninstagram.com/v/t51.29350-15/327616449_922573482108369_1375656415581123264_n.webp?stp=dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=i-y_ft5wJtEQ7kNvgHhRRsT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYCpsDGoa9X3sg6lbcuDQXvjcghMko_ScINmyI_PFukz0A&oe=66DAECB7'},

    {'id':'6', 'url':'https://scontent.cdninstagram.com/v/t51.29350-15/295634632_535687691680394_2092861630855493472_n.webp?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=LnkAkSQSkt0Q7kNvgE8t1B2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYDsH8ghOU3yZbCc8qs-zasneKnDCULQNg7xyiXcQVV6gg&oe=66DADAE8'},
   

    ]
    const containerItems = document.querySelector("#container-items")

    const loadImagens=(images, container)=>{
        images.forEach(image =>{
            container.innerHTML +=`<div class = 'item'>
                <img src='${image.url}'
            </div>`
        })

    }


    loadImagens(images, containerItems)
   let items=document.querySelectorAll(".item")

   const previous = ()=>{
        containerItems.appendChild(items[0])
         items=document.querySelectorAll(".item")

}
const next= () =>{
    const lastItem= items[items.length -1]
    containerItems.insertBefore(lastItem,items[0])
    items=document.querySelectorAll(".item")
}
document.querySelector("#previous").addEventListener('click', previous);
document.querySelector("#next").addEventListener('click', next);
