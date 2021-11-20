import React, { useState, useEffect } from 'react';
// import { data } from '../data';
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
  // const [newArray, setNewArray] = useState(data);
  const url = 'https://reqres.in/api/users?page=2';
  const [urlData, setUrlData] = useState([]);

  // const handleUpChange = (index) => {
  //   let newData = [...newArray];
  //   if (index > 0) {
  //     let temp = newData[index - 1];
  //     newData[index - 1] = newData[index];
  //     newData[index] = temp;
  //     setNewArray(newData);
  //   }
  // };

  // const handleDownChange = (index) => {
  //   let newData = [...newArray];
  //   if (index < newData.length - 1) {
  //     let temp = newData[index + 1];
  //     newData[index + 1] = newData[index];
  //     newData[index] = temp;
  //     setNewArray(newData);
  //   }
  // };

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setUrlData(json.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUrl();
  }, []);

  return (
    <div className='table'>
      <TableContainer component={Paper} className='table__container'>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell className='table__headerCell' />
              <TableCell className='table__headerCell'>First Name</TableCell>
              <TableCell className='table__headerCell'>Last Name</TableCell>
              <TableCell className='table__headerCell' />
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {newArray.map(({ id, name, email }, index) => (
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
            ))} */}
            {urlData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>
                  <ArrowCircleUpIcon />
                </TableCell>
                <TableCell>{data['first_name']}</TableCell>
                <TableCell>{data['last_name']}</TableCell>
                <TableCell>
                  <ArrowCircleDownIcon />
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
