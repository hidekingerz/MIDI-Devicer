import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import deviceSlice from '../features/device/deviceSlice';

export default configureStore({
  reducer: {
    device: deviceSlice,
  },
  middleware: [thunk],
});
