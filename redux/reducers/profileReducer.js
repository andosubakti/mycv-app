import { combineReducers } from "@reduxjs/toolkit";

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

const initialState = {
  data: [],
  error: false,
  loading: false,
};

const profileData = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

const update = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

const profilePic = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_PIC:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_PIC_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case UPDATE_PROFILE_PIC_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

const profileReducer = combineReducers({
  profileData,
  update,
  profilePic,
});

export default profileReducer;
