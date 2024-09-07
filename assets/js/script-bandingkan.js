function fetchData() {
  fetch("/assets/data/data.js")
    .then((response) => response.json())
    .then((data) => {
      renderData(data);
      addFilterListeners(data); // Tambahkan listener setelah data di-render
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
}

function renderData(data) {
  let dataHTML = "";
  let filterModeColorSet = new Set();
  let filterModeBeratSet = new Set();
  let filterModeBateraiSet = new Set();
  let filterModeLebarSet = new Set();
  let filterModeRamSet = new Set();
  let filterModeStorageSet = new Set();
  let filterModeOsSet = new Set();

  data.forEach((item) => {
    let spesifikasiHTML = "";

    item.spesifikasi.forEach((spec) => {
      spesifikasiHTML += `
          <div class="spek gap-2 d-flex flex-column container">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col gap-2 d-flex justify-content-center align-items-center">
                <img src="../assets/icon/battery-full.png" alt="baterai"> 
                <p class="m-0 w-100">${spec.baterai}</p>
              </div>
              <div class="col gap-2 d-flex justify-content-center align-items-center">
                <img src="../assets/icon/memory.png" alt="memory"> 
                <p class="m-0 w-100">${spec.memory}</p>
              </div>
            </div>
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col gap-2 d-flex justify-content-center align-items-center">
                <img src="../assets/icon/resolusi.png" alt="resolusi"> 
                <p class="m-0 w-100">${spec.display[0].resolusi}</p>
              </div>
              <div class="col gap-2 d-flex justify-content-center align-items-center">
                <img src="../assets/icon/bg-icon.png" alt="bg"> 
                <p class="m-0 w-100">${spec.color}</p>
              </div>
            </div>
          </div>
        `;
      filterModeColorSet.add(spec.color);
      filterModeBeratSet.add(spec.berat);
      filterModeBateraiSet.add(spec.baterai);
      filterModeLebarSet.add(spec.lebar);
      filterModeRamSet.add(spec.memory);
      filterModeStorageSet.add(spec.storage);
      filterModeOsSet.add(spec.os);
    });

    let imgHTML = "";

    item.spesifikasi.forEach((spec) => {
      imgHTML += `
        <img class="w-25" src="${spec.img}" alt="">
          `;
    });

    dataHTML += `
        <div class="konten-items rounded-2 border position-relative d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <img class="position-absolute top-0 start-0 rounded-circle" width="30px" id="${item.nama_produk}" onclick="btnName('${item.nama_produk}')" src="../assets/icon/plus-bandingkan.png" alt="${item.nama_produk}">      
          ${imgHTML}
          <div class="w-75 m-3 text-start">
            <h4 class="fw-semibold mb-4">${item.nama_produk}</h4>
            <div class="spek gap-2 d-flex flex-column container">
              ${spesifikasiHTML}
            </div>
          </div>
        </div>
      `;
  });

  const containerFilterColor = document.getElementById("warna");
  if (containerFilterColor) {
    let filterModeHTML =
      '<option value="" disabled selected>Select Color</option>';
    filterModeColorSet.forEach((color) => {
      filterModeHTML += `<option value="${color}">${color}</option>`;
    });
    containerFilterColor.innerHTML = filterModeHTML;
  } else {
    console.error("filter ID 'warna' tidak ditemukan");
  }

  const containerFilterBerat = document.getElementById("berat");
  if (containerFilterBerat) {
    let filterModeHTML =
      '<option value="" disabled selected>Select berat</option>';
    filterModeBeratSet.forEach((berat) => {
      filterModeHTML += `<option value="${berat}">${berat}</option>`;
    });
    containerFilterBerat.innerHTML = filterModeHTML;
  } else {
    console.error("filter ID 'warna' tidak ditemukan");
  }

  const containerFilterBaterai = document.getElementById("baterai");
  if (containerFilterBaterai) {
    let filterModeHTML =
      '<option value="" disabled selected>Select baterai</option>';
    filterModeBateraiSet.forEach((baterai) => {
      filterModeHTML += `<option value="${baterai}">${baterai}</option>`;
    });
    containerFilterBaterai.innerHTML = filterModeHTML;
  } else {
    console.error("filter ID 'baterai' tidak ditemukan");
  }

  const containerFilterLebar = document.getElementById("lebar");
  if (containerFilterLebar) {
    let filterModeHTML =
      '<option value="" disabled selected>Select lebar</option>';
    filterModeLebarSet.forEach((lebar) => {
      filterModeHTML += `<option value="${lebar}">${lebar}</option>`;
    });
    containerFilterLebar.innerHTML = filterModeHTML;
  } else {
    console.error("filter ID 'Lebar' tidak ditemukan");
  }

  const containerFilterRam = document.getElementById("ram");
  if (containerFilterRam) {
    let filterModeHTML =
      '<option value="" disabled selected>Select ram</option>';
    filterModeRamSet.forEach((memory) => {
      filterModeHTML += `<option value="${memory}">${memory}</option>`;
    });
    containerFilterRam.innerHTML = filterModeHTML;
  } else {
    console.error("filter ID 'memory' tidak ditemukan");
  }

  const containerFilterStorage = document.getElementById("storage");
  if (containerFilterStorage) {
    let filterModeHTML =
      '<option value="" disabled selected>Select storage</option>';
    filterModeStorageSet.forEach((storage) => {
      filterModeHTML += `<option value="${storage}">${storage}</option>`;
    });
    containerFilterStorage.innerHTML = filterModeHTML;
  } else {
    console.error("filter ID 'storage' tidak ditemukan");
  }

  const containerFilterOs = document.getElementById("os");
  if (containerFilterOs) {
    let filterModeHTML =
      '<option value="" disabled selected>Select os</option>';
    filterModeOsSet.forEach((os) => {
      filterModeHTML += `<option value="${os}">${os}</option>`;
    });
    containerFilterOs.innerHTML = filterModeHTML;
  } else {
    console.error("filter ID 'os' tidak ditemukan");
  }

  const container = document.getElementById("data-container");
  if (container) {
    container.innerHTML = dataHTML;
  } else {
    console.error("Data ID 'data-container' tidak ditemukan");
  }
}

function applyFilters(data) {
  const selectedColor = document.getElementById("warna").value;
  const selectedBerat = document.getElementById("berat").value;
  const selectedBaterai = document.getElementById("baterai").value;
  const selectedLebar = document.getElementById("lebar").value;
  const selectedRam = document.getElementById("ram").value;
  const selectedStorage = document.getElementById("storage").value;
  const selectedOs = document.getElementById("os").value;

  let filteredData = data.filter(item => {
    return item.spesifikasi.some(spec => {
      return (
        (selectedColor === "" || spec.color === selectedColor) &&
        (selectedBerat === "" || spec.berat === selectedBerat) &&
        (selectedBaterai === "" || spec.baterai === selectedBaterai) &&
        (selectedLebar === "" || spec.lebar === selectedLebar) &&
        (selectedRam === "" || spec.memory === selectedRam) &&
        (selectedStorage === "" || spec.storage === selectedStorage) &&
        (selectedOs === "" || spec.os === selectedOs)
      );
    });
  });

  renderData(filteredData);
}

function addFilterListeners(data) {
  const filters = ["warna", "berat", "baterai", "lebar", "ram", "storage", "os"];
  filters.forEach(filter => {
    const filterElement = document.getElementById(filter);
    if (filterElement) {
      filterElement.addEventListener("change", () => applyFilters(data));
    }
  });
}
  window.onload = fetchData;

  function btnName(id) {

      fetch("/assets/data/data.js")
        .then((response) => response.json())
        .then((data) => {
              
    const namaProduk = id;
    const key1Previous = localStorage.getItem("produk1");


    const produkDipilih = JSON.parse(localStorage.getItem("produkDipilih")) || [];
    produkDipilih.push(namaProduk);
    localStorage.setItem("produkDipilih", JSON.stringify(produkDipilih));

    produk = data.find(produk => produk.nama_produk == namaProduk)

    console.log(produk)

    localStorage.setItem("produk1", JSON.stringify(produk));

    if (!key1Previous) {
        localStorage.setItem("produk2", "");
    } else {
        localStorage.setItem("produk2", key1Previous);
    }

    const produkListElement = document.getElementById("optionaddBanding");
    if (produkListElement) {
      const produkListHTML = produkDipilih
        .slice(-2)
        .map((produk) => {
          return `          
            <p class="p-1 pt-3">${produk}</p>
            <hr class="text-white">
              `;
        })
        .join("");
      produkListElement.innerHTML = produkListHTML;
    } else {
      console.error("Data ID 'optionaddBanding' tidak ditemukan");
    }
        })
        .catch((error) => {
          console.error("Terjadi kesalahan:", error);
        });
    }
  



  function toggleBanding() {
    const optionaddBanding = document.getElementById("optionaddBanding");
    optionaddBanding.classList.toggle("active");
  }


  function sliderBtn(id) {
    const sliderBtn = document.getElementById(id);
    sliderBtn.classList.toggle("active");
  }

  const bandingElement = document.getElementById("add-banding");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
      bandingElement.classList.add("sticky");
    } else {
      bandingElement.classList.remove("sticky");
    }
  });

  var cards = document.querySelectorAll('.konten-items');

  cards.forEach(function(card) {
    card.addEventListener('click', function() {
      window.location.href = '/page-extra/page-spec.html';
    });
  });

