import { register, matchOtp, resendOtp } from "../../services/register";
import Cookies from "js-cookie";

import {
  postRegisterAction,
  postRegisterActionError,
  postRegisterActionSuccess,
  postOTPAction,
  postOTPActionError,
  postOTPActionSuccess,
  resendOTPAction,
  resendOTPActionError,
  resendOTPActionSuccess,
} from "../actions/registerActions";

export const postRegisterService = (data) => {
  return async (dispatch) => {
    dispatch(postRegisterAction());
    return register(data)
      .then((res) => {
        dispatch(postRegisterActionSuccess(res.data));
      })
      .catch(() => {
        dispatch(postRegisterActionError());
      });
  };
};

export const postOTPService = (data) => {
  return async (dispatch) => {
    dispatch(postOTPAction());
    return matchOtp(data)
      .then((res) => {
        dispatch(postOTPActionSuccess(res.data));
        Cookies.set("token", res.data?.data?.user?.access_token);
        Cookies.set("isLoggedIn", "true");
      })
      .catch(() => {
        dispatch(postOTPActionError());
      });
  };
};

export const resendOTPService = (data) => {
  return async (dispatch) => {
    dispatch(resendOTPAction());
    return resendOtp(data)
      .then((res) => {
        dispatch(resendOTPActionSuccess(res.data));
      })
      .catch(() => {
        dispatch(resendOTPActionError());
      });
  };
};
