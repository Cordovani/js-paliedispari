// dichiariamo le funzioni prima di utilizzarle

// prendiamo la stringa di input dell'utente, facciamone una funzione riutilizzabile 
function inputStringaPrompt() {
    var input = prompt("si prega di inserire una stringa");
    return input;
}

console.log(input);

// controllo della stringa d'input, utilizziamo una funzione 
// ritorna "NaN"
function isAstring(testo) {
    // Se parsInt riceve un valore che non sia un numero, ritorna "NaN"
    var possibleNumber = parseInt(testo);

    return Number.isNaN(possibleNumber);
}
//grazie Florian

// controlliamo se la stringa inserita è palindroma attraverso una funzione isPalindrome()

// visualizziamo l'output in console stringa e se è palindroma

//corpo del programma
var stringaInput = inputStringaPrompt();

if (isAstring(stringaInput)) {

} else {
    console.log("si prega di inserire una stringa");
}


