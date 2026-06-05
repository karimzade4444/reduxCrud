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
  viewModal: false,
  selectedItem:null,
};

const counterSlice = createSlice({
  name: "CRUD",
  initialState,
  reducers: {
    deleteBlock: (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload);
    },
    setViewModal: (state, action) => {
      state.viewModal = action.payload;
      if (!action.payload) {
        state.selectedItem = null;
      }
    },
    openViewModal: (state, action) => {
      state.selectedItem = action.payload; 
      state.viewModal = true; 
    },
  },
});

export const{deleteBlock,setViewModal, openViewModal} = counterSlice.actions

export default counterSlice.reducer