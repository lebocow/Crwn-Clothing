import { UserData } from "../../utils/firebase/firebase.utils";
import { AnyAction } from "redux";
import {
  emailSignInStart,
  googleSignInStart,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutStart,
  signOutSucces,
  signUpFailed,
  signUpStart,
} from "./user.action";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: Boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): UserState => {
  if (signInSuccess.match(action)) {
    return { ...state, isLoading: false, currentUser: action.payload };
  }

  if (
    signInFailed.match(action) ||
    signOutFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  if (googleSignInStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (emailSignInStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (signUpStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (signInSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (signOutStart.match(action)) {
    return state;
  }

  if (signOutSucces.match(action)) {
    return { ...state, currentUser: null };
  }

  return state;
};
