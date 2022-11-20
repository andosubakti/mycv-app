import { configureStore } from "@reduxjs/toolkit";
import oauthReducer from "./reducers/oauthReducer";
import registerReducer from "./reducers/registerReducer";

export default configureStore({
  reducer: {
    register: registerReducer,
    oauth: oauthReducer,
  },
});
