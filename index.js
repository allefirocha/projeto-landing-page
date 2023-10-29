var setaesquerda = window.document.getElementById("seta-esquerda")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var setadireita = window.document.getElementById("seta-direita")

function rolarparadireita(){
    bruna.style = "display: none"
    samantha.style = "display: flex"
    setadireita.style = "display: none"
    setaesquerda.style = "display: flex"
}

function rolarparaesquerda(){
    samantha.style = "display: none"
    bruna.style = "display: flex"
    setaesquerda.style = "display: none"
    setadireita.style = "display: flex"
}