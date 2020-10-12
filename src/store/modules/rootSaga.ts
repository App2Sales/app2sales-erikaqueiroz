import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import itens from './itens/sagas';
import clientes from './clientes/sagas';

export default function* rootSaga() {
  return yield all([ auth, itens, clientes ]);
}
