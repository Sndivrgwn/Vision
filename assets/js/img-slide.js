var paragraph = document.getElementById("paragraph");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var vrImage1 = document.getElementById("vrLeft");
var vrImage2 = document.getElementById("vrRight");

document.getElementById("navButton").addEventListener("click", function () {
  const navContent = document.querySelector(".nav-content");
  navContent.classList.toggle("open");
});

var textForParagraph = [
  "Virtual Reality atau biasa kita sebut VR adalah suatu teknologi yang memungkinkan manusia untuk melihat dunia yang berbeda. Tidak seperti di dunia nyata, VR memberikan kita pengalaman yang berbeda dan menarik bagi penggunanya.",
  "Menurut KBBI, virtual memiliki tiga makna yaitu nyata, sangat mirip, dan makna yang terakhir virtual adalah hadir secara nyata dengan menggunakan alat komunikasi.",
  "VR adalah teknologi komputer yang dapat membuat pengguna mampu untuk berinteraksi dengan lingkungan di dalam dunia maya yang disimulasikan, sehingga terasa seperti di dalam lingkungan tersebut.",
];

var pathImageVR = [
  "assets/img/vr/vr1.png",
  "assets/img/vr/vr2.png",
  "assets/img/vr/vr3.jpg",
  "assets/img/vr/vr4.jpg",
  "assets/img/vr/vr5.jpg",
  "assets/img/vr/vr6.jpg",
];

let currentIndex = 0;

function displayContent(index, direction) {
  vrImage1.classList.remove(
    "image-slide-left",
    "image-slide-right",
    "image-active"
  );
  vrImage2.classList.remove(
    "image-slide-left",
    "image-slide-right",
    "image-active"
  );

  if (direction === "next") {
    vrImage1.classList.add("image-slide-left");
    vrImage2.classList.add("image-slide-left");
  } else {
    vrImage1.classList.add("image-slide-right");
    vrImage2.classList.add("image-slide-right");
  }

  setTimeout(() => {
    if (index === 0) {
      vrImage1.src = pathImageVR[0];
      vrImage2.src = pathImageVR[1];
    } else if (index === 1) {
      vrImage1.src = pathImageVR[2];
      vrImage2.src = pathImageVR[3];
    } else {
      vrImage1.src = pathImageVR[4];
      vrImage2.src = pathImageVR[5];
    }

    vrImage1.classList.add("image-active");
    vrImage2.classList.add("image-active");
  }, 500);

  paragraph.innerHTML = textForParagraph[index];
}

nextBtn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % textForParagraph.length;
  displayContent(currentIndex, "next");
});

prevBtn.addEventListener("click", function () {
  currentIndex =
    (currentIndex - 1 + textForParagraph.length) % textForParagraph.length;
  displayContent(currentIndex, "prev");
});

displayContent(currentIndex, "next");

const slides = [
  {
    imgSrc: "assets/img/Group 139.png",
    text: "Kacamata VR",
  },
  {
    imgSrc: "assets/img/download 2.png",
    text: "Dunia Berbeda",
  },
  {
    imgSrc: "assets/img/images 2.png",
    text: "Pengalaman Baru",
  },
];

let i = 0;
const imageElement = document.querySelector(".item1 img");
const textElement = document.querySelector(".item1 .teks1");

const mediaQuery = window.matchMedia("(max-width: 620px)");

function updateSlide() {
  if (mediaQuery.matches) {
    imageElement.classList.add("hidden");
    textElement.classList.add("hidden");

    setTimeout(() => {
      imageElement.src = slides[i].imgSrc;
      textElement.textContent = slides[i].text;

      setTimeout(() => {
        imageElement.classList.remove("hidden");
        textElement.classList.remove("hidden");
      }, 10); // Memberi sedikit jeda agar transisi berjalan dengan benar

      i = (i + 1) % slides.length;
    }, 500); // Waktu ini harus sesuai dengan durasi transisi di CSS (0.5s)
  }
}

function handleScreenSizeChange(e) {
  if (e.matches) {
    slideInterval = setInterval(updateSlide, 2000);
  } else {
    clearInterval(slideInterval);
  }
}

let slideInterval;
handleScreenSizeChange(mediaQuery);
mediaQuery.addEventListener("change", handleScreenSizeChange);
