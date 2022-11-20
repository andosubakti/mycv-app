import {
  POST_SIGN_IN,
  POST_SIGN_IN_ERROR,
  POST_SIGN_IN_SUCCESS,
  POST_SIGN_OUT,
  POST_SIGN_OUT_ERROR,
  POST_SIGN_OUT_SUCCESS,
} from "../types/oauthTypes";

export const postSignInAction = () => ({
  type: POST_SIGN_IN,
});

export const postSignInActionSuccess = (data) => ({
  type: POST_SIGN_IN_SUCCESS,
  payload: data,
});

export const postSignInActionError = () => ({
  type: POST_SIGN_IN_ERROR,
});

export const postSignOutAction = () => ({
  type: POST_SIGN_OUT,
});

export const postSignOutActionSuccess = (data) => ({
  type: POST_SIGN_OUT_SUCCESS,
  payload: data,
});

export const postSignOutActionError = () => ({
  type: POST_SIGN_OUT_ERROR,
});
