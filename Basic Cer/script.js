
// แสดงใน html
function display(id, value) {
    document.getElementById(id).innerHTML = "<b>" + value + "</b>"
}
// THB TO USD
function toUSD(bath) {
    let value = bath * 0.032
    return bath + " THB = " + value.toFixed(2) + " USD";
}
function toUSDProgram(value) {
    display("showUSD", toUSD(value))
}


// Thai Baht (THB) to Korean Won (KRW)
function toWon(bath) {
    let value = bath * 38.14
    return bath + " THB = " + value.toFixed(2) + " KRW";
}
function toWonProgram(value) {
    display("showWon", toWon(value))
}

// Thai Baht (THB) to Japanese Yen (JPY)
function toJPY(bath) {
    let value = bath * 3.42
    return bath + " THB = " + value.toFixed(2) + " JPY";
}
function toJPYProgram(value) {
    display("showJPY", toJPY(value))
}



// Thai Baht (THB) to Chinese Yuan Renminbi (CNY)
function toCNY(bath) {
    let value = bath * 0.22
    return bath + " THB = " + value.toFixed(2) + " CNY";
}
function toCNYProgram(value) {
    display("showCNY", toCNY(value))
}


// Thai Baht (THB) to Euro (EUR)
function toEUR(bath) {
    let value = bath * 0.027
    return bath + " THB = " + value.toFixed(2) + " EUR";
}
function toEURProgram(value) {
    display("showEUR", toEUR(value))
}

// British Pound (GBP)
function toGBP(bath) {
    let value = bath * 0.025
    return bath + " THB = " + value.toFixed(2) + " GBP";
}
function toGBPProgram(value) {
    display("showGBP", toGBP(value))
}