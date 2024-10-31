// Seleciona todos os cartões
const cartoes = document.querySelectorAll('.cartao');

cartoes.forEach(cartao => {
    // Adiciona um evento de clique em cada cartão
    cartao.addEventListener('click', () => {
        cartao.classList.toggle('active'); // Adiciona ou remove a classe 'active' ao clicar
    });
});