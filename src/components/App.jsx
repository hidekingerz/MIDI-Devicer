import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Device } from '../features/device/Device';

import Layout from './layout';

const Interface = () => {
  return <div>interface</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="device" element={<Device />} />
        <Route path={'interface'} element={<Interface />} />
      </Route>
    </Routes>
  );
};

export { App };
