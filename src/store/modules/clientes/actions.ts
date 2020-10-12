import { action } from 'typesafe-actions';
import { Cliente } from './types';


export function clientesRequest() {
  return action('@clientes/CLIENTES_REQUEST');
}

export function clientesError() {
  return action('@clientes/CLIENTES_ERROR');
}

export function clientesLoaded({
  clientes
}: {
  clientes: Cliente[];
}) {
  return action('@clientes/CLIENTES_LOADED', {
    clientes,
  });
}
