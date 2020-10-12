import { AnyAction } from 'redux';

export type ItensAction = AnyAction;

export type Item = {
  id?: string;
  titulo: string;
  urlFoto: string;
};

export interface ItensState {
  readonly loadingItens: boolean;
  readonly itens: Item[];
  readonly error: boolean;
}
