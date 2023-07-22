import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(MovieName, ReleasingYear,Description) {
  return {MovieName, ReleasingYear ,Description };
}

const rows = [
  createData('Arya','2013','Pure love story'),
  createData('Bunny','2015','Action Movie'),
  createData('Cherry', '2016','Angry Movie'),
  createData('Dhee','2017','romantic movie'),
  createData('Eagle','2018','action drama'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right"> MovieName</TableCell>
            <TableCell align="right">ReleasingYear</TableCell>
            <TableCell align="right">Description</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.MovieName}</TableCell>
              <TableCell align="right">{row.ReleasingYear}</TableCell>
              <TableCell align="right">{row.Description}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

