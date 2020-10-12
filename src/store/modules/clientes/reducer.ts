import { ClientesAction, ClientesState } from "./types";

const initialState = {
  clientes: [],
  loadingClientes: false,
  error: false,
};

export default function clientes(
  state: ClientesState = initialState,
  action: ClientesAction
): ClientesState {
  console.log(action.type)
  switch (action.type) {
    case '@clientes/CLIENTES_REQUEST':
      return {
        ...state,
        loadingClientes: true,
        error: false,
      };
    case '@clientes/CLIENTES_ERROR':
      return {
        ...state,
        loadingClientes: false,
        error: true,
      };
    case '@clientes/CLIENTES_LOADED':
      return {
        ...state,
        loadingClientes: false,
        clientes: action.payload.clientes,
      };
    default:
      return state;
  }
}
