function tudobom(){
    var nome = prompt("Qual é o seu nome mesmo?");
    if (nome.trim() === ""){
        alert("Coloque um nome");
    } else{
        alert("Saudações, " + nome);
    }
}