import { configureStore } from '@reduxjs/toolkit';

import { deviceSlice } from '../features/device/deviceSlice';

export default configureStore({
  reducer: {
    device: deviceSlice,
  },
});
