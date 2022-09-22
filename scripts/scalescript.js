function test() {
    document.write("welcome to Javatpoint");  
}  
 

function calcRL() {

    //get vars von den 3 werten
    var modell = document.getElementById("ml").value;
    var massstab = document.getElementById("ms").value;

    var modellEinheit = document.getElementById("mlOpt").value;
    var realitaetEinheit = document.getElementById("rlOpt").value;

    //set realität = (((modell*einheitML) * maßstab)/einheitRL)
    document.getElementById("rl").value = (((modell*modellEinheit) * massstab) / realitaetEinheit)
}

function calcML() {
    //get vars von den 3 werten
    var massstab = document.getElementById("ms").value;
    var realitaet = document.getElementById("rl").value;

    var modellEinheit = document.getElementById("mlOpt").value;
    var realitaetEinheit = document.getElementById("rlOpt").value;

    //set modell*einheit = (realität*einheit) / maßstab
    document.getElementById("ml").value = (((realitaet*realitaetEinheit) / massstab) / modellEinheit)
}

function calcMS() {
    //get vars von den 3 werten
    var modell = document.getElementById("ml").value;
    var realitaet = document.getElementById("rl").value;

    var modellEinheit = document.getElementById("mlOpt").value;
    var realitaetEinheit = document.getElementById("rlOpt").value;

    //set maßstab= (realität*einheit) / (modell*einheit)
    document.getElementById("ms").value = ((realitaet*realitaetEinheit) / (modell*modellEinheit))
}