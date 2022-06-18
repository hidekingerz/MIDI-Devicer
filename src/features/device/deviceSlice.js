import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputDevice: {},
  outputDevice: {},
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {},
});

export { deviceSlice };
