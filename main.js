
const btnRegistro = document.getElementById("btnRegistro");
const registro = document.querySelector("#registro")
const template = document.querySelector("#template");
const footer = document.querySelector('#footer');
const templateFooter = document.querySelector('#templateFooter');
const templateFooterMsg = document.querySelector('#templateFooterMsg');
const fragment = document.createDocumentFragment('fragment');
const inputs = document.querySelectorAll("input");
const modal =document.getElementById('exampleModalCenter');
const cuerpo = document.getElementById('cuerpo')







var ingresoArray = [];
var id = 0;
var cont =0;

registro.addEventListener('click', e => {
    e.stopPropagation();        
    var editar =e.target.parentElement.parentElement.children;
    btnModificar(editar);    
 
});

btnRegistro.addEventListener("click", agregarIngreso = e => {
    const ingreso = {
        id: id++,
        nombre: nombre.value,
        fecha: fecha.value,
        valor: parseInt(valor.value),
        idbtn: e.target.dataset.registro,

    };
    //buscamos el indice
    const indice = ingresoArray.findIndex(item => item.id === ingreso.id);
    //si no existe empujamos el nuevo elemento
    if (indice === -1) {
        ingresoArray.push(ingreso);
    }
    // console.log(ingresoArray);

    pintarIngreso();
   limpiar();
    
});

const pintarIngreso = () => {
    registro.textContent = "";
    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
      });
    //recorremos la losta de ingreso y pintamos elementos
    ingresoArray.forEach((item, index = 1) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('td:nth-child(1)').textContent = index + 1;
        clone.querySelector('td:nth-child(2)').textContent = item.nombre;
        clone.querySelector('td:nth-child(3)').textContent = item.fecha;
        clone.querySelector('td:nth-child(4) span').textContent = item.valor.toLocaleString('es-CO',{tyle: 'currency', currency: 'COP' });
        clone.querySelector('td:nth-child(5)').dataset.id = item.idbtn;
        fragment.appendChild(clone);
    });
    registro.appendChild(fragment);
    pintarFooter();
};

const pintarFooter = () => {
    footer.textContent = '';
    const msg =
        ' Su Ingreso está vacío, por favor añade ingresos a su lista. ';

    const total = ingresoArray.reduce(
        (acc, current) => acc + current.valor,
        0
    );
    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector('p span').textContent = total.toLocaleString('es-CO',{tyle: 'currency', currency: 'COP' });
    const cloneMsg = templateFooterMsg.content.cloneNode(true);
    cloneMsg.querySelector('.msg').textContent = msg;
    if (total === 0) {
        footer.appendChild(cloneMsg);
    } else {
        footer.appendChild(clone);
    }
};

const btnModificar = editar => {
   abrirModal();
    // modal.querySelector('.modal-title').textContent='Módificar ingreso';
    // limpiar();
};

const limpiar = () => {
    inputs.forEach(item=>{
        console.log(item);
        item.value="";
    });
}

const abrirModal =()=>{
    modal.classList.add('show');
}