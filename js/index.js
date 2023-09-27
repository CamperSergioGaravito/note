function mostrarModal() {
    const area = document.getElementById('area');
    if(area.children.length > 3) {
        area.removeChild(area.children[area.children.length-1])
    }
    else {
        document.getElementById('area').insertAdjacentHTML('beforeend',templateNuevaNota)
    }
}

const grilla = document.getElementById('grilla');
const template = //html
                `
                <div class="rounded-4 p-0 marcoCard">
                    <div class="card w-100 h-100">
                        <div class="card-header">
                          Featured
                        </div>
                        <div class="card-body position-relative">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <div class="containerfluid position-absolute bottom-0 start-0 d-flex justify-content-evenly w-100">
                                <button class="btn btn-primary w-50 m-1 btnCard">
                                    <img src="./assets/checkmark-circle.svg" alt="" class="img-fluid w-50 ">
                                </button>
                                <button class="btn btn-danger w-50 m-1 btnCard">
                                    <img src="./assets/close-circle.svg" alt="" class="img-fluid w-50 ">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                `


const templateNuevaNota = //html
                        `
                        <div class="container-fluid h-75 position-fixed contNewNote d-flex flex-column align-items-center justify-content-evenly">
                            <!-- botones -->
                            <div class="container-fluid d-flex align-items-center justify-content-evenly contBtnsNuevaNota">
                                <button class="rounded-circle btnControlNnota">
                                    <img src="./assets/md-save.svg" alt="" class="img-fluid w-100 ">
                                </button>
                                <button class="rounded-circle btnControlNnota" onclick="mostrarModal()" id="btnControlNnota">
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
                                        <h3 class="fs-3 fw-bold ">0</h3>
                                        /
                                        <h3 class="fs-3 fw-bold ">30</h3>
                                    </div>
                                </div>
                                <div class="container-fluid d-flex contTitNuevaNota">
                                    <input type="text" maxlength="30" class="rounded-3 fs-2 inputTitulo" placeholder="máximo 30 caracteres">
                                </div>
                            </div>
                            <div class="container-fluid d-flex flex-column align-items-center justify-content-evenly contText">
                                <div class="container-fluid d-flex justify-content-between contTitNuevaNota">
                                    <div class="d-flex">
                                        <img src="./assets/icono.png" alt="" class="img-fluid imgNota">
                                        <h2 class="fs-3 mt-3">Nueva nota</h2>
                                    </div>
                                    <div class="contSizeText d-flex align-items-center h-100 justify-content-evenly">
                                        <h3 class="fs-3 fw-bold ">0</h3>
                                        /
                                        <h3 class="fs-3 fw-bold ">2000</h3>
                                    </div>
                                </div>
                                <textarea name="textonota" id="textonota" maxlength="2000" class="textoNota fs-2" placeholder="Escribe aquí"></textarea>
                            </div>
                        </div>
                        `

grilla.insertAdjacentHTML("beforeend",template);


const btnAddNota = document.getElementById('btnAddNota');
btnAddNota.addEventListener('click',mostrarModal);
    