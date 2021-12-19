import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "First Post",
    content: "Hello!",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions:{
      heart: "22",
      eyes: "122", 
    },
  },
  {
    id: "2",
    title: "Second Post",
    content: "More text",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions:{
      heart: "5",
      eyes: "45", 
    },
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addedReactions:(state,action)=>{
      const {postId,reaction} = action.payload;
      const existingPost = state.find(post=>post.id === postId)
      if(existingPost){
        existingPost.reactions[reaction]++
      }
    },
    addedPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            meta: "Buraya ek bilgi girebiliriz",
            error: false,
            user: userId,
            date: new Date().toISOString(),
            reactions:{
              heart: "",
              eyes: "", 
            },
          },
        };
      },
    },
    updatedPost: {
      reducer: (state, action) => {
        const { id, title, content } = action.payload;
        const existingPost = state.find((post) => post.id === id);
        if (existingPost) {
          existingPost.title = title;
          existingPost.content = content;
        }
      },
      prepare: (id, title, content) => {
        return {
          payload: {
            id,
            title,
            content,
          },
        };
      },
    },
  },
});
export const { addedPost, updatedPost,addedReactions } = postSlice.actions;
export default postSlice.reducer;
