let qrt = prompt("จำนวนสินค้า")
let result = 0
for (let i = 1; i <= qrt; i++) {
    let item_price = prompt("ราคาชิ้นที่" + i)
    result = result + parseInt(item_price);

    document.getElementById("price-list").innerHTML += "ราคาสินค้าชิ้นที่" + i + " " +item_price + "บาท<br>"
    
}
document.getElementById("result").innerHTML = "ราคาทั้งหมด " + result + " บาท"



























// for (let index = 0; index <= 5; index++) {
//     console.log(index);
// }