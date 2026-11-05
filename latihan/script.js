function hitungLuasSegitiga(alas, tinggi) {
    return (alas * tinggi) / 2;
}

let LuasSegitiga1 = hitungLuasSegitiga(10, 5);
console.log("Luas Segitiga dengan alas 10 dan tinggi 5 adalah: " + LuasSegitiga1);
let LuasSegitiga2 = hitungLuasSegitiga(8, 6);
console.log("Luas Segitiga dengan alas 8 dan tinggi 6 adalah: " + LuasSegitiga2);

document.getElementById("luasSegitiga1").innerHTML = "Luas Segitiga dengan alas 10 dan tinggi 5 adalah: " + LuasSegitiga1;
document.getElementById("luasSegitiga2").innerHTML = "Luas Segitiga dengan alas 8 dan tinggi 6 adalah: " + LuasSegitiga2;
