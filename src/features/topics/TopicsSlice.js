import { createSlice } from "@reduxjs/toolkit";

export const topics = createSlice({
  name: "topics",
  initialState: {
    topics: {
      topics: {
        '123456': {
          id: "123456",
          name: "name of topic",
          icon: "icon url",
          quizIds: ["123"]
        },
        '7890': {
          id: "78900",
          name: "name of topic",
          icon: "icon url",
          quizIds: ["789"]
        }
      }
    },
    // newTopic: {
    //   id: "123456",
    //   name: "name of topic",
    //   icon: "icon url",
    //   quizIds: []
    // }
  },
  reducers: {
    addTopic: (state, action) => {
      state.topics.topics[action.payload.id] = action.payload;
    }
  }
});

export const selectTopics = (state) => state.topics;
export const { addTopic } = topics.actions;
export default topics.reducer;
