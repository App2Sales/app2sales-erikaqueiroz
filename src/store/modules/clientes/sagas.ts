import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../api';

export function* loadClientes() {
  try {
    const { data } = yield call(api.get, 'cliente/lista', {});
    yield put(actions.clientesLoaded({ clientes: data }));
  } catch (err) {
    yield put(actions.clientesError());
  }
}

export default all([takeLatest('@clientes/CLIENTES_REQUEST', loadClientes)]);
