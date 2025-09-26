/** List data produk awal minimal 5 **/
let produkList = [
  { nama: "Laptop", harga: 10000000 },
  { nama: "Smartphone", harga: 5000000 },
  { nama: "Headset", harga: 500000 },
  { nama: "Keyboard", harga: 350000 },
  { nama: "Mouse", harga: 200000 },
];

/** Menampilkan semua produk (pakai destructuring di dalam forEach) **/
const tampilkanProduk = () => {
  const tbody = document.getElementById("tabelProduk");
  tbody.innerHTML = "";

  produkList.forEach((p, index) => {
    // Destructuring object
    const { nama, harga } = p;

    const row = document.createElement("tr");
    row.innerHTML = `
              <td>${nama}</td>
              <td>Rp ${harga.toLocaleString()}</td>
              <td class="text-center">
                <button class="btn btn-danger btn-sm btn-custom" onclick="hapusProduk(${index})">Hapus</button>
              </td>
            `;
    tbody.appendChild(row);
  });
};

/** Event Listener untuk tambah produk **/
document.getElementById("formProduk").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("namaProduk").value;
  const harga = parseInt(document.getElementById("hargaProduk").value);

  if (nama && harga) {
    const produkBaru = { nama, harga };

    // Spread Operator → membuat array baru dengan menambahkan produkBaru
    produkList = [...produkList, produkBaru];

    tampilkanProduk();
    this.reset();
  }
});

/** Menghapus produk (pakai Rest Parameter) **/
function hapusProduk(...index) {
  if (confirm("Yakin ingin menghapus produk ini?")) {
    // index[0] karena rest param bisa menampung banyak argumen
    produkList = produkList.filter((_, i) => i !== index[0]);
    tampilkanProduk();
  }
}

/** Panggil saat awal halaman diload **/
tampilkanProduk();
