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

export const postRegisterAction = () => ({
  type: POST_REGISTER,
});

export const postRegisterActionSuccess = (data) => ({
  type: POST_REGISTER_SUCCESS,
  payload: data,
});

export const postRegisterActionError = () => ({
  type: POST_REGISTER_ERROR,
});

export const postOTPAction = () => ({
  type: POST_OTP,
});

export const postOTPActionSuccess = (data) => ({
  type: POST_OTP_SUCCESS,
  payload: data,
});

export const postOTPActionError = () => ({
  type: POST_OTP_ERROR,
});

export const resendOTPAction = () => ({
  type: RESEND_OTP,
});

export const resendOTPActionSuccess = (data) => ({
  type: RESEND_OTP_SUCCESS,
  payload: data,
});

export const resendOTPActionError = () => ({
  type: RESEND_OTP_ERROR,
});
