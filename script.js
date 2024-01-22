// Affari Tuoi 22/01/2024, Axel e Giacomo

let pacchetti = []
let valori = [0, 1, 5, 10, 20, 50, 75, 100, 200, 500, 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 200000, 300000]
let numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


numeri.forEach((number) => {
    pacchetti.push({
        numero: number,
        valore: getRandomAndRemove(valori)
    })
})

pacchetti.forEach((pacco) =>{
    console.log(pacco);
})

function getRandomAndRemove(array) {
    // Verifica se l'array è vuoto
    if (array.length === 0) {
        console.error("L'array è vuoto.");
        return null;
    }
    // Genera un indice casuale
    const randomIndex = Math.floor(Math.random() * array.length);
    // Prendi l'elemento corrispondente all'indice casuale
    const randomElement = array[randomIndex];
    // Rimuovi l'elemento dall'array
    array.splice(randomIndex, 1);
    // Ritorna l'elemento ottenuto
    return randomElement;
}
