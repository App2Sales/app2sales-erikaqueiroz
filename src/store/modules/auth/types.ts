import { AnyAction } from 'redux';

// Tipagem da action desativada por conta do persistStore
// export type AuthAction = ActionType<typeof actions>;
export type AuthAction = AnyAction;

export interface AuthState {
  readonly loadingSignInRequest: boolean;
  readonly isSignedIn: boolean;
  readonly error: boolean;
  readonly errorMsg: string;
  readonly token: string;
}
