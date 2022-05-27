import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { IconButton } from '@mui/material';
import { deleteUser } from '../../service/userService';
import User from '../../layout/dashboard/user';

const headCells = [
   {
      id: 'email',
      numeric: true,
      disablePadding: false,
      label: 'Email',
   },
   {
      id: 'FullName',
      numeric: true,
      disablePadding: false,
      label: 'FullName',
   },
   {
      id: 'PhoneNumber',
      numeric: true,
      disablePadding: false,
      label: 'PhoneNumber',
   },
   {
      id: 'Address',
      numeric: true,
      disablePadding: false,
      label: 'Address',
   },
   {
      id: 'Gender',
      numeric: true,
      disablePadding: false,
      label: 'Gender',
   },
   {
      id: 'Role',
      numeric: true,
      disablePadding: false,
      label: 'Role',
   },
   {
      id: 'Position',
      numeric: true,
      disablePadding: false,
      label: 'Position',
   },
   {
      id: 'actions',
      numeric: true,
      disablePadding: false,
      label: 'Actions',
   },
];

function EnhancedTableHead() {
   return (
      <TableHead>
         <TableRow>
            {headCells.map((headCell) => (
               <TableCell key={headCell.id} align="center" padding="normal">
                  {headCell.label}
               </TableCell>
            ))}
         </TableRow>
      </TableHead>
   );
}

const EnhancedTableToolbar = () => {
   return (
      <Toolbar
         sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
         }}>
         <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div">
            User manager
         </Typography>
      </Toolbar>
   );
};

export default function TablesUser({
   data,
   deleteSuccess,
   editUser,
   openModal,
}) {
   const handleDeleteUser = async (userId) => {
      try {
         await deleteUser(userId);
         deleteSuccess(userId);
      } catch (error) {
         console.log(error);
      }
   };
   const handleEditUser = (data) => {
      editUser(data);
      openModal();
   };
   return (
      <Box sx={{ width: '100%' }}>
         <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar />
            <TableContainer>
               <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size="medium">
                  <EnhancedTableHead />
                  <TableBody>
                     {data?.map((row, index) => (
                        <TableRow
                           key={index}
                           hover
                           role="checkbox"
                           tabIndex={-1}>
                           <TableCell
                              component="th"
                              id={row._id}
                              align="center"
                              key={row._id}
                              scope="row">
                              {row.email}
                           </TableCell>
                           <TableCell align="center">{row.fullName}</TableCell>
                           <TableCell align="center">
                              {row.phoneNumber}
                           </TableCell>
                           <TableCell align="center">{row.address}</TableCell>
                           <TableCell align="center">{row.gender}</TableCell>
                           <TableCell align="center">{row.roleId}</TableCell>
                           <TableCell align="center">
                              {row.positionId}
                           </TableCell>
                           <TableCell align="center">
                              <IconButton
                                 aria-label="Edit"
                                 color="warning"
                                 onClick={() => handleEditUser(row)}>
                                 <EditIcon />
                              </IconButton>
                              <IconButton
                                 aria-label="delete"
                                 color="error"
                                 onClick={() => handleDeleteUser(row._id)}>
                                 <DeleteIcon />
                              </IconButton>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </Paper>
      </Box>
   );
}
