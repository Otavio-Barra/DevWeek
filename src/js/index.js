const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;

function esconderSelecionado() {
    const cardSelecionado = document.querySelector('.selecionado');
    cardSelecionado.classList.remove('selecionado');

}

function mostrarCard(indiceCard) {
    cartoes[indiceCard].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function () {

    if (cartaoAtual === cartoes.length - 1) return;
    cartaoAtual++;
    mostrarCard(cartaoAtual);
    esconderSelecionado();

})



btnVoltar.addEventListener('click', function () {

    if (cartaoAtual == 0) return;
    esconderSelecionado();
    cartaoAtual--;
    mostrarCard(cartaoAtual);

})