import { apiRequest } from "../utils/api";

export const register = async (data) =>
  apiRequest({
    path: `/register`,
    method: "POST",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const matchOtp = async (data) =>
  apiRequest({
    path: `/register/otp/match`,
    method: "POST",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const resendOtp = async (data) =>
  apiRequest({
    path: `/register/otp/request`,
    method: "POST",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
