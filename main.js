const controles = document.querySelectorAll(".controle-ajuste");

controles.forEach(element => {
    element.onclick = (event) => {
        var inputElement = element.parentElement.querySelector(".controle-contador");
        inputElement.value = eval(`${parseInt(inputElement.value)} ${event.target.textContent} 1`);   
    }
});
