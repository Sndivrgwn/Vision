const kotakKomponen1 = document.getElementById('kotakKomponen1');
const kotakKomponen2 = document.getElementById('kotakKomponen2');
const kotakKomponen3 = document.getElementById('kotakKomponen3');
const kotakKomponen4 = document.getElementById('kotakKomponen4');
const isiTengahKomponen = document.getElementById('isiTengahKomponen');
const isiTextKomponen = document.getElementById('isiTextKomponen');
const textKomponen = document.querySelector('.fw-semibold.fs-4');

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