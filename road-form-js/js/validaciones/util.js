export  const tipodeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
]

export const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio"
    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La contraseña debe contener un numero, miniscula, mayuscula y ser mas de 8 caracteres"
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 años"
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es XXXXXXXXXX 10 numeros"
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La direccion debe contener entre 10 a 40 caracteres"
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres"
    },
    estado: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La estado debe contener entre 10 a 40 caracteres"
    }
}