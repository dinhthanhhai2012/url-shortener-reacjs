import { configureStore } from '@reduxjs/toolkit';
import quizReducer from 'src/features/Quiz/redux/quiz';
import authReducer from 'src/features/SignIn/redux/auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    quiz: quizReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
