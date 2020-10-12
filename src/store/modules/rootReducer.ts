import { combineReducers } from 'redux';
import auth from './auth/reducer';
import itens from './itens/reducer';
import clientes from './clientes/reducer';
import { StoreState } from '../createStore';

export default combineReducers<StoreState>({
  auth,
  itens,
  clientes,
})
