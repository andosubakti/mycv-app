import { combineReducers } from "@reduxjs/toolkit";
import {
  POST_SIGN_IN,
  POST_SIGN_IN_ERROR,
  POST_SIGN_IN_SUCCESS,
  POST_SIGN_OUT,
  POST_SIGN_OUT_ERROR,
  POST_SIGN_OUT_SUCCESS,
} from "../types/oauthTypes";

const initialState = {
  data: [],
  error: false,
  loading: false,
};

const signIn = (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGN_IN:
      return {
        ...state,
        loading: true,
      };
    case POST_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

const signOut = (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGN_OUT:
      return {
        ...state,
        loading: true,
      };
    case POST_SIGN_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_SIGN_OUT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

const oauthReducer = combineReducers({
  signIn,
  signOut,
});

export default oauthReducer;
