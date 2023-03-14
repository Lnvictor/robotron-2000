const controles = document.querySelectorAll("[data-control]");

controles.forEach(element => {
    element.onclick = (event) => {
        var inputElement = element.parentElement.querySelector("[data-counter]");
        inputElement.value = eval(`${parseInt(inputElement.value)} ${event.target.dataset.control} 1`);   
    }
});
