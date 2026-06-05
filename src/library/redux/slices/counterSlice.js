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
  selectedItem: null,
  createImg: "",
  createName: "",
  createTitle: "",
  createModal: false,
  editModal: false,
  editName: "",
  editTitle: "",
  editImg: "",
  id: "",
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

    createBlock: (state, action) => {
      state.data.push(action.payload);

      state.createImg = "";
      state.createName = "";
      state.createTitle = "";
    },
    setCreateModal: (state, action) => {
      state.createModal = action.payload;
    },
    setCreatImg: (state, action) => {
      state.createImg = action.payload;
    },
    setCreatName: (state, action) => {
      state.createName = action.payload;
    },
    setCreatTitle: (state, action) => {
      state.createTitle = action.payload;
    },
    editblock: (state, action) => {
      console.log(action.payload);
      state.data = state.data.map((el) => {
        return el.id == action.payload.id ? { ...action.payload } : el;
      });
    },
    setEditModal: (state, action) => {
      state.editModal = action.payload;
    },
    setEditName: (state, action) => {
      state.editName = action.payload;
    },
    setEditImg: (state, action) => {
      state.editImg = action.payload;
    },
        
    setEditTitle: (state, action) => {
      state.editTitle = action.payload;
    },
    setEditId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const {
  deleteBlock,
  setViewModal,
  openViewModal,
  createBlock,
  setCreatImg,
  setCreatName,
  setCreatTitle,
  setCreateModal,
  editBlock,
  setEditImg,
  setEditName,
  setEditId,
  setEditModal,
  setEditTitle
} = counterSlice.actions;

export default counterSlice.reducer;
