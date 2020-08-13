
// let number = 3 + 3

// console.log(number);

// const name = '55555';
// console.log(5*50);

// var aaa = 199
// {var aaa = 99}

// console.log(aaa);

let lotto = prompt("กรอกเลข");
console.log(lotto);

random_lotto = Math.floor(Math.random() * 1000);
console.log(random_lotto)

document.getElementById("random").innerHTML = "เลขที่ออก " + random_lotto
document.getElementById("result2").innerHTML = "เลขที่ซื้อ " +lotto

if (lotto === random_lotto) {
    document.getElementById("result").innerHTML = "ยีนดีด้วยคุณถูกรางวัล"
}
else{
    document.getElementById("result").innerHTML = "คุณไม่ถูกรางวัล"
}

// console.log(1 == 1)
// console.log(3 == "3")
// console.log(3 === "3")

// console.log("3" != "3")
// console.log("hi" != "HI")
// console.log(4 != "4")       //ข้อมมูล
// console.log(4 !== "4")      //type และ ข้อมูล
// console.log(4 >= 3)


