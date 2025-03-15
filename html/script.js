document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("paymentModal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.querySelector(".close");

    // Esconder o modal ao carregar a página
    modal.style.display = "none";

    // Abrir modal ao clicar no botão
    openModalBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Fechar modal ao clicar no botão de fechar
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fechar modal ao clicar fora da caixa
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
