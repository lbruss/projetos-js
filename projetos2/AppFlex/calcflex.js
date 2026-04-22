function calcular(){
    var etanol = parseFloat(document.forms["frmFlex"]["txtEtanol"].value.replace(",", "."));
    var gasolina = parseFloat(document.forms["frmFlex"]["txtGasolina"].value.replace(",", "."));

    if (isNaN(etanol) || isNaN(gasolina)) {
        alert("Digite valores válidos!");
        return;
    }

    if (etanol / gasolina < 0.7){
        document.getElementById("estado").src="etanol.png";
    } else {
        document.getElementById("estado").src="gasolina.png";
    }
}

function resetar(){
    document.getElementById("estado").src="neutro.png";
}