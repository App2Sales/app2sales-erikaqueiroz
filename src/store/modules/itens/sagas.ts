import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../api';

export function* loadItens() {
  try {
    const { data } = yield call(api.get, 'item/lista', {});
    yield put(actions.itensLoaded({ itens: data }));
  } catch (err) {
    yield put(actions.itensError());
  }
}

export default all([takeLatest('@itens/ITENS_REQUEST', loadItens)]);
