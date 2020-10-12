import { AnyAction } from 'redux';

export type ClientesAction = AnyAction;

export type Cliente = {
  id?: string;
  nome: string;
  urlFoto: string;
  celular: string;
};

export interface ClientesState {
  readonly loadingClientes: boolean;
  readonly clientes: Cliente[];
  readonly error: boolean;
}
