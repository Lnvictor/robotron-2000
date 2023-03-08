const aumentar = document.querySelector("#aumentar");
const diminuir = document.querySelector("#diminuir");
const braco = document.querySelector("#braco");


diminuir.addEventListener("click", () => {
    braco.value = parseInt(braco.value) - 1;
});

aumentar.addEventListener("click", () => {
    braco.value = parseInt(braco.value) + 1;
});
