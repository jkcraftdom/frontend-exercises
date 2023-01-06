import { mensajesDeError, tipodeErrores } from "./util.js";
import { validarNacimiento } from "./nacimiento.js";

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
  };

  
export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  const message = input.parentElement.querySelector('.input-message-error')


  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    message.innerHTML = ''
  } else {
    input.parentElement.classList.add("input-container--invalid");
    message.innerHTML = mostrarMensajeDeError(tipoDeInput, input)
  }
}

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = '';

    tipodeErrores.forEach(error => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })
    return mensaje;
}
