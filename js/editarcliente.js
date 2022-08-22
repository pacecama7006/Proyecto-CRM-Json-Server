import { obtenerCliente } from "./API.js";
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
})();