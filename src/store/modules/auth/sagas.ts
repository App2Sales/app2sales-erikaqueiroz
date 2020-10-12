import { ActionType } from 'typesafe-actions';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../api';

export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
  try {
    const { username, password } = payload;

    const { data } = yield call(api.post, 'usuario/login', {
      username,
      password,
    });

    yield put(actions.signInSuccess({ token: data.token }));
  } catch (err) {
    const errors = err.response?.data?.errors;
    let errorMsg = err.response?.data?.message || '';
    if(errors) {
      // Concatena mensagens de cada campo individual
      errors.forEach(
        (error: {
          value: string;
          msg: string;
          param: string;
          location: string;
        }) => {
          errorMsg += '\n' + error.msg;
        }
      );

    }
    yield put(actions.signInFailure({ errorMsg }));
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
