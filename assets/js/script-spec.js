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
    let dataHTML = "";
  
    data.forEach((item, index) => {
      if (index < 1) {
        let spesifikasiHTML = "";
        item.spesifikasi.forEach((spec, i) => {
          if (i < 1) {
            spesifikasiHTML += `           
        <div class="d-flex justify-content-between align-content-center me-5">
          <img src="../assets/img/img-spec/banner.png" width="500px" alt="" />
          <div class="w-50">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="visually-hidden active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  class="visually-hidden"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  class="visually-hidden"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  class="visually-hidden"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="4"
                  class="visually-hidden"
                  aria-label="Slide 5"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="5"
                  class="visually-hidden"
                  aria-label="Slide 6"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div id="spec-1">
                    <div
                      class="spec d-flex justify-content-between align-content-center mt-5 border p-4 text-center"
                    >
                      <h1 class="fs-2 fw-bold w-25">01</h1>
                      <div class="w-50">
                        <p>Operating System</p>
                        <div
                          class="d-flex justify-content-center align-content-center"
                        >
                          <p class="m-0 me-1 fs-4 fw-semibold">${spec.os}</p>
                          <div
                            class="d-flex justify-content-center align-content-end"
                          >
                            <img
                              height="10px"
                              class="mt-3"
                              src="../assets/icon/kotak-spec-kecil.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="w-25">
                        <img
                          width="75px"
                          height="75px"
                          src="../assets/icon/apple.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      class="spec d-flex justify-content-between align-content-center caption-content-spec text-white p-4 text-center"
                    >
                      <div class="w-25">
                        <img
                          width="75px"
                          height="75px"
                          src="../assets/icon/IPD.png"
                          alt=""
                        />
                      </div>
                      <div class="w-50">
                        <p>Dimensi</p>
                        <div
                          class="d-flex justify-content-center align-content-center"
                        >
                          <div class="d-flex">
                            <img
                              height="10px"
                              class="mt-3 me-1"
                              src="../assets/icon/kotak-spec.png"
                              alt=""
                            />
                          </div>
                          <p class="m-0 fs-4 fw-semibold">${spec.lebar}</p>
                        </div>
                      </div>
                      <h1 class="fs-2 fw-bold w-25">02</h1>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div id="spec-2">
                      <div
                      class="spec d-flex justify-content-between mt-5 align-content-center caption-content-spec text-white p-4 text-center"
                    >
                      <div class="w-25">
                        <img
                          width="75px"
                          height="75px"
                          src="../assets/icon/IPD.png"
                          alt=""
                        />
                      </div>
                      <div class="w-50">
                        <p>Random Access Memory (RAM)</p>
                        <div
                          class="d-flex justify-content-center align-content-center"
                        >
                          <div class="d-flex">
                            <img
                              height="10px"
                              class="mt-3 me-1"
                              src="../assets/icon/kotak-spec.png"
                              alt=""
                            />
                          </div>
                          <p class="m-0 fs-4 fw-semibold">${spec.memory}</p>
                        </div>
                      </div>
                      <h1 class="fs-2 fw-bold w-25">03</h1>
                    </div>
                    <div
                      class="spec d-flex justify-content-between align-content-center border p-4 text-center"
                    >
                      <h1 class="fs-2 fw-bold w-25">04</h1>
                      <div class="w-50">
                        <p>Device Weight</p>
                        <div
                          class="d-flex justify-content-center align-content-center"
                        >
                          <p class="m-0 me-1 fs-4 fw-semibold">${spec.berat}</p>
                          <div
                            class="d-flex justify-content-center align-content-end"
                          >
                            <img
                              height="10px"
                              class="mt-3"
                              src="../assets/icon/kotak-spec-kecil.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="w-25">
                        <img
                          width="75px"
                          height="75px"
                          src="../assets/icon/apple.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div id="spec-2">
                    <div
                      class="spec d-flex justify-content-between align-content-center mt-5 border p-4 text-center"
                    >
                      <h1 class="fs-2 fw-bold w-25">05</h1>
                      <div class="w-50">
                        <p>Penyimpanan Internal</p>
                        <div
                          class="d-flex justify-content-center align-content-center"
                        >
                          <p class="m-0 me-1 fs-4 fw-semibold">${spec.storage}</p>
                          <div
                            class="d-flex justify-content-center align-content-end"
                          >
                            <img
                              height="10px"
                              class="mt-3"
                              src="../assets/icon/kotak-spec-kecil.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="w-25">
                        <img
                          width="75px"
                          height="75px"
                          src="../assets/icon/apple.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      class="spec d-flex justify-content-between align-content-center caption-content-spec text-white p-4 text-center"
                    >
                      <div class="w-25">
                        <img
                          width="75px"
                          height="75px"
                          src="../assets/icon/IPD.png"
                          alt=""
                        />
                      </div>
                      <div class="w-50">
                        <p>Resolusi</p>
                        <div
                          class="d-flex justify-content-center align-content-center"
                        >
                          <div class="d-flex">
                            <img
                              height="10px"
                              class="mt-3 me-1"
                              src="../assets/icon/kotak-spec.png"
                              alt=""
                            />
                          </div>
                          <p class="m-0 fs-4 fw-semibold">${spec.display[0].resolusi}</p>
                        </div>
                      </div>
                      <h1 class="fs-2 fw-bold w-25">06</h1>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div id="spec-2">
                      <div
                      class="spec d-flex justify-content-between mt-5 align-content-center caption-content-spec text-white p-4 text-center"
                    >
                      <div class="w-25">
                        <img
                          width="75px"
                          height="75px"
                          src="../assets/icon/IPD.png"
                          alt=""
                        />
                      </div>
                      <div class="w-50">
                        <p>Tingakat Penyegaran</p>
                        <div
                          class="d-flex justify-content-center align-content-center"
                        >
                          <div class="d-flex">
                            <img
                              height="10px"
                              class="mt-3 me-1"
                              src="../assets/icon/kotak-spec.png"
                              alt=""
                            />
                          </div>
                          <p class="m-0 fs-4 fw-semibold">${spec.display[0].kecepatan_refresh}</p>
                        </div>
                      </div>
                      <h1 class="fs-2 fw-bold w-25">07</h1>
                    </div>
                    <div
                      class="spec d-flex justify-content-between align-content-center border p-4 text-center"
                    >
                      <h1 class="fs-2 fw-bold w-25">08</h1>
                      <div class="w-50">
                        <p>Jenis Layar</p>
                        <div
                          class="d-flex justify-content-center align-content-center"
                        >
                          <p class="m-0 me-1 fs-4 fw-semibold">${spec.display[0].tipe_layar}</p>
                          <div
                            class="d-flex justify-content-center align-content-end"
                          >
                            <img
                              height="10px"
                              class="mt-3"
                              src="../assets/icon/kotak-spec-kecil.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="w-25">
                        <img
                          width="75px"
                          height="75px"
                          src="../assets/icon/apple.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div id="spec-2">
                    <div
                      class="spec d-flex justify-content-between align-content-center mt-5 border p-4 text-center"
                    >
                      <h1 class="fs-2 fw-bold w-25">09</h1>
                      <div class="w-50">
                        <p>VGA</p>
                        <div
                          class="d-flex justify-content-center align-content-center"
                        >
                          <p class="m-0 me-1 fs-4 fw-semibold">${spec.vga}</p>
                          <div
                            class="d-flex justify-content-center align-content-end"
                          >
                            <img
                              height="10px"
                              class="mt-3"
                              src="../assets/icon/kotak-spec-kecil.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="w-25">
                        <img
                          width="75px"
                          height="75px"
                          src="../assets/icon/apple.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      class="spec d-flex justify-content-between align-content-center caption-content-spec text-white p-4 text-center"
                    >
                      <div class="w-25">
                        <img
                          width="75px"
                          height="75px"
                          src="../assets/icon/IPD.png"
                          alt=""
                        />
                      </div>
                      <div class="w-50">
                        <p>Prosesor</p>
                        <div
                          class="d-flex justify-content-center align-content-center"
                        >
                          <div class="d-flex">
                            <img
                              height="10px"
                              class="mt-3 me-1"
                              src="../assets/icon/kotak-spec.png"
                              alt=""
                            />
                          </div>
                          <p class="m-0 fs-4 fw-semibold">${spec.prosesor}</p>
                        </div>
                      </div>
                      <h1 class="fs-2 fw-bold w-25">10</h1>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div id="spec-2">
                      <div
                      class="spec d-flex justify-content-between mt-5 align-content-center caption-content-spec text-white p-4 text-center"
                    >
                      <div class="w-25">
                        <img
                          width="75px"
                          height="75px"
                          src="../assets/icon/IPD.png"
                          alt=""
                        />
                      </div>
                      <div class="w-50">
                        <p>Daya Baterai</p>
                        <div
                          class="d-flex justify-content-center align-content-center"
                        >
                          <div class="d-flex">
                            <img
                              height="10px"
                              class="mt-3 me-1"
                              src="../assets/icon/kotak-spec.png"
                              alt=""
                            />
                          </div>
                          <p class="m-0 fs-4 fw-semibold">5060 mAh + ${spec.baterai}</p>
                        </div>
                      </div>
                      <h1 class="fs-2 fw-bold w-25">11</h1>
                    </div>
                    <div
                      class="spec d-flex justify-content-between align-content-center border p-4 text-center"
                    >
                      <h1 class="fs-2 fw-bold w-25">12</h1>
                      <div class="w-50">
                        <p>Warna</p>
                        <div
                          class="d-flex justify-content-center align-content-center"
                        >
                          <p class="m-0 me-1 fs-4 fw-semibold">${spec.color}</p>
                          <div
                            class="d-flex justify-content-center align-content-end"
                          >
                            <img
                              height="10px"
                              class="mt-3"
                              src="../assets/icon/kotak-spec-kecil.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="w-25">
                        <img
                          width="75px"
                          height="75px"
                          src="../assets/icon/apple.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="position-relative mt-5">
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span aria-hidden="true"
                    ><img src="../assets/icon/next.png" width="50px" alt=""
                  /></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span aria-hidden="true"
                    ><img
                      class="btn-carousel-spec"
                      src="../assets/icon/next.png"
                      width="50px"
                      alt=""
                  /></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
            `;
          }
        });
    
        dataHTML += `
        <div class="mb-4">
          <div class="tittle d-flex justify-content-end align-items-center me-5">
            <h1 class="fw-semibold fs-1">${item.nama_produk}</h1>
            <div class="icon-panduan-title">
              <img
                src="../assets/icon/kotak-spec.png"
                width="20px"
                height="20px"
                alt=""
                class="mt-5"
              />
            </div>
          </div>
        </div>
        ${spesifikasiHTML}
        `;
      }
    });
  
    const containerIsi = document.getElementById("content");
    if (containerIsi) {
      containerIsi.innerHTML = dataHTML;
    } else {
      console.error("Data ID 'data-container' tidak ditemukan");
    }
  }
  
  window.onload = fetchData;