export function mostrarAlerta(mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    // Si en el dom no tengo una clase que se llame bg-red-10
    if (!alerta) {
        // Creo una alerta
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold">!Error</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}
// Fin mostrarAlerta

export function validar(obj) {
    // Si dentro de mi objeto hay un campo vacío. Me arroja true
    return !Object.values(obj).every(input => input !== '');
}
// Fin validar