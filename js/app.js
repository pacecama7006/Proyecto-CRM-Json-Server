import { obtenerClientes, eliminarCliente } from "./API.js";
(function(){
    // Seleccionamos el listado de clientes
    const listado = document.querySelector('#listado-clientes');

    //Registramos evento en el dom
    document.addEventListener('DOMContentLoaded', mostrarClientes);

    //Registamos evento en el listado
    listado.addEventListener('click', confirmarEliminar);

    async function mostrarClientes() {
        // console.log('Desde mostrar clientes');
        // Obtenemos los clientes llamando a la función de api.js
        // detengo un poco la aplicación con await
        const clientes = await obtenerClientes();
        // console.log(clientes);

        // Recorro el arreglo de clientes
        clientes.forEach(cliente => {
            const {nombre, email, telefono, empresa, id} = cliente;
            // creamos una fila para la table
            const row = document.createElement('tr');
            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;

            listado.appendChild(row);
        });
    }
    // Fin mostrarClientes

    // Función que elimina un registro. Como utilizamos delegation, mando el el para prevenir
    function confirmarEliminar(e) {
        /**Si el elemento que damos click tiene la clase eliminar */
        if (e.target.classList.contains('eliminar')) {
            // console.log('Diste click en eliminar');

            // Leemos el cliente donde hicimos clic con el dataset que tienen los enlaces de
            // eliminar
            const clienteId = parseInt(e.target.dataset.cliente);
            // console.log(clienteId);

            // Confirmamos con la función de confirm de javascript
            const confirmar = confirm('¿Deseas eliminar este registro?');

            // En caso de que se diga que si
            if (confirmar) {
                // console.log('Eliminando...', clienteId);
                eliminarCliente(clienteId);
            }
        }
    }
    //Fin confirmarEliminar
})();