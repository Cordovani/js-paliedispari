// dichiariamo le funzioni prima di utilizzarle

// prendiamo la stringa di input dell'utente, facciamone una funzione riutilizzabile 
function inputStringaPrompt() {
    var input = prompt("si prega di inserire una stringa");
    return input;
}

// controllo della stringa d'input, utilizziamo una funzione 
// ritorna "NaN"
function isAstring(testo) {
    // Se parsInt riceve un valore che non sia un numero, ritorna "NaN"
    var possibleNumber = parseInt(testo);

    return Number.isNaN(possibleNumber);
} /*grazie Florian*/

// controlliamo se la stringa inserita è palindroma attraverso una funzione isPalindrome()
function isPalindrome(stringaSePalindroma) {

    // utilizzo 2 cicli per scandire le due stringhe mi fermo se i caratteri confrontati non corrispondono o a metà della stringa
    for (var i = 0; i < stringaSePalindroma.length / 2; i++) {

        var lunghezzaParola = stringaSePalindroma.length;

        // valuto se la stringa non è palindroma e esco dal ciclo
        if (stringaSePalindroma[i] !== stringaSePalindroma[lunghezzaParola - i - 1]) {
            // console.log("la stringa inserita non è palindroma");
            // setto i alla lunghezza della stringa per uscire dal ciclo o utilizzo break;
            return false;
        }
    }

    return true;

}

/********************************************************************************************************************************************/
//corpo del programma
var stringaInput = inputStringaPrompt();

if (isAstring(stringaInput) && isPalindrome(stringaInput)) { /*caso sia una stringa palindroma */
    console.log("la stringa " + stringaInput + " è palindroma");

} else if (isAstring(stringaInput) && (!isPalindrome(stringaInput))) { /* caso sia una stringa ma non palindroma*/ 
    console.log("la stringa " + stringaInput + " non è palindroma");

} else {
    consol.log("si prega di inserire una stringa"); /*caso non sia una stringa*/
}


//proviamo stringhe palindrome non e numeri
//"i topi non avevano nipoti",  , 