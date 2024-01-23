// Affari Tuoi 22/01/2024, Axel e Giacomo

let pacchetti = []
let valori = [0, 1, 5, 10, 20, 50, 75, 100, 200, 500, 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 200000, 300000]
let numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


//Creo le coppie numero-valore e le inserisco come oggetto in pacchetti
numeri.forEach((number) => {
    pacchetti.push({
        numero: number,
        valore: getRandomAndRemove(valori)
    })
})

const userNumber = Math.floor(Math.random() * 20);
let userPacchetto = pacchetti[userNumber-1]


const userPacchettoButton = document.querySelector("#n" + userNumber)
userPacchettoButton.style.display = "none"
document.querySelector("#userButton").innerHTML = userNumber.toString();


pacchetti.forEach((pacco) =>{
    console.log(pacco);
})


//Rimozione oggetto pacchetto da array pacchetti e disabilitazione bottone
const buttons = document.querySelectorAll(".grid-button")
buttons.forEach((elem) =>{
    elem.disabled = false
    elem.addEventListener("click",(e) =>{
        const id = Number(e.target.id)
        e.target.disabled = true
        pacchetti = pacchetti.filter(pacchetto => pacchetto.numero != id)
        console.log(pacchetti)
    })
})


function getRandomAndRemove(array) {
    if (array.length === 0) {
        console.error("L'array è vuoto.");
        return null;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    array.splice(randomIndex, 1);
    return randomElement;
}