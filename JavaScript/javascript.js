
const datasetMahasiswa = [
    { nama: "Revianto", nilaiAljabar: 85, nilaistmek: 90, statusSKS: "Aman" },
    { nama: "toni", nilaiAljabar: 60, nilaistmek: 55, statusSKS: "Kurang" },
    { nama: "Wisnu", nilaiAljabar: 75, nilaistmek: 80, statusSKS: "Aman" },
    { nama: "liliec", nilaiAljabar: 45, nilaistmek: 50, statusSKS: "Kurang" },
    { nama: "oni darwin", nilaiAljabar: 95, nilaistmek: 95, statusSKS: "Aman" },
    { nama: "tumpa dayu", nilaiAljabar: 70, nilaistmek: 65, statusSKS: "Aman" }
];

console.log("=== DATA SCIENCE JavaScript ===");
console.log("Total data mahasiswa awal:", datasetMahasiswa.length, "orang.\n");

const butuhBimbingan = datasetMahasiswa.filter(mhs => mhs.nilaistmek < 70);

console.log("--- Mahasiswa yang Butuh Bimbingan stmek ---");
butuhBimbingan.forEach(mhs => {
    console.log(`- ${mhs.nama} (Nilai stmek: ${mhs.nilaistmek})`);
});
console.log("");

const totalNilaiAljabar = datasetMahasiswa.reduce((sum, mhs) => sum + mhs.nilaiAljabar, 0);
const rataRataAljabar = totalNilaiAljabar / datasetMahasiswa.length;

console.log("--- Analisis Statistik ---");
console.log("Rata-rata Nilai Aljabar Kelas:", rataRataAljabar.toFixed(2));