import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWolVEruXANtoK9mQQBTRnHBI59652fCoXw&s",
      name: "React Basic",
      title: "Короткая шпаргалка по useState и пропсам.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWolVEruXANtoK9mQQBTRnHBI59652fCoXw&s",
      name: "React Basic",
      title: "Короткая шпаргалка по useState и пропсам.",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWolVEruXANtoK9mQQBTRnHBI59652fCoXw&s",
      name: "React Basic",
      title: "Короткая шпаргалка по useState и пропсам.",
    },
  ],
};

const counterSlice = createSlice({
name: "CRUD",
initialState,
reducers:{
    
}
})