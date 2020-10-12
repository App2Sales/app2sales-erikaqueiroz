import { action } from 'typesafe-actions';
import { Item } from './types';


export function itensRequest() {
  return action('@itens/ITENS_REQUEST');
}

export function itensError() {
  return action('@itens/ITENS_ERROR');
}

export function itensLoaded({
  itens
}: {
  itens: Item[];
}) {
  return action('@itens/ITENS_LOADED', {
    itens,
  });
}
