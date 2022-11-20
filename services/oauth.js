import { apiRequest } from "../utils/api";

export const signIn = async (data) =>
  apiRequest({
    path: `/oauth/sign_in`,
    method: "POST",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const signOut = async (data) =>
  apiRequest({
    path: `/oauth/revoke`,
    method: "POST",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
