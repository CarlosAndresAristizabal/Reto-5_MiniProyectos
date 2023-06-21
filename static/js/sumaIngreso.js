
// Instancias del DOM al JS
const btnRegistro = document.getElementById("btnRegistro");
const registro = document.querySelector("#registro")
const template = document.querySelector("#template");
const footer = document.querySelector('#footer');
const templateFooter = document.querySelector('#templateFooter');
const templateFooterMsg = document.querySelector('#templateFooterMsg');
const fragment = document.createDocumentFragment('fragment');
const modal = document.getElementById('exampleModal');
const inputs = document.querySelectorAll("input")

// Variables globales
var ingresoArray = [];
var id = 0;

//Acción de botón de registro se utiliza una función flecha
btnRegistro.addEventListener("click", agregarIngreso = e => {
    // creamos un variable constante que llevara un  objeto
    const ingreso = {
        id: id++,
        nombre: nombre.value,
        fecha: fecha.value,
        valor: parseInt(valor.value),

    };
    //buscamos el indice
    const indice = ingresoArray.findIndex(item => item.id === ingreso.id);
    //si no existe empujamos el nuevo elemento
    if (indice === -1) {
        ingresoArray.push(ingreso);
    }
    pintarIngreso();
    limpiar();
});

const pintarIngreso = () => {
    registro.textContent = "";
    //recorremos la losta de ingreso y pintamos elementos
    ingresoArray.forEach((item, index = 1) => {
        // clonamos el template creado he instaciado en el DOM 
        const clone = template.content.cloneNode(true);
        // seleccionamos los td's que mosatrara el contexto
        clone.querySelector('td:nth-child(1)').textContent = index + 1;
        clone.querySelector('td:nth-child(2)').textContent = item.nombre;
        clone.querySelector('td:nth-child(3)').textContent = item.fecha;
        clone.querySelector('td:nth-child(4) span').textContent = item.valor.toLocaleString('es-CO', { tyle: 'currency', currency: 'COP' });
        // creamos un fragment para que no haiga reflow en la página y se añade el clone
        fragment.appendChild(clone);
    });
    //despues de haber creado el fragment se añadira al varaible de registro que mostra el resultado en pantalla
    registro.appendChild(fragment);
    pintarFooter();
};
// Funcion flecha para visualizar el footer con la suma del total
const pintarFooter = () => {
    // Colocamos el footer en blanco con el contexto
    footer.textContent = '';
    //Creamos una variable constante del total que recibira daros del array del valor,se sumara y almacenara el resultado
    const total = ingresoArray.reduce(
        (acc, current) => acc + current.valor,
        0
    );
    // Creamos un template para el footer se clona el contenido
    const clone = templateFooter.content.cloneNode(true);
    // se seleccion las etiquetas para mostrar el contexto
    clone.querySelector('p span').textContent = total.toLocaleString('es-CO', { tyle: 'currency', currency: 'COP' });
    //se añade el clone al footer
    footer.appendChild(clone);

};
//Función felcha para limpiar campos de ingreso
const limpiar = () => {
    // recorremos los todos input del documento y el contexto se lo borramos
    inputs.forEach(item => {
        item.value = "";
    });
}

