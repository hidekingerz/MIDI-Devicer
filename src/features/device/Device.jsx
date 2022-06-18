import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getInputDevice } from './deviceSlice';

const Device = () => {
  const dispatch = useDispatch();
  const { inputDevice1, inputDevice2 } = useSelector((state) => state.device);

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
                {inputDevice1.id}
              </TableCell>
              <TableCell align="left">{inputDevice1.manufacturer}</TableCell>
              <TableCell align="left">{inputDevice1.name}</TableCell>
              <TableCell align="left">{inputDevice1.state}</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {inputDevice2.id}
              </TableCell>
              <TableCell align="left">{inputDevice2.manufacturer}</TableCell>
              <TableCell align="left">{inputDevice2.name}</TableCell>
              <TableCell align="left">{inputDevice2.state}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export { Device };
