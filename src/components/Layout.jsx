import Container from '@mui/material/Container';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { ResponsiveAppBar } from './Common/ResponsiveAppBar';

const Layout = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <ResponsiveAppBar />
      <Outlet />
    </Container>
  );
};

export default Layout;
