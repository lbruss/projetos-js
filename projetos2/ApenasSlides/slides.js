var intervalo = 3500;

function slide1(){
    document.getElementById("banner").src = "Foto01.jpg";
    setTimeout("slide2()",intervalo);
}

function slide2(){
    document.getElementById("banner").src = "Foto02.jpg";
    setTimeout("slide3()",intervalo);
}

function slide3(){
    document.getElementById("banner").src = "Foto03.jpg";
    setTimeout("slide1()", intervalo);
}