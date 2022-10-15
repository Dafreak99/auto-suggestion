import { createSlice } from '@reduxjs/toolkit';
import { defaultBlocks } from '../../constant';

const initialState = {
  keywordLength: localStorage.getItem('keywordLength') || 1,
  blocks: JSON.parse(localStorage.getItem('blocks')) || defaultBlocks,
};

export const slice = createSlice({
  name: 'default',
  initialState,
  reducers: {
    updateKeywordLength: (state, { payload }) => {
      state.keywordLength = payload;
      console.log(payload);
      localStorage.setItem('keywordLength', payload);
    },
    updateBlocks: (state, { payload: { index, checked } }) => {
      const newState = [...state.blocks];
      newState[index].show = checked;
      state.blocks = newState;
      localStorage.setItem('blocks', JSON.stringify(newState));
    },
  },
});

export const { updateKeywordLength, updateBlocks } = slice.actions;

export default slice.reducer;
