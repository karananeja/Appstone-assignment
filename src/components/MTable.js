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
import { ArrowCircleUp, ArrowCircleDown } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import '../css/MTable.css';

const MTable = () => {
  const url = 'https://reqres.in/api/users?page=2';
  const [urlData, setUrlData] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  // const [newArray, setNewArray] = useState(urlData);

  // const handleUpChange = (index) => {
  //   let newData = [...urlData];
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

  const searchInput = () => {
    let searchData = [...urlData];

    for (let i = 0; i < urlData.length; i++) {
      if (
        urlData[i]['first_name'].toLowerCase() === inputSearch.toLowerCase()
      ) {
        console.log('success');
      }
      // console.log(urlData[i]['first_name']);
    }
  };

  return (
    <div className='table'>
      <div className='table__up'>
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
              {urlData.map(({ id, first_name, last_name }) => (
                <TableRow key={id}>
                  <TableCell>
                    <ArrowCircleUp />
                  </TableCell>
                  <TableCell>{first_name}</TableCell>
                  <TableCell>{last_name}</TableCell>
                  <TableCell>
                    <ArrowCircleDown />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='table__down'>
        <div className='table__downInput'>
          <input
            className='table__input'
            type='text'
            placeholder='Search First Name'
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <Search onClick={searchInput} />
        </div>
      </div>
    </div>
  );
};

export default MTable;
