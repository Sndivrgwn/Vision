function fetchData() {
    fetch("../assets/data/data.js")
      .then((response) => response.json())
      .then((data) => {
        renderData(data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  }
  
  function renderData(data) {
    let isiHTML = "";
  
    data.forEach((item, index) => {
      if (index < 1) {
        let spesifikasiHTML = "";
        item.spesifikasi.forEach((spec, i) => {
          if (i < 1) {
            spesifikasiHTML += `           
            <div class="d-flex justify-content-center  align-items-start gap-4">
               <div
                 class="w-50 ms-5 gap-4 d-flex justify-content-center align-items-center flex-column"
               >
                 <div class="grafik">
                   <img src="../assets/img/img-bandingkan/grafik.png" width="400px" alt="" />
                 </div>
                 <div class="stroge p-4 w-100 px-5">
                   <div class="judul fw-semibold">
                     <p class="fs-6 fw-semibold">STORAGE</p>
                   </div>
                   <div class="kobtainer d-flex justify-content-between gap-2">
                     <div class="judul-text text-start">
                       <p class="fs-2 m-0 fw-semibold">${data[index + 0].spesifikasi[0].storage}</p>
                       <p style="font-size: 10px">
                         NVME 4X4, ULTRA SPEED READ & WRITE
                       </p>
                     </div>
                     <p class="fs-2 fw-semibold">V</p>
                     <div class="judul-text text-end">
                       <p class="fs-2 m-0 fw-semibold">${data[index + 1].spesifikasi[0].storage}</p>
                       <p style="font-size: 10px">
                         NVME 4X4, ULTRA SPEED READ & WRITE
                       </p>
                     </div>
                   </div>
                 </div>
                 <div class="vga w-100 p-4 px-5">
                   <div class="text-start">
                     <p class="fs-6 fw-semibold">VGA</p>
                   </div>
                   <div style="font-size: 12px">
                     <table class="table table-borderless text-center">
                       <thead>
                         <tr style="background-color: #efefef">
                           <td style="background-color: #efefef" scope="col"></td>
                           <td scope="col" style="background-color: #efefef">
                             CLOCK SPEED
                           </td>
                           <td scope="col" style="background-color: #efefef">
                             VRAM
                           </td>
                           <td scope="col" style="background-color: #efefef">DDR</td>
                           <td scope="col" style="background-color: #efefef">
                             OVERALL
                           </td>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <td
                             style="background-color: #d9d9d9"
                             class="fs-6 fw-semibold"
                             scope="row"
                           >
                           ${data[index + 0].spesifikasi[0].vga}
                           </td>
                           <td style="background-color: #c1c1c1">2330Mhz</td>
                           <td style="background-color: #d9d9d9">24GB</td>
                           <td style="background-color: #c1c1c1">DDR6</td>
                           <td style="background-color: #d9d9d9; width: 35%; ">
                             <div class="text-start">
                               <p>72 POINT</p>
                               <div class="bg-white my-2 me-4 rounded-pill">
                                 <div class="d-flex rounded-pill justify-content-center text-white bg-danger align-content-center text-center" style="width: ${data[index + 0].spesifikasi[0].overal};">
                                   <p class="p-0 m-0" >${data[index + 0].spesifikasi[0].overal}</p>
                                 </div>
                               </div>
                             </div>
                           </td>
                         </tr>
                         <tr>
                           <td
                             style="background-color: #d9d9d9"
                             class="fs-6 fw-semibold"
                             scope="row"
                           >
                           ${data[index + 1].spesifikasi[0].vga}
                           </td>
                           <td style="background-color: #c1c1c1">2330Mhz</td>
                           <td style="background-color: #d9d9d9">24GB</td>
                           <td style="background-color: #c1c1c1">DDR6</td>
                           <td style="background-color: #d9d9d9; width: 35%;"  > 
                             <div class="text-start">
                               <p>78 POINT</p>
                               <div class="bg-white my-2 me-4 rounded-pill">
                                 <div class="d-flex rounded-pill justify-content-center text-white bg-info align-content-center text-center" style="width: ${data[index + 1].spesifikasi[0].overal};">
                                   <p class="p-0 m-0" >${data[index + 1].spesifikasi[0].overal}</p>
                                 </div>
                               </div>
                             </div>
                           </td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                 </div>
                 <div class="Batenmer w-100 d-flex gap-3">
                   <div class="baterai-screen">
                     <div class="title p-4 pb-0">
                       <p class="fs-6 fw-semibold">BATTERY</p>
                     </div>
                     <div style="font-size: 12px" class="d-flex flex-column gap-2">
                       <div class="px-4">
                         <div
                           class="d-flex flex-column justify-content-center align-items-start gap-1"
                         >
                           <div class="kotak-name-m text-center rounded-pill">
                             <p class="px-3 m-0 text-white">${data[index + 0].nama_produk}</p>
                           </div>
                           <p>LION PRO LI-THIU 20.000 MAH + ${data[index + 0].spesifikasi[0].baterai}</p>
                         </div>
                         <div
                           class="d-flex flex-column justify-content-center align-items-start gap-1"
                         >
                           <div class="kotak-name-b text-center rounded-pill">
                             <p class="px-3 m-0 text-white">${data[index + 1].nama_produk}</p>
                           </div>
                           <p>LION PRO LI-THIU 20.000 MAH + ${data[index + 1].spesifikasi[0].baterai}</p>
                         </div>
                       </div>
                       <div
                         class="screen d-flex justify-content-end align-items-end gap-2"
                       >
                         <div class="ovel-screen"></div>
                         <div class="text-end p-4 pb-0">
                           <div class="title">
                             <p class="fs-6 fw-semibold">SCREEN</p>
                           </div>
                           <div
                             class="d-flex flex-column justify-content-center align-items-end"
                           >
                             <div
                               class="d-flex flex-column justify-content-center align-items-end gap-1"
                             >
                               <div class="kotak-name-m text-center rounded-pill">
                                 <p class="px-3 m-0 text-white">${data[index + 0].nama_produk}</p>
                               </div>
                               <p>${data[index + 0].spesifikasi[0].display[0].tipe_layar}, ${data[index + 0].spesifikasi[0].display[0].kecepatan_refresh}</p>
                             </div>
                             <div
                               class="d-flex flex-column justify-content-center align-items-end gap-1"
                             >
                               <div class="kotak-name-b text-center rounded-pill">
                                 <p class="px-3 m-0 text-white">${data[index + 1].nama_produk}</p>
                               </div>
                               <p>${data[index + 1].spesifikasi[0].display[0].tipe_layar}, ${data[index + 1].spesifikasi[0].display[0].kecepatan_refresh}</p>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div class="memory p-4">
                     <div class="judul fw-semibold">
                       <p class="fs-6 fw-semibold">MEMORY</p>
                     </div>
                     <table
                       class="table table-borderless d-flex justify-content-between align-items-center gap-2 flex-column"
                       style="font-size: 12px"
                     >
                       <thead>
                         <tr>
                           <th scope="col" style="background-color: #efefef">
                             <div class="kotak-name-m text-center rounded-pill">
                               <p class="px-3 m-0 text-white">${data[index + 0].nama_produk}</p>
                             </div>
                           </th>
                           <th scope="col" style="background-color: #efefef">
                             <div class="kotak-name-b text-center rounded-pill">
                               <p class="px-3 m-0 text-white">${data[index + 1].nama_produk}</p>
                             </div>
                           </th>
                         </tr>
                       </thead>
                       <tbody class="container">
                         <tr class="row pb-2">
                           <td class="col" style="background-color: #d9d9d9">
                             DDR5
                           </td>
                           <td class="col" style="background-color: #d9d9d9">
                             DDR5X
                           </td>
                         </tr>
                         <tr class="row pb-2">
                           <td class="col" style="background-color: #d9d9d9">
                           ${data[index + 0].spesifikasi[0].memory}
                           </td>
                           <td class="col" style="background-color: #d9d9d9">
                           ${data[index + 1].spesifikasi[0].memory}
                           </td>
                         </tr>
                         <tr class="row pb-2">
                           <td class="col" style="background-color: #d9d9d9">
                             DUAL CHANNEL
                           </td>
                           <td class="col" style="background-color: #d9d9d9">
                             DUAL CHANNEL
                           </td>
                         </tr>
                         <tr class="row pb-2">
                           <td class="col" style="background-color: #d9d9d9">
                             3200Mhz
                           </td>
                           <td class="col" style="background-color: #d9d9d9">
                             2800Mhz
                           </td>
                         </tr>
                         <tr class="row" style="background-color: #efefef">
                           <td class="col" style="background-color: #efefef">
                             <p class="m-0" style="background-color: #efefef">83 percent</p>
                             <div class="bg-white my-2 rounded-pill">
                               <div class="d-flex rounded-pill justify-content-center text-white bg-danger align-content-center text-center" style="width: 83%;">
                                 <p class="p-0 m-0" >83%</p>
                               </div>
                             </div>
                           </td>
                           <td class="col" style="background-color: #efefef">
                             <p class="m-0" style="background-color: #efefef">78 percent</p>
                             <div class="bg-white my-2 rounded-pill">
                               <div class="d-flex rounded-pill justify-content-center text-white bg-info align-content-center text-center" style="width: 78%;">
                                 <p class="p-0 m-0" >78%</p>
                               </div>
                             </div>
                           </td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                 </div>
               </div>
               <div class="w-50 me-5">
                 <div class="prosesor w-100">
                   <div class="container pb-5" style="font-size: 12px ; background-color: #FDF1F1;">
                     <div class="row px-4 pb-3 pt-4">
                       <div class="col d-flex justify-content-center">
                         <div class="kotak-name-m text-center rounded-pill">
                           <p class="px-3 py-2 m-0 text-white">${data[index + 0].nama_produk}</p>
                         </div>
                       </div>
                       <div class="col d-flex justify-content-center ">
                         <div class="kotak-name-b text-center rounded-pill">
                           <p class="px-3 py-2 m-0 text-white">${data[index + 1].nama_produk}</p>
                         </div>
                       </div>
                     </div>
                     <div class="row px-4 py-2" style="background-color: #C1C1C1;">
                       <div class="col">
                         <p class="m-0">${data[index + 0].spesifikasi[0].prosesor}</p>
                       </div>
                       <div class="col">
                         <p class="m-0">${data[index + 0].spesifikasi[0].prosesor}</p>
                       </div>
                     </div>
                     <div class="row px-4 pt-3 pb-5">
                       <div class="col">
                         <p>
                           Memberikan performa luar biasa dalam pemrosesan data,
                           grafis, dan pengalaman pengguna secara keseluruhan. Dengan
                           fitur overclocking, dukungan untuk memori cepat, dan
                           konektivitas terbaru, prosesor ini siap menghadapi
                           tuntutan aplikasi VR paling canggih saat ini
                         </p>
                       </div>
                       <div class="col">
                         <p>
                           Penggunaan CPU yang tinggi terhadap Genshin Impact
                           menggunakan Intel ARC A750. Gagap sering, 1-5 detik
                           pembekuan.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div class="os p-4 my-4">
                   <div class="judul">
                     <p class="fs-6 fw-semibold m-0">OPERASI SISTEM</p>
                     <p style="font-size: 10px; ">Kecepatan dan Responsivitas UI</p>
                   </div>
                   <div class="merah p-5 py-0">
                     <p>${data[index + 0].spesifikasi[0].os}</p>
                     <div class="bg-white rounded-pill">
                       <div class="d-flex rounded-pill justify-content-center text-white bg-danger align-content-center text-center" style="width: 95%;">
                         <p class="p-0 m-0" >95%</p>
                       </div>  
                     </div>
                   </div>
                   <div class="merah p-5 py-0">
                     <p class="pt-3">${data[index + 1].spesifikasi[0].os}</p>
                     <div class="bg-white rounded-pill">
                       <div class="d-flex rounded-pill justify-content-center text-white bg-info align-content-center text-center" style="width: 90%;">
                         <p class="p-0 m-0" >90%</p>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div class="fitur p-4 d-flex justify-content-between flex-column align-content-center">
                   <div>
                     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                       <div class="carousel-indicators">
                         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active px-3 py-1 rounded-3" aria-current="true" aria-label="Slide 1"></button>
                         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="px-3 py-1 rounded-3" aria-label="Slide 2"></button>
                       </div>
                       <div class="carousel-inner" style="font-size: 12px;">
                         <div class="carousel-item active">
                           <div class="d-flex justify-content-between align-items-center">
                             <div class="judul fw-semibold">
                               <p class="fs-6 fw-semibold m-0">FITUR</p>
                             </div>
                             <div
                               class="bg-danger py-1 px-4 rounded-pill d-flex justify-content-center text-center align-items-center">
                               <p class="m-0 text-white">${data[index + 0].nama_produk}</p>
                             </div>
                           </div>
                           <div class="d-flex px-5 justify-content-center align-items-center">
                             <div class="row gx-5 gy-3 p-5 d-flex justify-content-center align-items-center">
                               <div class="col-6 align-items-center d-flex p-2">
                                 <img src="../assets/icon/check.png" alt="Checked" class="me-2 border rounded p-2">
                                 <p class="mb-0 fw-semibold">${data[index + 0].spesifikasi[0].fitur[0]}</p>
                               </div>
                               <div class="col-6 align-items-center d-flex  p-2">
                                 <img src="../assets/icon/check.png" alt="Checked" class="me-2 border rounded p-2">
                                 <p class="mb-0 fw-semibold">${data[index + 0].spesifikasi[0].fitur[1]}</p>
                               </div>
                               <div class="col-6 align-items-center d-flex p-2">
                                 <img src="../assets/icon/check.png" alt="Checked" class="me-2 border rounded p-2">
                                 <p class="mb-0 fw-semibold">${data[index + 0].spesifikasi[0].fitur[2]}</p>
                               </div>
                               <div class="col-6 align-items-center d-flex p-2">
                                 <img src="../assets/icon/check.png" alt="Checked" class="me-2 border rounded p-2">
                                 <p class="mb-0 fw-semibold">${data[index + 0].spesifikasi[0].fitur[3]}</p>
                               </div>
                               <div class="col-6 align-items-center d-flex p-2">
                                 <img src="../assets/icon/check.png" alt="uncheck" class="border rounded p-2 me-2">
                                 <p class="mb-0 fw-semibold">${data[index + 0].spesifikasi[0].fitur[4]}</p>
                               </div>
                               <div class="col-6 align-items-center d-flex p-2">
                                 <img src="../assets/icon/check.png" alt="Checked" class="me-2 border rounded p-2">
                                 <p class="mb-0 fw-semibold">${data[index + 0].spesifikasi[0].fitur[5]}</p>
                               </div> 
                             </div>
                           </div>
                         </div>
                         <div class="carousel-item">
                           <div class="d-flex justify-content-between align-items-center">
                             <div class="judul fw-semibold">
                               <p class="fs-6 fw-semibold m-0">FITUR</p>
                             </div>
                             <div
                               class="bg-info py-1 px-4 rounded-pill d-flex justify-content-center text-center align-items-center">
                               <p class="m-0 text-white">${data[index + 1].nama_produk}</p>
                             </div>
                           </div>
                           <div class="d-flex px-5 justify-content-center align-items-center">
                             <div class="row gx-5 p-5 gy-3 d-flex justify-content-center align-items-center">
                               <div class="col-6 align-items-center d-flex p-2">
                                 <img src="../assets/icon/check.png" alt="Checked" class="me-2 border rounded p-2">
                                 <p class="mb-0 fw-semibold">${data[index + 1].spesifikasi[0].fitur[0]}</p>
                               </div>
                               <div class="col-6 align-items-center d-flex  p-2">
                                 <img src="../assets/icon/check.png" alt="Checked" class="me-2 border rounded p-2">
                                 <p class="mb-0 fw-semibold">${data[index + 1].spesifikasi[0].fitur[1]}</p>
                               </div>
                               <div class="col-6 align-items-center d-flex p-2">
                                 <img src="../assets/icon/check.png" alt="Checked" class="me-2 border rounded p-2">
                                 <p class="mb-0 fw-semibold">${data[index + 1].spesifikasi[0].fitur[2]}</p>
                               </div>
                               <div class="col-6 align-items-center d-flex p-2">
                                 <img src="../assets/icon/check.png" alt="Checked" class="me-2 border rounded p-2">
                                 <p class="mb-0 fw-semibold">${data[index + 1].spesifikasi[0].fitur[3]}</p>
                               </div>
                               <div class="col-6 align-items-center d-flex p-2">
                                 <img src="../assets/icon/check.png" alt="uncheck" class="border rounded p-2 me-2">
                                 <p class="mb-0 fw-semibold">${data[index + 1].spesifikasi[0].fitur[4]}</p>
                               </div>
                               <div class="col-6 align-items-center d-flex p-2">
                                 <img src="../assets/icon/check.png" alt="Checked" class="me-2 border rounded p-2">
                                 <p class="mb-0 fw-semibold">${data[index + 1].spesifikasi[0].fitur[5]}</p>
                               </div> 
                             </div>
                           </div>
                         </div>
                       </div>
                       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                         data-bs-slide="prev">
                         <span class="" aria-hidden="true"><img src="../assets/icon/angle-left.png" alt=""></span>
                         <span class="visually-hidden">Previous</span>
                       </button>
                       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                         data-bs-slide="next">
                         <span class="" aria-hidden="true"><img src="../assets/icon/angle-left.png" style="transform: rotate(180deg);" alt=""></span>
                         <span class="visually-hidden">Next</span>
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
            `;
          }
        });
    
        isiHTML += `
        <div>
          <div
            class="title fs-2 text-center d-flex justify-content-center align-items-center gap-2 text-uppercase fw-semibold"
          >
            <p>${data[index + 0].nama_produk}</p>
            <p>VS</p>
            <p>${data[index + 1].nama_produk}</p>
          </div>
          ${spesifikasiHTML}
        </div>
        `;
      }
    });
  
    const containerIsi = document.getElementById("content");
    if (containerIsi) {
      containerIsi.innerHTML = isiHTML;
    } else {
      console.error("Data ID 'data-container' tidak ditemukan");
    }
  }
  
  window.onload = fetchData;