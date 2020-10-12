import { action } from 'typesafe-actions';

export function signInRequest({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  return action('@auth/SIGN_IN_REQUEST', {
    username,
    password,
  });
}

export function signInSuccess({
  token
}: {
  token: string;
}) {
  return action('@auth/SIGN_IN_SUCCESS', {
    token,
  });
}

export function signInFailure({
  errorMsg = ''
}: {
  errorMsg?: string;
}) {
  return action('@auth/SIGN_IN_FAILURE', {
    errorMsg
  });
}
