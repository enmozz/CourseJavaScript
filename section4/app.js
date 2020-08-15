function toCelsius(fahrenheit) {

    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + "°C" ;
}
function display(id, value) {
    document.getElementById(id).innerHTML = "<b>" + value + "</b>"
}


display("toCelsius", toCelsius(120) )

function toFahrenheit(fahrenheit) {

    let value = (fahrenheit * 9) /5 +32
    return value.toFixed(2) + "°F" ;
}

display("toFahrenheit", toFahrenheit(48) )





// function toCelsius() {
//     let fahrenheit = prompt("Fahrenheit: ")
//     let value = (fahrenheit - 32) * 5 / 9
//     document.getElementById("toCelsius").innerHTML = value.toFixed(2) + "°C" ;
// }
// toCelsius()

// function toFahrenheit() {
//     let fahrenheit = prompt("Celsius: ")
//     let value = (fahrenheit * 9) /5 +32
//     document.getElementById("toFahrenheit").innerHTML = value.toFixed(2) + "°F" ;
// }
// toFahrenheit()