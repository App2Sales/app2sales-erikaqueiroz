import { ItensAction, ItensState } from "./types";

const initialState = {
  itens: [],
  loadingItens: false,
  error: false,
};

export default function itens(
  state: ItensState = initialState,
  action: ItensAction
): ItensState {
  console.log(action.type)
  switch (action.type) {
    case '@itens/ITENS_REQUEST':
      return {
        ...state,
        loadingItens: true,
        error: false,
      };
    case '@itens/ITENS_ERROR':
      return {
        ...state,
        loadingItens: false,
        error: true,
      };
    case '@itens/ITENS_LOADED':
      return {
        ...state,
        loadingItens: false,
        itens: action.payload.itens,
      };
    default:
      return state;
  }
}
