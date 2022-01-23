import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {makeStyles} from '@mui/styles'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {useNavigate} from 'react-router-dom';
import "./ListPage.css"


const useStyles = makeStyles({
  root:{
    // background: 'linear-gradient(45deg, rgba(2,10,1,0.5998774509803921) 30%, #097967 90%)',
    margin: 'auto',
    marginTop: 48,
    maxWidth: 600,
    height: '36vh',
    color: 'red',
    overflow: 'hidden'

  
  },
  tableRow:{
    fontSize: '48pt',
  },
 

})



const ListPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [posts, setPosts] = useState([]);
  let navigate = useNavigate()
  const classes = useStyles()
  const handleRowClick = (row) => {
    navigate(`/posts/${row._id}`)
  }

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - posts.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((data) => setPosts(data.data));
  }, []);

  console.log(posts);

  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table sx={{ minWidth: 340}} aria-label="posts table">
        <TableBody>
          {(rowsPerPage > 0
            ? posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : posts
          ).map((row) => (
            <TableRow className={classes.tableRow} key={row._id} onClick={() =>handleRowClick(row)}>
              <TableCell component="th" style={{ fontSize: '30%' ,  }} scope="row">
                {row.title}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.id}
              </TableCell>
              
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
                
        <TableFooter >
            <TableRow className={classes.tableRow} >
                <TablePagination 
                 style={{ fontSize: '30%' , color:'#ff652f' }} 
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={posts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: {
                        'aria-label' : 'rows per page',
                    },
                    native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );

  
};

export default ListPage;
