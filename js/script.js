function confirmacao(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    if (nome != "" && email != "") {
        alert(`${nome}, você reberá um email de confirmação`);
    }
}

function Aula01() {
    document.getElementById("aula__titulo").innerHTML = "Aula 01: Iniciando no HTML e CSS"
    document.getElementById("iframe").src = "https://www.youtube.com/embed/BAc9eNBNDy8";
}

function Aula02() {
    document.getElementById("aula__titulo").innerHTML = "Aula 02: Avançando no HTML e CSS"
    document.getElementById("iframe").src = "https://www.youtube.com/embed/OAMGkJazlsI";
}

function Aula03() {
    document.getElementById("aula__titulo").innerHTML = "Aula 03: Iniciando no JavaScript"
    document.getElementById("iframe").src = "https://www.youtube.com/embed/ldcReesZX3E";
}

function Aula04() {
    document.getElementById("aula__titulo").innerHTML = "Aula 04: Avançando no JavaScript"
    document.getElementById("iframe").src = "https://www.youtube.com/embed/cDZMQ1Ls4SY";
}

function Aula05() {
    document.getElementById("aula__titulo").innerHTML = "Aula 05: Por onde Continuar"
    document.getElementById("iframe").src = "https://www.youtube.com/embed/-mpLuarPOa4";
}
