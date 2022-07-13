import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasCreationSucceed: false,
  hasUpdateSucceed: false,
  hasDeleteSucceed: false,
};

const successSlice = createSlice({
  name: 'success',
  initialState,
  reducers: {
    creationSuccess: (state) => {
      state.hasCreationSucceed = true;
    },
    afterCreationSuccess: (state) => {
      state.hasCreationSucceed = false;
    },
    updateSuccess: (state) => {
      state.hasUpdateSucceed = true;
    },
    afterUpdateSuccess: (state) => {
      state.hasUpdateSucceed = false;
    },
    deleteSuccess: (state) => {
      state.hasDeleteSucceed = true;
    },
    afterDeleteSuccess: (state) => {
      state.hasDeleteSucceed = false;
    },
  },
});

export const {
  creationSuccess,
  afterCreationSuccess,
  updateSuccess,
  afterUpdateSuccess,
  deleteSuccess,
  afterDeleteSuccess,
} = successSlice.actions;
export default successSlice.reducer;
