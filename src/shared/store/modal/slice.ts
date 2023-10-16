import { createSlice } from "@reduxjs/toolkit";


interface IModal {
  visible: boolean;
  content: JSX.Element | null; 
}

const initialState: IModal = {
  visible: false,
  content: null, 
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.visible = true;
      state.content = action.payload; 
    },
    hideModal: state => {
      state.visible = false;
      state.content = null; 
    },
   
  },
});

export const { openModal, hideModal} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;