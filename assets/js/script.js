var paragraph = document.getElementById('paragraph');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var vrImage1 = document.getElementById('vrLeft');
var vrImage2 = document.getElementById('vrRight');

const kotakKomponen1 = document.getElementById('kotakKomponen1');
const kotakKomponen2 = document.getElementById('kotakKomponen2');
const kotakKomponen3 = document.getElementById('kotakKomponen3');
const kotakKomponen4 = document.getElementById('kotakKomponen4');
const isiTengahKomponen = document.getElementById('isiTengahKomponen');
const isiTextKomponen = document.getElementById('isiTextKomponen');
const textKomponen = document.querySelector('.fw-semibold.fs-4');

var textForParagraph = [
    "Virtual Reality atau biasa kita sebut VR adalah suatu teknologi yang memungkinkan manusia untuk melihat dunia yang berbeda. Tidak seperti di dunia nyata, VR memberikan kita pengalaman yang berbeda dan menarik bagi penggunanya.",
    "Menurut KBBI, virtual memiliki tiga makna yaitu nyata, sangat mirip, dan makna yang terakhir virtual adalah hadir secara nyata dengan menggunakan alat komunikasi.",
    "VR adalah teknologi komputer yang dapat membuat pengguna mampu untuk berinteraksi dengan lingkungan di dalam dunia maya yang disimulasikan, sehingga terasa seperti di dalam lingkungan tersebut."
];

var pathImageVR = [
    'assets/img/vr/vr1.png',
    'assets/img/vr/vr2.png',
    'assets/img/vr/vr3.jpg',
    'assets/img/vr/vr4.jpg',
    'assets/img/vr/vr5.jpg',
    'assets/img/vr/vr6.jpg'
];

let currentIndex = 0;

function displayContent(index) {
    paragraph.innerHTML = textForParagraph[index];
    
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
}

nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % textForParagraph.length;
    displayContent(currentIndex);
});

prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + textForParagraph.length) % textForParagraph.length;
    displayContent(currentIndex);
});

displayContent(currentIndex);

fetch('/assets/data/komponen.json')
    .then(response => response.json())
    .then(data => {
        deskripsi = data;

        [kotakKomponen1, kotakKomponen2, kotakKomponen3, kotakKomponen4].forEach(kotak => {
            kotak.addEventListener('click', () => {
                const tempSrc = kotak.src.split('/').pop();
                const tengahSrc = isiTengahKomponen.src.split('/').pop();

                kotak.src = isiTengahKomponen.src;
                isiTengahKomponen.src = kotak.src.replace(tengahSrc, tempSrc);

                const deskripsiTengah = deskripsi[tempSrc];
                if (deskripsiTengah) {
                    isiTextKomponen.textContent = deskripsiTengah.text;
                    textKomponen.textContent = deskripsiTengah.title;
                } else {
                    console.error('Deskripsi untuk gambar ini tidak ditemukan:', tempSrc);
                }
            });
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));