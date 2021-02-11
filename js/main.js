
function botao () {
    document.getElementById("agradecimento").innerHTML = "<b>Clique aqui e veja meu perfil no LinkedIn</b>";

    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    window.open("https://www.linkedin.com/in/luana-cavalcanti-a815a3194/");
    //window.location.href = "https://www.linkedin.com/in/luana-cavalcanti-a815a3194/";
}

function trocar (elemento) {
    //document.getElementById("mouse").innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigada por passar o mouse";
}

function voltar (elemento) {
   // document.getElementById("mouse").innerHTML = "Passe o mouse aqui";
   elemento.innerHTML = "Passe o mouse aqui";
}

function load () {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value)

}