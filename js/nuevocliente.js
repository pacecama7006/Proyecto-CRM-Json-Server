import { mostrarAlerta } from "./funciones.js";
import { nuevoCliente } from "./API.js";
// Protegemos todo lo de este archivo con una función iffi
// Para que sólo este archivo las pueda leer
(function(){
    // Variables del formulario
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        // Variables del formulario
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        /**Puedo crear un objeto con las propiedades de los inputs, pero deben
         * llamarse iguales
         */
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
        };

        // console.log(!Object.values(cliente).every(input => input !== ''));
        // Valido el formulario
        if (validar(cliente)) {
            // Si hay un campo vacío
            // console.log('Todos los campos son obligatorios');
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        // console.log('Si se pasó la validación');
        // Llamada a nuevocliente que está en API.js
        nuevoCliente(cliente);
    }
    // Fin validar cliente

    function validar(obj) {
        // Si dentro de mi objeto hay un campo vacío. Me arroja true
        return !Object.values(obj).every(input => input !== '');
    }
    // Fin validar
})();
