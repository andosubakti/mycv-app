import Cookies from "js-cookie";
import { signIn, signOut } from "../../services/oauth";
import {
  postSignInAction,
  postSignInActionError,
  postSignInActionSuccess,
  postSignOutAction,
  postSignOutActionError,
  postSignOutActionSuccess,
} from "../actions/oauthActions";

export const postLogInService = (data) => {
  return async (dispatch) => {
    dispatch(postSignInAction());
    return signIn(data)
      .then((res) => {
        dispatch(postSignInActionSuccess(res.data));
        Cookies.set("token", res.data.data.user.access_token);
        Cookies.set("isLoggedIn", "true");
      })
      .catch(() => {
        dispatch(postSignInActionError());
      });
  };
};

export const postLogOutService = (data) => {
  return async (dispatch) => {
    dispatch(postSignOutAction());
    return signOut(data)
      .then((res) => {
        dispatch(postSignOutActionSuccess(res.data));
        Cookies.remove("token");
        Cookies.remove("isLoggedIn");
      })
      .catch(() => {
        dispatch(postSignOutActionError());
      });
  };
};
