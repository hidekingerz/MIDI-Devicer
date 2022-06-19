import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getInputDevice } from './deviceSlice';

const Device = () => {
  const dispatch = useDispatch();
  const {
    device1ID,
    device1Name,
    device1Manufacturer,
    device1State,
    device2ID,
    device2Name,
    device2Manufacturer,
    device2State,
  } = useSelector((state) => state.device);

  useEffect(() => {
    dispatch(getInputDevice());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Typography variant={'h4'}>Devices</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Brand</TableCell>
              <TableCell align="left">DeviceName</TableCell>
              <TableCell align="left">State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {device1ID}
              </TableCell>
              <TableCell align="left">{device1Manufacturer}</TableCell>
              <TableCell align="left">{device1Name}</TableCell>
              <TableCell align="left">{device1State}</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {device2ID}
              </TableCell>
              <TableCell align="left">{device2Manufacturer}</TableCell>
              <TableCell align="left">{device2Name}</TableCell>
              <TableCell align="left">{device2State}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export { Device };
