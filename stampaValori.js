//Stampa valori sulla schermata

let pacchiBlu = [0, 1, 5, 10, 20, 50, 75, 100, 200, 500]
let pacchiRed = [5000,10000, 15000, 20000, 30000, 50000, 75000, 100000, 200000, 300000]


const leftBar= document.querySelector(".c1")
const rightBar = document.querySelector(".c3")

for (let i=0; i<pacchiBlu.length; i++) {
    leftBar.innerHTML += `<div class="pacchiBlu">` +
        `<h1>€ ${pacchiBlu[i]}</h1>` +
        `</div>`
}

for(let i=0; i<pacchiRed.length; i++) {
    rightBar.innerHTML += `<div class="pacchiRed">` +
        `<h1>€ ${pacchiRed[i]}</h1>` +
        `</div>`
}


const btns = document.querySelectorAll(".grid-button")
btns.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        const id = Number(e.target.id);

        const pacchetto = {
            numero: id,
            valore: pacchetti.filter(p => p.numero === id)?.valore || `Valore${id}`
        };

        const index = pacchetti.findIndex(p => p.numero === id);

        if (index === -1) {
            console.log("Oggetto non trovato");
        } else {
            console.log(pacchetti[index].valore);
        }
    });
});