function toCelsius(fahrenheit) {

    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + "°C" ;
}

function toFahrenheit(fahrenheit) {

    let value = (fahrenheit * 9) /5 +32
    return value.toFixed(2) + "°F" ;
}

function display(id, value) {
    document.getElementById(id).innerHTML = "<b>" + value + "</b>"
}

function toCelsiusProgram(value) {
    // alert(toCelsius(value))
    display("show", toCelsius(value) )
}
function toFahrenheitProgram(value) {
    // alert(toFahrenheit(value))
    display("show", toFahrenheit(value) )
}




