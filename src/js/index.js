const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
 
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        removeClass(".botao.selecionado");
        removeClass(".personagem.selecionado");

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
        
    });
});


function removeClass(nomeClasse) {
    const component = document.querySelector(nomeClasse);
    component.classList.remove("selecionado");
}




