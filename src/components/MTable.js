import React, { useState } from 'react';
import { data } from '../data';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import '../css/MTable.css';

const MTable = () => {
  const [newArray, setNewArray] = useState(data);

  const handleUpChange = (index) => {
    let newData = [...newArray];
    if (index > 0) {
      let temp = newData[index - 1];
      newData[index - 1] = newData[index];
      newData[index] = temp;
      setNewArray(newData);
    }
  };

  const handleDownChange = (index) => {
    let newData = [...newArray];
    if (index < newData.length - 1) {
      let temp = newData[index + 1];
      newData[index + 1] = newData[index];
      newData[index] = temp;
      setNewArray(newData);
    }
  };
  return (
    <div className='table'>
      <TableContainer component={Paper} className='table__container'>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell className='table__headerCell' />
              <TableCell className='table__headerCell'>Name</TableCell>
              <TableCell className='table__headerCell'>Id</TableCell>
              <TableCell className='table__headerCell'>Email</TableCell>
              <TableCell className='table__headerCell' />
            </TableRow>
          </TableHead>
          <TableBody>
            {newArray.map(({ id, name, email }, index) => (
              <TableRow key={index}>
                <TableCell>
                  <ArrowCircleUpIcon onClick={() => handleUpChange(index)} />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{id}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>
                  <ArrowCircleDownIcon
                    onClick={() => handleDownChange(index)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MTable;
