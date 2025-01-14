let index = 0;
const depoimentos = document.querySelector('.depoimentos-lista');
const totalDepoimentos = document.querySelectorAll('.depoimento').length;

function moveCarrossel() {
    index++;
    if (index >= totalDepoimentos) {
        index = 0;
    }
    depoimentos.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveCarrossel, 3000); // Troca de depoimentos a cada 3 segundos