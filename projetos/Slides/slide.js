/**
 * JS - Slide Show Simples
 * @author Bruss Loza
 */

var intervalo = 3000;

function slide1(){
    document.getElementById("banner").src = "imagemti.png";
    setTimeout("slide2()",intervalo);
}

function slide2(){
    document.getElementById("banner").src = "imagemroxa.png";
    setTimeout("slide3()",intervalo);
}

function slide3(){
    document.getElementById("banner").src = "imagemcolorida.png";
    setTimeout("slide1()",intervalo);
}