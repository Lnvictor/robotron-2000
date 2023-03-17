const controls = document.querySelectorAll("[data-control]");
const stats = document.querySelectorAll("[data-stat]")
const parts = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

function updateStats(part){
    stats.forEach(element => {
        const stat = element.dataset.stat;
        element.textContent = parseInt(element.textContent) + parts[part][stat];
    });
}

controls.forEach(element => {
    element.onclick = (event) => {
        var inputElement = element.parentElement.querySelector("[data-counter]");
        inputElement.value = eval(`${parseInt(inputElement.value)} ${event.target.dataset.control} 1`);

        updateStats(element.dataset.peca);
    }
});
