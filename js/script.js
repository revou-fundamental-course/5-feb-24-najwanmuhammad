let rumus = document.getElementById("rumus");

let nilai_awal = document.getElementById("nilai_awal");
let nillai_akhir = document.getElementById("nillai_akhir");

let kalkulasi;


function calculate() {
    kalkulasi = nilai_awal.value * (9 / 5) + 32;
    nillai_akhir.value = `${kalkulasi}`;
    rumus.value = `${nilai_awal.value} * (9/5) + 32 = ${kalkulasi}°F`;
}

function reset() {
    nilai_awal.value = "";
    nillai_akhir.value = "";
    rumus.value = "";
}