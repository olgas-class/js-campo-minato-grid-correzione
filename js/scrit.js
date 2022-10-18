// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Bonus:
// Aggiungere la possibilità di scegliere un livello di difficoltà in base al quale viene generata una griglia di uno dei seguenti range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

/**
 * SVOLGIMENTO
 * [*]Quando l'utente clicca sul bottone:
 * [*] Prelevare la scelta del livello e impostare squaresNumber e squaresInRow in base a questa scelta
 * [*]Nascondere il titolo
 * [*]Ripulire la griglia
 * [*]Creare (il numero di quadrati da generare) square
 *      [*]Creare l'elemento
 *      [*]Aggiungere la classe
 *      [*]Inserire il numero nello span interno
 *      []Aggiungo il click listener allo square
 *              ---> []al click colorare lo square cliccato di azurro e scrivere in console il numero
 *      [*]Appendo lo square alla griglia
 * [*] Mostrare la griglia
 *
 * Che cosa succede se clicco più volte play????
 */

const mainTitle = document.getElementById("main-title");
const mainGrid = document.getElementById("grid");
const levelSelect = document.getElementById("level");
document.getElementById("play-button").addEventListener("click", startGame);

// Funzione principale del gioco
function startGame() {
  // Controllo il livello scelto
  const level = parseInt(levelSelect.value);
  let squaresNumber;
  let squaresInRow;
  switch (level) {
    case 1: 
        squaresNumber = 100;
        squaresInRow = 10;
        break;
    case 2: 
        squaresNumber = 81;
        squaresInRow = 9;
        break;
    case 3:
        squaresNumber = 49;
        squaresInRow = 7; 
  } 

  mainTitle.classList.add("hidden");
  mainGrid.innerHTML = "";
  for (let i = 1; i <= squaresNumber; i++) {
    const newSquare = createSquare(i, squaresInRow);
    newSquare.addEventListener("click", handleSquareClick);
    mainGrid.append(newSquare);
  }

  mainGrid.classList.remove("hidden");
}

/**
 * Description: Funzione che crea un elemento html che rappresenta un quadrato della griglia
 * @param {number} innerNumber - numero da mostrare nel quadrato
 * @param {number} numberOfSquaresInRow - numero delle celle in una riga, che definisce le dimensioni di una cella
 * @returns {object} Elemento Html del quadrato
 */
function createSquare(innerNumber, numberOfSquaresInRow) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.width = `calc(100% / ${numberOfSquaresInRow})`;
  square.style.height = `calc(100% / ${numberOfSquaresInRow})`;
  square.innerHTML = `<span>${innerNumber}</span>`;
  return square;
}

/**
 * Description: Funzione che gestisce il click sullo square
 */
function handleSquareClick() {
  console.log(parseInt(this.textContent));
  this.classList.add("clicked");
}
