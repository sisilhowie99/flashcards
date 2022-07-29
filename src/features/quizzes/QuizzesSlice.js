import { createSlice } from "@reduxjs/toolkit";
import { addQuiz as addQuizToTopicsQuizIds } from "../topics/TopicsSlice";

export const addQuizToTopic = (payload) => {
  return (dispatch) => {
    // add quiz to quizzes state
    dispatch(addQuiz(payload));

    // add quiz to the associated topic's quizIds array
    dispatch(
      addQuizToTopicsQuizIds({
        topicId: payload.topicId,
        quizId: payload.id
      })
    );
  };
};

export const quizzes = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = action.payload;
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzes.actions;
export default quizzes.reducer;
