document.addEventListener("DOMContentLoaded", function () {
  fetch("../assets/data/data.js")
    .then((response) => response.json())
    .then((dataProduk) => {
      document
        .getElementById("buttonbandingkankiri")
        .addEventListener("click", function () {
          const input1 = document
            .getElementById("bandingkanForm1")
            .value.toLowerCase();
          const input2 = document
            .getElementById("bandingkanForm")
            .value.toLowerCase();

          const produk1 = dataProduk.find(
            (product) => product.nama_produk.toLowerCase() === input1
          );
          const produk2 = dataProduk.find(
            (product) => product.nama_produk.toLowerCase() === input2
          );

          if (produk1 && produk2) {
            localStorage.setItem("produk1", JSON.stringify(produk1));
            localStorage.setItem("produk2", JSON.stringify(produk2));
            window.location.href = "page-extra/page-search-banding.html";
          } else {
            alert("Satu atau kedua produk tidak ditemukan. Silakan coba lagi.");
          }
        });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
