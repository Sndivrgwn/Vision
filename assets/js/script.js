const kotakKomponen1 = document.getElementById("kotakKomponen1");
const kotakKomponen2 = document.getElementById("kotakKomponen2");
const kotakKomponen3 = document.getElementById("kotakKomponen3");
const kotakKomponen4 = document.getElementById("kotakKomponen4");
const isiTengahKomponen = document.getElementById("isiTengahKomponen");
const isiTextKomponen = document.getElementById("isiTextKomponen");
const textKomponen = document.querySelector(".fw-semibold.fs-4");

const deskripsi = {
  "controller.png": {
    title: "Controller VR",
    text: "Controller pada VR digunakan untuk berinteraksi dengan dunia virtual. Controller ini memiliki beberapa tombol yang dapat digunakan untuk berbagai aksi.",
  },
  "komponen.png": {
    title: "Speaker VR",
    text: "Speaker VR memberikan kualitas suara yang mendalam dan realistis, menambah imersi pengguna dalam dunia virtual.",
  },
  "ikatKepala.png": {
    title: "Ikat Kepala VR",
    text: "Ikat Kepala VR ini memastikan bahwa perangkat VR tetap pada posisinya saat digunakan, memberikan kenyamanan dan stabilitas.",
  },
  "mesin.png": {
    title: "Mesin VR",
    text: "Mesin VR adalah inti dari perangkat, yang memproses semua data dan grafis yang dibutuhkan untuk pengalaman virtual.",
  },
  "vrkomponen.png": {
    title: "Kacamata VR",
    text: "Layar VR penting karena memungkinkan melihat dunia virtual dengan tampilan warna tajam dan resolusi tinggi.",
  },
};

[kotakKomponen1, kotakKomponen2, kotakKomponen3, kotakKomponen4].forEach(
  (kotak) => {
    kotak.addEventListener("click", () => {
      const tempSrc = kotak.src.split("/").pop();
      const tengahSrc = isiTengahKomponen.src.split("/").pop();

      kotak.src = isiTengahKomponen.src;
      isiTengahKomponen.src = kotak.src.replace(tengahSrc, tempSrc);
      
      const deskripsiTengah = deskripsi[tempSrc];
      if (deskripsiTengah) {
        isiTextKomponen.textContent = deskripsiTengah.text;
        textKomponen.textContent = deskripsiTengah.title;
      } else {
        console.error("Deskripsi untuk gambar ini tidak ditemukan:", tempSrc);
      }
    });
  }
);
