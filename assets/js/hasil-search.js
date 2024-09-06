document.addEventListener("DOMContentLoaded", function () {
  const produk1 = JSON.parse(localStorage.getItem("produk1"));
  const produk2 = JSON.parse(localStorage.getItem("produk2"));

  if (produk1 && produk2) {
    displayComparison(produk1, produk2);
  } else {
    alert("Tidak ada data produk yang ditemukan.");
    window.location.href = "../../index.html";
  }
});

function displayComparison(product1, product2) {
    const comparisonArea = document.getElementById("comparisonResult");
    
    // tampungan data detail
    const specs1 = product1.spesifikasi[0];
    const specs2 = product2.spesifikasi[0];
    const screen1 = specs1.display[0];
    const screen2 = specs2.display[0];
    
    const fiturToShow1 = specs1.fitur;
    const fiturToShow2 = specs2.fitur;
    
      // Buat string HTML untuk elemen-elemen
      const fitur1 = fiturToShow1.map((fitur, index) => `
        <div class="col-6 align-items-center d-flex p-2">
          <img src="../assets/icon/check.png" alt="Checked" class="me-2 border rounded p-2">
          <p class="mb-0 fw-semibold">${fitur}</p>
        </div>
      `).join('');
      const fitur2 = fiturToShow2.map((fitur, index) => `
        <div class="col-6 align-items-center d-flex p-2">
          <img src="../assets/icon/check.png" alt="Checked" class="me-2 border rounded p-2">
          <p class="mb-0 fw-semibold">${fitur}</p>
        </div>
      `).join('');


  comparisonArea.innerHTML = `

        <div>
          <div
            class="title md:fs-2 text-center d-flex justify-content-center align-items-center gap-2 text-uppercase fw-semibold"
          >
            <p>${product1.nama_produk}</p>
            <p>VS</p>
            <p>${product2.nama_produk}</p>
          </div>
        </div>

                <div class="konten m-4 d-flex justify-content-center  align-items-start gap-4">
               <div
                 class="data-1 gap-4 d-flex justify-content-center align-items-center flex-column"
               >
                 <div class="grafik">
                   <img src="../assets/img/img-bandingkan/grafik.png" width="400px" alt="" />
                 </div>
                 <div class="stroge p-4 w-100 md:px-5">
                   <div class="judul fw-semibold">
                     <p class="fs-6 fw-semibold">STORAGE</p>
                   </div>
                   <div class="kobtainer d-flex justify-content-between gap-2">
                     <div class="judul-text text-start">
                       <p class="md:fs-2 m-0 fw-semibold">${specs1.storage}</p>
                       <p style="font-size: 10px">
                         NVME 4X4, ULTRA SPEED READ & WRITE
                       </p>
                     </div>
                     <p class="md:fs-2 fw-semibold">V</p>
                     <div class="judul-text text-end">
                       <p class="md:fs-2 m-0 fw-semibold">${specs2.storage}</p>
                       <p style="font-size: 10px">
                         NVME 4X4, ULTRA SPEED READ & WRITE
                       </p>
                     </div>
                   </div>
                 </div>
                 <div class="vga w-100 p-4 md:px-5">
                   <div class="text-start">
                     <p class="fs-6 fw-semibold">VGA</p>
                   </div>
                   <div style="font-size: 12px">
                     <table class="table table-borderless text-center">
                       <thead>
                         <tr style="background-color: #004fce" class="text-light">
                           <td style="background-color: #004fce" class="text-light" scope="col"></td>
                           <td scope="col" style="background-color: #004fce" class="text-light">
                             CLOCK SPEED
                           </td>
                           <td scope="col" style="background-color: #004fce" class="text-light">
                             VRAM
                           </td>
                           <td scope="col" style="background-color: #004fce" class="text-light">DDR</td>
                           <td scope="col" style="background-color: #004fce" class="text-light">
                             OVERALL
                           </td>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <td
                             style="background-color: #fafafa"
                             class="fs-6 fw-semibold"
                             scope="row"
                           >
                           ${specs1.vga}
                           </td>
                           <td style="background-color: #efefef">2330Mhz</td>
                           <td style="background-color: #fafafa">24GB</td>
                           <td style="background-color: #efefef">DDR6</td>
                           <td style="background-color: #fafafa; width: 35%; ">
                             <div class="text-start">
                               <p>72 POINT</p>
                               <div class="bg-white my-2 me-4 rounded-pill">
                                 <div class="d-flex rounded-pill justify-content-center text-white bg-danger align-content-center text-center" style="width: ${specs1.overal};">
                                   <p class="p-0 m-0" >${specs1.overal}</p>
                                 </div>
                               </div>
                             </div>
                           </td>
                         </tr>
                         <tr>
                           <td
                             style="background-color: #fafafa"
                             class="fs-6 fw-semibold"
                             scope="row"
                           >
                           ${specs2.vga}
                           </td>
                           <td style="background-color: #efefef">2330Mhz</td>
                           <td style="background-color: #fafafa">24GB</td>
                           <td style="background-color: #efefef">DDR6</td>
                           <td style="background-color: #fafafa; width: 35%;"  > 
                             <div class="text-start">
                               <p>78 POINT</p>
                               <div class="bg-white my-2 me-4 rounded-pill">
                                 <div class="d-flex rounded-pill justify-content-center text-white bg-orange align-content-center text-center" style="width: ${specs2.overal};">
                                   <p class="p-0 m-0 text-dark" >${specs2.overal}</p>
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
                   <div class="baterai-screen md:w-50">
                     <div class="title p-4 pb-0">
                       <p class="fs-6 fw-semibold">BATTERY</p>
                     </div>
                     <div style="font-size: 12px" class="d-flex flex-column gap-2">
                       <div class="px-4">
                         <div
                           class="d-flex flex-column justify-content-center align-items-start gap-1"
                         >
                           <div class="kotak-name-m text-center  rounded-pill">
                             <p class="px-3 m-0 text-white">${product1.nama_produk}</p>
                           </div>
                           <p>LION PRO LI-THIU 20.000 MAH + ${specs1.baterai}</p>
                         </div>
                         <div
                           class="d-flex flex-column justify-content-center align-items-start gap-1"
                         >
                           <div class="kotak-name-b text-center rounded-pill">
                             <p class="px-3 m-0 text-white">${product2.nama_produk}</p>
                           </div>
                           <p>LION PRO LI-THIU 20.000 MAH + ${specs2.baterai}</p>
                         </div>
                       </div>
                       <div
                         class="screen d-flex justify-content-between align-items-end gap-2"
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
                                 <p class="px-3 m-0 text-white">${product1.nama_produk}</p>
                               </div>
                               <p>${screen1.tipe_layar}, ${screen1.kecepatan_refresh}</p>
                             </div>
                             <div
                               class="d-flex flex-column justify-content-center align-items-end gap-1"
                             >
                               <div class="kotak-name-b text-center rounded-pill">
                                 <p class="px-3 m-0 text-white">${product2.nama_produk}</p>
                               </div>
                               <p>${screen2.tipe_layar}, ${screen2.kecepatan_refresh}</p>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div class="memory md:w-50 p-4">
                     <div class="judul fw-semibold">
                       <p class="fs-6 fw-semibold">MEMORY</p>
                     </div>
                     <table
                       class="table table-borderless d-flex justify-content-between align-items-center gap-2 flex-column"
                       style="font-size: 12px"
                     >
                       <thead>
                         <tr>
                           <th scope="col" style="background-color: #fff">
                             <div class="kotak-name-m text-center rounded-pill">
                               <p class="px-3 m-0 text-white">${product1.nama_produk}</p>
                             </div>
                           </th>
                           <th scope="col" style="background-color: #fff">
                             <div class="kotak-name-b text-center rounded-pill">
                               <p class="px-3 m-0 text-white">${product2.nama_produk}</p>
                             </div>
                           </th>
                         </tr>
                       </thead>
                       <tbody class="container">
                         <tr class="row pb-2">
                           <td class="col" style="background-color: #fafafa">
                             DDR5
                           </td>
                           <td class="col" style="background-color: #fafafa">
                             DDR5X
                           </td>
                         </tr>
                         <tr class="row pb-2">
                           <td class="col" style="background-color: #fafafa">
                           ${specs1.memory}
                           </td>
                           <td class="col" style="background-color: #fafafa">
                           ${specs2.memory}
                           </td>
                         </tr>
                         <tr class="row pb-2">
                           <td class="col" style="background-color: #fafafa">
                             DUAL CHANNEL
                           </td>
                           <td class="col" style="background-color: #fafafa">
                             DUAL CHANNEL
                           </td>
                         </tr>
                         <tr class="row pb-2">
                           <td class="col" style="background-color: #fafafa">
                             3200Mhz
                           </td>
                           <td class="col" style="background-color: #fafafa">
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
                               <div class="d-flex rounded-pill justify-content-center text-white bg-orange align-content-center text-center" style="width: 78%;">
                                 <p class="p-0 m-0 text-dark" >78%</p>
                               </div>
                             </div>
                           </td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                 </div>
               </div>
               <div class="data-2">
                 <div class="prosesor w-100">
                   <div class="container pb-5" style="font-size: 12px ; background-color: #FDF1F1;">
                     <div class="row px-4 pb-3 pt-4">
                       <div class="col d-flex justify-content-center">
                         <div class="kotak-name-m text-center rounded-pill">
                           <p class="px-3 py-2 m-0 text-white">${product1.nama_produk}</p>
                         </div>
                       </div>
                       <div class="col d-flex justify-content-center ">
                         <div class="kotak-name-b text-center rounded-pill">
                           <p class="px-3 py-2 m-0 text-white">${product2.nama_produk}</p>
                         </div>
                       </div>
                     </div>
                     <div class="row px-4 py-2" style="background-color: #efefef;">
                       <div class="col">
                         <p class="m-0">${product1  .nama_produk}</p>
                          <img src="${specs1.img}" alt="kocak" style="width: 100px; height: 100px;" class="mt-4" >
                       </div>
                       <div class="col">
                         <p class="m-0">${product2.nama_produk}</p>
                          <img src="${specs2.img}" alt="kocak" style="width: 100px; height: 100px;" class="mt-4" >
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
                   <div class="merah md:p-5 p-3 py-0">
                     <p>${specs1.os}</p>
                     <div class="bg-white rounded-pill">
                       <div class="d-flex rounded-pill justify-content-center text-white bg-danger align-content-center text-center" style="width: 95%;">
                         <p class="p-0 m-0" >95%</p>
                       </div>  
                     </div>
                   </div>
                   <div class="merah md:p-5 p-3 py-0">
                     <p class="pt-3">${specs2.os}</p>
                     <div class="bg-white rounded-pill">
                       <div class="d-flex rounded-pill justify-content-center text-white bg-orange align-content-center text-center" style="width: 90%;">
                         <p class="p-0 m-0 text-dark" >90%</p>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div class="fitur p-4 d-flex justify-content-between flex-column align-content-center">
                   <div>
                     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                       <div class="carousel-inner" style="font-size: 12px;">
                         <div class="carousel-item active">
                           <div class="d-flex justify-content-between align-items-center">
                             <div class="judul fw-semibold">
                               <p class="fs-6 fw-semibold m-0">FITUR</p>
                             </div>
                             <div
                               class="bg-danger py-1 px-4 rounded-pill d-flex justify-content-center text-center align-items-center">
                               <p class="m-0 text-white">${product1.nama_produk}</p>
                             </div>
                           </div>
                           <div class="d-flex md:px-5 justify-content-center align-items-center">
                             <div class="row gx-5 gy-3 md:p-5 p-3 d-flex justify-content-center align-items-center">
                               ${fitur1}
                             </div>
                           </div>
                         </div>
                         <div class="carousel-item">
                           <div class="d-flex justify-content-between align-items-center">
                             <div class="judul fw-semibold">
                               <p class="fs-6 fw-semibold m-0">FITUR</p>
                             </div>
                             <div
                               class="bg-orange py-1 px-4 rounded-pill d-flex justify-content-center text-center align-items-center">
                               <p class="m-0 text-dark">${product2.nama_produk}</p>
                             </div>
                           </div>
                           <div class="d-flex md:px-5 justify-content-center align-items-center">
                             <div class="row gx-5 md:p-5 p-3 gy-3 d-flex justify-content-center align-items-center">
                               ${fitur2}
                             </div>
                           </div>
                         </div>
                       </div>
                       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                         data-bs-slide="prev">
                         <span class="visually-hidden" aria-hidden="true"><img src="../assets/icon/angle-left.png" class="w-50 md:w-100" alt=""></span>
                         <span class="visually-hidden">Previous</span>
                       </button>
                       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                         data-bs-slide="next">
                         <span class="visually-hidden" aria-hidden="true"><img src="../assets/icon/angle-left.png" class="w-50 md:w-100" style="transform: rotate(180deg);" alt=""></span>
                         <span class="visually-hidden">Next</span>
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
  `;
}
