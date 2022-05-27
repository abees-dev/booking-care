import React from 'react';
import {
   DialogTitle,
   Grid,
   Dialog,
   Button,
   Typography,
   DialogContent,
   DialogActions,
   Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { styled } from '@mui/system';
import { useSnackbar } from 'notistack';
import FormUser from '../../../components/FormUser';
import DashBoardLayout from '../../../components/LayoutContainer/DashBoardLayout';
import TablesUser from '../../../components/Tables/TablesUser';
import { createUser, getUser } from '../../../service/userService';

const DialogStyled = styled(Dialog)(({ theme }) => ({
   '& .MuiPaper-root': {
      padding: '0 32px ',
      maxHeight: '500px',
   },
}));
const User = ({ onSaveClick }) => {
   const [userData, setUserData] = React.useState(null);
   const [editUser, setEditUser] = React.useState(null);
   const [action, setAction] = React.useState('');
   const { enqueueSnackbar } = useSnackbar();
   const handleClickVariant = (message, variant) => () => {
      // variant could be success, error, warning, info, or default
      enqueueSnackbar(message, {
         variant,
         anchorOrigin: { horizontal: 'right', vertical: 'top' },
      });
   };

   React.useEffect(() => {
      const getData = async () => {
         const res = await getUser();
         setUserData(res.user);
      };
      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const onSuccess = (data, id) => {
      setUserData((prev) => {
         if (id) {
            handleClickVariant('Update User successfully', 'success')();

            return prev.map((item) => (item._id === id ? data : item));
         }
         handleClickVariant('Create User successfully', 'success')();

         return [data, ...prev];
      });
   };
   const deleteSuccess = (id) => {
      setUserData((prev) => prev.filter((item) => item._id !== id));
      handleClickVariant('Delete User successfully', 'success')();
   };
   const handleEditUser = (data) => {
      setAction('edit');
      setEditUser(data);
   };
   // Test Dialog

   const [open, setOpen] = React.useState(false);
   const handleCreateUser = () => {
      setAction('create');
      setOpen(true);
   };
   const handleClickOpen = () => {
      setOpen(true);
   };
   const handleClose = () => {
      setOpen(false);
   };

   return (
      <>
         <DashBoardLayout>
            <Box
               component="div"
               sx={{
                  margin: '24px 0',
               }}>
               <Button onClick={handleCreateUser} variant="contained">
                  Create User
               </Button>
               <DialogStyled maxWidth="md" open={open} onClose={handleClose}>
                  <DialogTitle>
                     {action === 'edit' ? 'Edit User' : 'CreateUser'}
                  </DialogTitle>
                  <DialogContent>
                     <FormUser
                        onSuccess={onSuccess}
                        editUser={editUser}
                        action={action}
                        handleClose={handleClose}
                     />
                  </DialogContent>
               </DialogStyled>
            </Box>
            <Grid container spacing={3}>
               {/* <FormUser onSuccess={onSuccess} editUser={editUser} /> */}

               <Grid item xs={12}>
                  <TablesUser
                     data={userData}
                     openModal={handleClickOpen}
                     deleteSuccess={deleteSuccess}
                     editUser={handleEditUser}></TablesUser>
               </Grid>
            </Grid>
         </DashBoardLayout>
      </>
   );
};

export default User;
