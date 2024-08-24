function fetchData() {
    fetch("/assets/data/data.js")
      .then((response) => response.json())
      .then((data) => {
        renderData(data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  }
  
  function renderData(data) {
    let dataHTML = "";
    let isiHTML = "";
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
        <div class="konten-items rounded-2 border position-relative d-flex justify-content-center align-items-center">
          <img class="position-absolute top-0 start-0" width="30px" onclick="btnName('${item.nama_produk}')" src="../assets/icon/plus-bandingkan.png" alt="${item.nama_produk}">      
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
      console.error("filter ID 'berat' tidak ditemukan");
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
  
  window.onload = fetchData;
  
  // filter
  function btnName(id) {
    const namaProduk = id;
    const produkDipilih = JSON.parse(localStorage.getItem("produkDipilih")) || [];
    produkDipilih.push(namaProduk);
    localStorage.setItem("produkDipilih", JSON.stringify(produkDipilih));
  
    const produkListElement = document.getElementById("optionaddBanding");
    if (produkListElement) {
      const produkListHTML = produkDipilih.slice(-2)
        .map((produk,) => {
          return `          
          <p class="p-1 pt-3">${produk}</p>
          <hr class="text-white">
            `;
        })
        .join("");
      produkListElement.innerHTML = produkListHTML;
    } else {
      console.error("Element with ID 'optionaddBanding' not found");
    }
  }
  
  function sliderBtn(id) {
    const sliderBtn = document.getElementById(id);
    sliderBtn.classList.toggle("active");
  }
  
  function toggleBanding() {
    const optionaddBanding = document.getElementById("optionaddBanding");
    optionaddBanding.classList.toggle("active");
  }
  
  const bandingElement = document.getElementById("add-banding");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
      bandingElement.classList.add("sticky");
    } else {
      bandingElement.classList.remove("sticky");
    }
  });
  