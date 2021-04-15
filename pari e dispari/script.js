// FUNZIONI

// la funzione genera un numero random tra 1 e 5 compresi
function genRandomNumber(min,max){
    // random() genera un numero tra 0 e 1
    var numeroComputer = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroComputer;
}

// una funzione che esegue la somma di due numeri 
function somma(num1,num2){
    var totale = num1 + num2;
    return totale;
}

// una funzione che determina se un numero è pari 
function isEven(possibileEven){
    var even = false;
    if(possibileEven % 2 === 0){
        even = true;
    }
    return even;
}



/****************************************************************************/
//CORPO DEL PROGRAMMA

// chiediamo l'input, un numero tra 1 e 5 compresi e "pari" o "dispari"
// var numeroUtente = parseInt(prompt("inserire un numero tra 1 e 5"));
// var pariOdispari = prompt("Vincerà pari o dispari?");

// controlliamo l'input
// facciamo sapere chi è il vincitore
