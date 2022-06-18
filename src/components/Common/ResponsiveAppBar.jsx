import AdbIcon from '@mui/icons-material/Adb';
import { MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const ResponsiveAppBar = () => {
  const navigate = useNavigate();

  const navigateToRoot = () => {
    navigate('/', { replace: true });
  };
  const navigateToDevice = () => {
    navigate('/device', { replace: true });
  };
  const navigateToInterface = () => {
    navigate('/interface', { replace: true });
  };

  return (
    <AppBar position="static" sx={{ marginBottom: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={navigateToRoot}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MIDI Devicer
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MenuItem onClick={navigateToDevice}>
              <Typography>Device</Typography>
            </MenuItem>
            <MenuItem onClick={navigateToInterface}>
              <Typography>Interface</Typography>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export { ResponsiveAppBar };
