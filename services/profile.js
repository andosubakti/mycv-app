import { apiRequest } from "../utils/api";

export const getProfile = async () =>
  apiRequest({
    path: `/profile/me`,
    method: "GET",
  });

export const updateProfile = async (data) =>
  apiRequest({
    path: `/profile`,
    method: "POST",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateProfilePic = async (data) =>
  apiRequest({
    path: `/uploads/profile`,
    method: "POST",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateCoverPic = async (data) =>
  apiRequest({
    path: `/uploads/cover`,
    method: "POST",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateCareer = async (data) =>
  apiRequest({
    path: `/profile/career`,
    method: "POST",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
