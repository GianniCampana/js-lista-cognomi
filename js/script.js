

var lista_cognomi = ["rossi", "verdi", "bianchi", "esposito", "fontana"];
lista_cognomi.push (prompt("inserisci il tuo cognome"));
lista_cognomi.sort();

for(var i=0; i< lista_cognomi.length; i++){
    var elemento = lista_cognomi[i];
    elemento_precedente = document.getElementById("nomi").innerHTML;
    document.getElementById("nomi").innerHTML = elemento_precedente + "<li>" + elemento + "</li>";
}





