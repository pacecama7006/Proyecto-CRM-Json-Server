import { obtenerCliente, editarCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";

(function(){
    // Variables del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');


    // Escuchamos evento en el dom
    document.addEventListener('DOMContentLoaded', async () => {
        /**Obtengo los parámetros de la url con URLSearchParams() que es de javascript
         * al cual le paso window.location.search
         */
        const parametrosUrl = new URLSearchParams(window.location.search);

        // al obtener los parámetros obtengo el id, llamando al método get y pasándole
        // el parámetro que quiero
        const idCliente = parseInt(parametrosUrl.get('id'));
        // console.log(idCliente);

        // Obtengo el cliente del archivo api.js
        const cliente = await obtenerCliente(idCliente);
        // console.log(cliente);

        mostrarCliente(cliente);

        // Submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);

    });

    function mostrarCliente(cliente) {
        // console.log(cliente);

        const {nombre, email, telefono, empresa, id}= cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;

    }
    // fin de mostrarCliente

    function validarCliente(e) {
        e.preventDefault();

        /**Puedo crear un objeto con las propiedades de los inputs, pero deben
         * llamarse iguales
         */
         const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        };

        // console.log(cliente);

        // console.log(!Object.values(cliente).every(input => input !== ''));
        // Valido el formulario
        if (validar(cliente)) {
            // Si hay un campo vacío
            // console.log('Todos los campos son obligatorios');
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        // Reescribe el objeto
        editarCliente(cliente);
    }
    // Fin validarCliente

})();