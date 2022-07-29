import { createSlice } from "@reduxjs/toolkit";

const topics = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = action.payload;
    },
    addQuiz: (state, action) => {
      state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuiz } = topics.actions;
export default topics.reducer;
