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
              <div class="content-spec d-flex justify-content-between align-content-center">
              <img src="../assets/img/img-spec/banner.png" class="img-carousel-banner" alt="" />
              <div class="content-spec-carousel">
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
                          class="spec d-flex justify-content-between align-content-center mt-5 border text-center"
                        >
                          <h1 class="fs-2 fw-bold w-25">01</h1>
                          <div class="w-50">
                            <p>Operating System</p>
                            <div
                              class="d-flex justify-content-center align-content-center"
                            >
                              <p class="m-0 me-1 fw-semibold">${spec.os}</p>
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
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#004fce" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                          </div>
                        </div>
                        <div
                          class="spec d-flex justify-content-between align-content-center caption-content-spec text-white text-center"
                        >
                          <div class="w-25">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z"/></svg>
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
                              <p class="m-0 fw-semibold">${spec.lebar}</p>
                            </div>
                          </div>
                          <h1 class="fs-2 fw-bold w-25">02</h1>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div id="spec-2">
                        <div
                          class="spec d-flex justify-content-between mt-5 align-content-center caption-content-spec text-white text-center"
                        >
                          <div class="w-25">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                              <path
                                fill="#ffffff"
                                d="M64 64C28.7 64 0 92.7 0 128l0 7.4c0 6.8 4.4 12.6 10.1 16.3C23.3 160.3 32 175.1 32 192s-8.7 31.7-21.9 40.3C4.4 236 0 241.8 0 248.6L0 320l576 0 0-71.4c0-6.8-4.4-12.6-10.1-16.3C552.7 223.7 544 208.9 544 192s8.7-31.7 21.9-40.3c5.7-3.7 10.1-9.5 10.1-16.3l0-7.4c0-35.3-28.7-64-64-64L64 64zM576 352L0 352l0 64c0 17.7 14.3 32 32 32l48 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 96 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 96 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 96 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 48 0c17.7 0 32-14.3 32-32l0-64zM192 160l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z"
                              />
                            </svg>
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
                              <p class="m-0 fw-semibold">${spec.memory}</p>
                            </div>
                          </div>
                          <h1 class="fs-2 fw-bold w-25">03</h1>
                        </div>
                        <div
                          class="spec d-flex justify-content-between align-content-center border text-center"
                        >
                          <h1 class="fs-2 fw-bold w-25">04</h1>
                          <div class="w-50">
                            <p>Device Weight</p>
                            <div
                              class="d-flex justify-content-center align-content-center"
                            >
                              <p class="m-0 me-1 fw-semibold">${spec.berat}</p>
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                              <path
                                fill="#004fce"
                                d="M224 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm122.5 32c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96c0 11.2 1.9 22 5.5 32L120 128c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512l416 0c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128l-45.5 0z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div id="spec-2">
                        <div
                          class="spec d-flex justify-content-between align-content-center mt-5 border text-center"
                        >
                          <h1 class="fs-2 fw-bold w-25">05</h1>
                          <div class="w-50">
                            <p>Penyimpanan Internal</p>
                            <div
                              class="d-flex justify-content-center align-content-center"
                            >
                              <p class="m-0 me-1 fw-semibold">
                                ${spec.storage}
                              </p>
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                              <path
                                fill="#004fce"
                                d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 184.4c-17-15.2-39.4-24.4-64-24.4L64 256c-24.6 0-47 9.2-64 24.4L0 96zM64 288l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64zM320 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div
                          class="spec d-flex justify-content-between align-content-center caption-content-spec text-white text-center"
                        >
                          <div class="w-25">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                              <path
                                fill="#ffffff"
                                d="M576 64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l120.4 0c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4L576 448c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64zM96 240a64 64 0 1 1 128 0A64 64 0 1 1 96 240zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                              />
                            </svg>
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
                              <p class="m-0 fw-semibold">
                                ${spec.display[0].resolusi}
                              </p>
                            </div>
                          </div>
                          <h1 class="fs-2 fw-bold w-25">06</h1>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div id="spec-2">
                        <div
                          class="spec d-flex justify-content-between mt-5 align-content-center caption-content-spec text-white text-center"
                        >
                          <div class="w-25">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                              <path
                                fill="#ffffff"
                                d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"
                              />
                            </svg>
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
                              <p class="m-0 fw-semibold">
                                ${spec.display[0].kecepatan_refresh}
                              </p>
                            </div>
                          </div>
                          <h1 class="fs-2 fw-bold w-25">07</h1>
                        </div>
                        <div
                          class="spec d-flex justify-content-between align-content-center border text-center"
                        >
                          <h1 class="fs-2 fw-bold w-25">08</h1>
                          <div class="w-50">
                            <p>Jenis Layar</p>
                            <div
                              class="d-flex justify-content-center align-content-center"
                            >
                              <p class="m-0 me-1 fw-semibold">
                                ${spec.display[0].tipe_layar}
                              </p>
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                              <path
                                fill="#004fce"
                                d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div id="spec-2">
                        <div
                          class="spec d-flex justify-content-between align-content-center mt-5 border text-center"
                        >
                          <h1 class="fs-2 fw-bold w-25">09</h1>
                          <div class="w-50">
                            <p>VGA</p>
                            <div
                              class="d-flex justify-content-center align-content-center"
                            >
                              <p class="m-0 me-1 fw-semibold">${spec.vga}</p>
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                              <path
                                fill="#004fce"
                                d="M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div
                          class="spec d-flex justify-content-between align-content-center caption-content-spec text-white text-center"
                        >
                          <div class="w-25">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                              <path
                                fill="#ffffff"
                                d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"
                              />
                            </svg>
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
                              <p class="m-0 fw-semibold">${spec.prosesor}</p>
                            </div>
                          </div>
                          <h1 class="fs-2 fw-bold w-25">10</h1>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div id="spec-2">
                        <div
                          class="spec d-flex justify-content-between mt-5 align-content-center caption-content-spec text-white text-center"
                        >
                          <div class="w-25">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                              <path
                                fill="#ffffff"
                                d="M464 160c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16L80 352c-8.8 0-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16l384 0zM80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l384 0c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L80 96zm272 96L96 192l0 128 256 0 0-128z"
                              />
                            </svg>
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
                              <p class="m-0 fw-semibold">
                                ${spec.baterai}
                              </p>
                            </div>
                          </div>
                          <h1 class="fs-2 fw-bold w-25">11</h1>
                        </div>
                        <div
                          class="spec d-flex justify-content-between align-content-center border text-center"
                        >
                          <h1 class="fs-2 fw-bold w-25">12</h1>
                          <div class="w-50">
                            <p>Warna</p>
                            <div
                              class="d-flex justify-content-center align-content-center"
                            >
                              <p class="m-0 me-1 fw-semibold">${spec.color}</p>
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                            >
                              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                              <path
                                fill="#004fce"
                                d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"
                              />
                            </svg>
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
            <h1 class="fw-semibold">${item.nama_produk}</h1>
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
