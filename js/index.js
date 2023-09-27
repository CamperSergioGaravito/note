import { templateNuevaNota } from "./templates.js";
import { nota } from "./templates.js";

function mostrarModal() {
    const area = document.getElementById('area');
    if(area.children.length > 3) {
        area.removeChild(area.children[area.children.length-1])
    }
    else {
        document.getElementById('area').insertAdjacentHTML('beforeend',templateNuevaNota)
        const btnControlNnota = document.getElementById('btnControlNnota')
        crearEbtn(btnControlNnota,'click',mostrarModal);

        const titulo = document.getElementById('tituloT');
        const textnota = document.querySelector('textarea');
        const cantTitulo = document.getElementById('cantTitulo');
        const cantTexto = document.getElementById('cantTexto');
        const guardar = document.getElementById('guardar');

        console.log(titulo.value)

        titulo.addEventListener('keypress',(e) => {
           contarCaracteres(e,titulo,cantTitulo,titulo.attributes);
        })

        textnota.addEventListener('keypress',(e) => {
            contarCaracteres(e,textnota,cantTexto,textnota.attributes);
        })

        titulo.addEventListener('keydown',(e) => {
            teclasOtras(e,titulo,cantTitulo,titulo.attributes);
         })
 
         textnota.addEventListener('keydown',(e) => {
             teclasOtras(e,textnota,cantTexto,textnota.attributes);
         })

         guardar.addEventListener('click', () => generarNota(titulo.value,textnota.value))
        
    }
}

function crearEbtn(elemento,tipo,func) {
    elemento.addEventListener(tipo,func)
}

function contarCaracteres(e,elemento,cant,num) {
    num = parseInt(num.maxlength.value);
    e.preventDefault();
    if(elemento.value.length < num) {
        elemento.value += e.key;
        cant.textContent = elemento.value.length
    }
    else {
        return
    }
}

function teclasOtras(e,elemento,cant,num) {
    num = parseInt(num.maxlength.value);
    const longitudElement = elemento.value.length;
    if(longitudElement < num && longitudElement > 0) {
        /* console.log(e.key) */
        switch(e.key) {
            case 'Backspace':
                cant.textContent = longitudElement-1;
                break
            
            default:
                return
        }
    }
    else {
        return
    }
}

function generarNota(titulo,texto) {
    console.log(titulo,texto);
    const grilla = document.getElementById('grilla');
    
    grilla.insertAdjacentHTML("beforeend",nota(titulo,texto));
    mostrarModal()
    const contBtnsAcciones = document.getElementById('grilla').querySelectorAll('button');

    console.log(contBtnsAcciones)
    contBtnsAcciones.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.parentElement.parentElement.parentElement;
            const medida = e.target.parentElement.parentElement.parentElement.children;
            
            console.log(e.target.parentElement.id)
            if(e.target.parentElement.id === 'resuelto') {
                console.log('si')
                const btnRes = medida[2].querySelector('#resuelto')
                console.log(btnRes)
                btnRes.disabled = true;
                card.insertAdjacentHTML('beforeend',`
                        <img src="./assets/checkmark-circle-green.svg" alt="" class="position-absolute imgCard">`)
            }
            else if(e.target.parentElement.id === 'eliminar') {
                console.log('si')
                const btnRes = medida[2].querySelector('#eliminar')
                card.parentElement.parentElement.remove()
            }
        })
    })
    
}

const btnAddNota = document.getElementById('btnAddNota');
btnAddNota.addEventListener('click',mostrarModal);

