import { combineReducers } from "@reduxjs/toolkit";
import {
  POST_REGISTER,
  POST_REGISTER_ERROR,
  POST_REGISTER_SUCCESS,
  POST_OTP,
  POST_OTP_ERROR,
  POST_OTP_SUCCESS,
  RESEND_OTP,
  RESEND_OTP_ERROR,
  RESEND_OTP_SUCCESS,
} from "../types/registerTypes";

const initialState = {
  data: [],
  error: false,
  loading: false,
};

const postRegister = (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTER:
      return {
        ...state,
        loading: true,
      };
    case POST_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

const otp = (state = initialState, action) => {
  switch (action.type) {
    case POST_OTP:
      return {
        ...state,
        loading: true,
      };
    case POST_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_OTP_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

const resendOtp = (state = initialState, action) => {
  switch (action.type) {
    case RESEND_OTP:
      return {
        ...state,
        loading: true,
      };
    case RESEND_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case RESEND_OTP_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

const registerReducer = combineReducers({
  postRegister,
  otp,
  resendOtp,
});

export default registerReducer;
