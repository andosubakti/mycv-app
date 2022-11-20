import {
  getProfile,
  updateProfile,
  updateProfilePic,
  updateCoverPic,
  updateCareer,
  updateEducation,
} from "../../services/profile";
import {
  getProfileAction,
  getProfileActionSuccess,
  getProfileActionError,
  updateProfileAction,
  updateProfileActionError,
  updateProfileActionSuccess,
  updateProfilePicAction,
  updateProfilePicActionError,
  updateProfilePicActionSuccess,
} from "../actions/profileActions";

export const getProfileService = () => {
  return async (dispatch) => {
    dispatch(getProfileAction());
    return getProfile()
      .then((res) => {
        dispatch(getProfileActionSuccess(res.data));
      })
      .catch(() => {
        dispatch(getProfileActionError());
      });
  };
};

export const updateProfileService = (data) => {
  return async (dispatch) => {
    dispatch(updateProfileAction());
    return updateProfile(data)
      .then((res) => {
        dispatch(updateProfileActionSuccess(res.data));
      })
      .catch(() => {
        dispatch(updateProfileActionError());
      });
  };
};

export const updateProfilePicService = (data) => {
  return async (dispatch) => {
    dispatch(updateProfilePicAction());
    return updateProfilePic(data)
      .then((res) => {
        dispatch(updateProfilePicActionSuccess(res.data));
      })
      .catch(() => {
        dispatch(updateProfilePicActionError());
      });
  };
};

export const updateCoverPicService = (data) => {
  return async (dispatch) => {
    dispatch(updateProfilePicAction());
    return updateCoverPic(data)
      .then((res) => {
        dispatch(updateProfilePicActionSuccess(res.data));
      })
      .catch(() => {
        dispatch(updateProfilePicActionError());
      });
  };
};

export const updateCareerService = (data) => {
  return async (dispatch) => {
    dispatch(updateProfileAction());
    return updateCareer(data)
      .then((res) => {
        dispatch(updateProfileActionSuccess(res.data));
      })
      .catch(() => {
        dispatch(updateProfileActionError());
      });
  };
};

export const updateEducationService = (data) => {
  return async (dispatch) => {
    dispatch(updateProfileAction());
    return updateEducation(data)
      .then((res) => {
        dispatch(updateProfileActionSuccess(res.data));
      })
      .catch(() => {
        dispatch(updateProfileActionError());
      });
  };
};
