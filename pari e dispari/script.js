// FUNZIONI

// la funzione genera un numero random tra 1 e 5 compresi
function genRandomNumber(min, max) {
    // random() genera un numero tra 0 e 1
    var numeroComputer = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroComputer;
}

// una funzione che esegue la somma di due numeri 
function somma(num1, num2) {
    var totale = num1 + num2;
    return totale;
}

// una funzione che determina se un numero è pari 
function isEven(possibileEven) {
    var even = false;
    if (possibileEven % 2 === 0) {
        even = true;
    }
    return even;
}

// controllo della stringa d'input, utilizziamo una funzione 
// ritorna "NaN"
function isAstring(testo) {
    // Se parsInt riceve un valore che non sia un numero, ritorna "NaN"
    var possibleNumber = parseInt(testo);

    return Number.isNaN(possibleNumber);
} /*grazie Florian*/



/****************************************************************************/
//CORPO DEL PROGRAMMA

// chiediamo l'input, un numero tra 1 e 5 compresi e "pari" o "dispari"
var numeroUtente = parseInt(prompt("inserire un numero tra 1 e 5"));
var pariOdispari = prompt("Vincerà pari o dispari?");

// controlliamo l'input
if (isAstring(numeroUtente)) {
    console.log("inserire un numero compreso tra 1 e 5");
} else if (pariOdispari !== "pari" && pariOdispari !== "dispari") {
    console.log("scegliere se il risultato sarà pari o dispari");
} else {
    /* genera un numero random per il computer compreso tra 1 e 5 e lo somma a quello dell'utente */
    var numeroComputer = genRandomNumber(1, 5);
    var sum = somma(numeroComputer, numeroUtente);

    // valutiamo se la somma è pari o dispari 
    // facciamo sapere chi è il vincitore
    if (isEven(sum) && pariOdispari === "pari") {
        console.log("complimenti hai vinto");
    } else if (!isEven(sum) && pariOdispari === "dispari") {
        console.log("complimenti hai vinto");
    } else {
        console.log("mi dispiace ritenta");
    }

    
}

// output per testare
console.log("il numero immmesso è: " + numeroUtente);
console.log("la puntata immessa è: " + pariOdispari);
console.log("il numero generato è: " + numeroComputer);
console.log("la somma è: " + sum);
console.log(isEven(sum));

