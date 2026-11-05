
function hitung(operator) {

    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;

    let hasil = document.getElementById("hasil");

    if (angka1 === "" || angka2 === "") {
        hasil.textContent = "Masukkan kedua angka dahulu!";
        return;
    }

    angka1 = Number(angka1);
    angka2 = Number(angka2);

    let hasilHitung;

    if (operator === "+") {
        hasilHitung = angka1 + angka2;
    }

    else if (operator === "-") {
        hasilHitung = angka1 - angka2;
    }

    else if (operator === "*") {
        hasilHitung = angka1 * angka2;
    }

    else if (operator === "/") {

        if (angka2 === 0) {
            hasil.textContent = "Tidak bisa dibagi nol!";
            return;
        }

        hasilHitung = angka1 / angka2;
    }

    hasil.textContent = "Hasil: " + hasilHitung;
}


function resetKalkulator() {

    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";

    document.getElementById("hasil").textContent =
        "Hasil akan muncul di sini";

}
