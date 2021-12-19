import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postSlice";
import usersReducer from "./users/userSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
