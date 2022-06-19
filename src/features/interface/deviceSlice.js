import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getInputDevice = createAsyncThunk('device/getInputDevice', async () => {
  const midiAccess = await navigator.requestMIDIAccess();
  // イテレータオブジェクトをArrayに変換して返す
  return Array.from(midiAccess.inputs.values());
});

const initialState = {
  device1ID: '',
  device1Name: '',
  device1Manufacturer: '',
  device1State: '',
  device2ID: '',
  device2Name: '',
  device2Manufacturer: '',
  device2State: '',
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInputDevice.fulfilled, (state, action) => {
      let device1 = action.payload[0];
      let device2 = action.payload[1];

      state.device1ID = device1.id;
      state.device1Name = device1.name;
      state.device1Manufacturer = device1.manufacturer;
      state.device1State = device1.state;

      state.device2ID = device2.id;
      state.device2Name = device2.name;
      state.device2Manufacturer = device2.manufacturer;
      state.device2State = device2.state;
    });
  },
});

export { getInputDevice };
export default deviceSlice.reducer;
