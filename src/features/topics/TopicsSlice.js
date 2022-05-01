import { createSlice } from "@reduxjs/toolkit";

export const topics = createSlice({
  name: "topics",
  initialState: {
    topics: {
      123456: {
        id: "123456",
        name: "Topic 1",
        icon:
          "https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/book.svg",
        quizIds: ["123"]
      },
      7890: {
        id: "78900",
        name: "Topic 2",
        icon:
          "https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/clover.svg",
        quizIds: ["789", "789010"]
      }
    }
    // newTopic: {
    //   id: "123456",
    //   name: "name of topic",
    //   icon: "icon url",
    //   quizIds: []
    // }
  },
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = action.payload;
    }
  }
});

export const selectTopics = (state) => state.topics;
export const { addTopic } = topics.actions;
export default topics.reducer;
