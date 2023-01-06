export const validarNacimiento = (input) => { 
    const fechaCliente = new Date(input.value)
    let mensaje = ''

    if(!mayorDeEdad(fechaCliente)){
        mensaje = 'Debes tener al menos 18 años'
    }

    input.setCustomValidity(mensaje)
 }

const mayorDeEdad = (fecha) => { 
    const fechaActual = new Date()

    const diferenciaFecha = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    )

    return diferenciaFecha <= fechaActual
}