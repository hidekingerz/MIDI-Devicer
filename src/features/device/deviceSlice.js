import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getInputDevice = createAsyncThunk('device/getInputDevice', async () => {
  const midiAccess = await navigator.requestMIDIAccess();
  // イテレータオブジェクトをArrayに変換して返す
  return Array.from(midiAccess.inputs.values());
});

const initialState = {
  inputDevice1: {},
  inputDevice2: {},
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setMIDIInput1: (state, action) => {
      state.inputDevice1 = action.payload;
    },
    setMIDIInput2: (state, action) => {
      state.inputDevice2 = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInputDevice.fulfilled, (state, action) => {
      console.log(action.payload);
      state.inputDevice1 = action.payload[0];
      state.inputDevice2 = action.payload[1];
    });
  },
});

// const { setMIDIInput1, setMIDIInput2 } = deviceSlice.actions;
export { getInputDevice };
export default deviceSlice.reducer;
