let botao = document.getElementById("btn");
botao.addEventListener("click", () => {
    document.body.classList.toggle("preto");
    botao.classList.toggle("branco")
});