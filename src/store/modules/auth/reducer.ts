import { AuthState, AuthAction } from "./types";

const initialState = {
  loadingSignInRequest: false,
  isSignedIn: false,
  error: false,
  errorMsg: '',
  token: '',
};

export default function auth(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
        error: false,
        errorMsg: '',
        token: '',
      };
    case '@auth/SIGN_IN_SUCCESS':
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true,
        token: action.payload.token,
      };
    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: false,
        error: true,
        token: '',
        errorMsg: action.payload.errorMsg,
      };
    default:
      return state;
  }
}
