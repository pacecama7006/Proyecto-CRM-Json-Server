const url = 'http://localhost:4000/clientes';

// Consulta a la api para crear un nuevo cliente
export const nuevoCliente = async (cliente) => {
    // console.log(cliente);

    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-type': 'application/json' 
            }
        });

        // Redireccionamos al usuario al index
        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
};
// Fin nuevoCliente

// Consulta a la api para obtener todos los clientes
export const obtenerClientes = async () =>{
    try {
        // por defecto fetch envía la solicitud de un get, por lo que no especifico nada en él
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
};
// Fin obtenerClientes

// Elimina un cliente
export const eliminarCliente = async (id) => {
    try {
        const resultado = await fetch(`${url}/${id}`,{
            method: 'DELETE',
        })
    } catch (error) {
        console.log(error);
    }
}
// Fin eliminarCliente

// Obtiene un cliente por su id
export const obtenerCliente = async (id) => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        // console.log(cliente);
        return cliente;
    } catch (error) {
        console.log(error);
    }
};
