let round = prompt("เล่นกี่รอบ")
let win = 0

for (let index = 1; index <= round; index++) {
    let answer = prompt("0 or 1")
    let random_answer = ""

    
    if (Math.floor(Math.random() * 10) <= 4) {
        // 0
        random_answer = "0"
    }
    else{
        // 1
        random_answer = "1"
    }

    if (answer == random_answer) {
        alert("ตอบถูก")
        win++
    }
    else
        alert("ตอบผิด")
    console.log(random_answer + " " + answer)

    document.getElementById("game-list").innerHTML += "รอบที่ " + index + " คุณตอบ " + random_answer + " เฉลย" + answer + "<br>"
}

document.getElementById("result").innerHTML = "เล่นทั้งหมด " + round + " รอบ  ชนะ " + win + " รอบ"