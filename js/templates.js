export const templateNuevaNota = //html
                                `
                                <div class="container-fluid h-75 position-fixed contNewNote d-flex flex-column align-items-center justify-content-evenly" id="nuevaNota">
                                    <!-- botones -->
                                    <div class="container-fluid d-flex align-items-center justify-content-evenly contBtnsNuevaNota">
                                        <button class="rounded-circle btnControlNnota" id="guardar">
                                            <img src="./assets/md-save.svg" alt="" class="img-fluid w-100 ">
                                        </button>
                                        <button class="rounded-circle btnControlNnota" id="btnControlNnota">
                                            <img src="./assets/close-circle.svg" alt="" class="img-fluid w-100">
                                        </button>
                                    </div>

                                    <!-- información de nueva nota -->
                                    <h2 class="fs-1 mt-3 tituloNnota">Nueva nota</h2>
                                    <div class="container-fluid d-flex flex-column align-items-center justify-content-evenly contTittle">
                                        <div class="container-fluid d-flex justify-content-between contTitNuevaNota">
                                            <div class="d-flex">
                                                <img src="./assets/crear.png" alt="" class="img-fluid imgNota">
                                                <h2 class="fs-3 mt-3">Titulo</h2>
                                            </div>
                                            <div class="contSizeText d-flex align-items-center h-100 justify-content-evenly">
                                                <h3 class="fs-3 fw-bold" id="cantTitulo">0</h3>
                                                /
                                                <h3 class="fs-3 fw-bold">30</h3>
                                            </div>
                                        </div>
                                        <div class="container-fluid d-flex contTitNuevaNota">
                                            <input type="text" value="" maxlength="30" class="rounded-3 fs-2 inputTitulo" placeholder="máximo 30 caracteres" id="tituloT">
                                        </div>
                                    </div>
                                    <div class="container-fluid d-flex flex-column align-items-center justify-content-evenly contText">
                                        <div class="container-fluid d-flex justify-content-between contTitNuevaNota">
                                            <div class="d-flex">
                                                <img src="./assets/icono.png" alt="" class="img-fluid imgNota">
                                                <h2 class="fs-3 mt-3">Nueva nota</h2>
                                            </div>
                                            <div class="contSizeText d-flex align-items-center h-100 justify-content-evenly">
                                                <h3 class="fs-3 fw-bold" id="cantTexto">0</h3>
                                                /
                                                <h3 class="fs-3 fw-bold">2000</h3>
                                            </div>
                                        </div>
                                        <textarea name="textonota" id="textonota" maxlength="2000" class="textoNota fs-2" placeholder="Escribe aquí máximo 2000 caracteres" id="textnota"></textarea>
                                    </div>
                                </div>
                                `
export function nota(titulo,texto) {
    const templateNota = //html
                    `
                    <div class="rounded-4 p-0 marcoCard">
                        <div class="card w-100 h-100">
                            <div class="card-header">
                            ${titulo.toUpperCase()}
                            </div>
                            <div class="card-body position-relative">
                                <h5 class="card-title">${titulo}</h5>
                                <p class="card-text">${texto}</p>
                                <div class="containerfluid position-absolute bottom-0 start-0 d-flex justify-content-evenly w-100" id="contBtnsAcciones">
                                    <button class="btn btn-primary w-50 m-1 d-flex align-items-center justify-content-center btnCard" id="resuelto">
                                        <h2 class="fs-4 m-0">Cumplido</h2>
                                    </button>
                                    <button class="btn btn-danger w-50 m-1 d-flex align-items-center justify-content-center btnCard" id="eliminar">
                                        <h2 class="fs-4 m-0">Eliminar</h2>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `

    return templateNota
}