import { AnyAction } from 'redux';

// Tipagem da action desativada por conta do persistStore
// export type AuthAction = ActionType<typeof actions>;
export type AuthAction = AnyAction;

export type FieldError = {
  msg: string;
  param: string;
  value: string;
}
export interface AuthState {
  readonly loadingSignInRequest: boolean;
  readonly isSignedIn: boolean;
  readonly error: boolean;
  readonly errorMsg: string;
  readonly fieldErrors: FieldError[];
  readonly token: string;
}
