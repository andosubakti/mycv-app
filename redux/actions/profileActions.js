import {
  GET_PROFILE,
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_PIC,
  UPDATE_PROFILE_PIC_ERROR,
  UPDATE_PROFILE_PIC_SUCCESS,
} from "../types/profileTypes";

export const getProfileAction = () => ({
  type: GET_PROFILE,
});

export const getProfileActionSuccess = (data) => ({
  type: GET_PROFILE_SUCCESS,
  payload: data,
});

export const getProfileActionError = () => ({
  type: GET_PROFILE_ERROR,
});

export const updateProfileAction = () => ({
  type: UPDATE_PROFILE,
});

export const updateProfileActionSuccess = (data) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: data,
});

export const updateProfileActionError = () => ({
  type: UPDATE_PROFILE_ERROR,
});

export const updateProfilePicAction = () => ({
  type: UPDATE_PROFILE_PIC,
});

export const updateProfilePicActionSuccess = (data) => ({
  type: UPDATE_PROFILE_PIC_SUCCESS,
  payload: data,
});

export const updateProfilePicActionError = () => ({
  type: UPDATE_PROFILE_PIC_ERROR,
});
