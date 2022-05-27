import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import {
   Button,
   FormControlLabel,
   FormLabel,
   Select,
   InputAdornment,
   IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRecoilState } from 'recoil';
import { useSnackbar } from 'notistack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
//
import { genderState, positionState, roleState } from './allCodeState';
import axiosConfig from '../../utils/axiosConfig';
import UploadImage from './UploadImage';
import { createUser, updateUser } from '../../service/userService';

const ControlLabelStyled = styled(FormControlLabel)(({ theme }) => ({
   alignItems: 'flex-start',
   width: '100%',
   color: '#616161',
   marginLeft: 0,
}));
const HelperTextStyles = styled(FormHelperText)(({ theme }) => ({
   marginLeft: 0,
   color: '#d32f2f',
}));

const schema = yup.object({
   username: yup.string().required('Please enter your username'),
   email: yup.string().required('Please enter your email'),
   fullName: yup.string().required('Please enter your full name'),
   password: yup.string().required('Please enter your password'),
   address: yup.string().required('Please enter your address'),
   phoneNumber: yup.string().required('Please enter your phone number'),
   positionId: yup.string().required('Please select gender'),
   roleId: yup.string().required('Please select Role'),
   gender: yup.string().required('Please select position'),
});

const FormUser = ({ onSuccess, editUser, action, handleClose }) => {
   const [gender, setGender] = useRecoilState(genderState);
   const [role, setRole] = useRecoilState(roleState);
   const [position, setPosition] = useRecoilState(positionState);
   const [showPass, setShowPass] = React.useState(false);
   const { enqueueSnackbar } = useSnackbar();

   const handleShow = () => {
      setShowPass(true);
   };
   const handleHide = () => {
      setShowPass(false);
   };
   const fieldSet = [
      {
         id: 'inputUsername',
         label: 'Username',
         registerName: 'username',
         layout: 6,
      },
      {
         id: 'inputEmail',
         label: 'Email',
         registerName: 'email',
         type: 'email',
         layout: 6,
      },
      {
         id: 'inputFullName',
         label: 'FullName',
         registerName: 'fullName',
         layout: 6,
      },
      {
         id: 'inputPassword',
         label: 'Password',
         type: 'password',
         registerName: 'password',
         layout: 6,
         show: {
            endAdornment: (
               <InputAdornment position="end">
                  <IconButton onClick={handleShow}>
                     <VisibilityOffIcon />
                  </IconButton>
               </InputAdornment>
            ),
         },
         hide: {
            endAdornment: (
               <InputAdornment position="end">
                  <IconButton onClick={handleHide}>
                     <VisibilityIcon />
                  </IconButton>
               </InputAdornment>
            ),
         },
      },
      {
         id: 'inputAddress',
         label: 'Address',
         registerName: 'address',
         layout: 12,
      },
      {
         id: 'inputPhoneNumber',
         label: 'Phone number',
         registerName: 'phoneNumber',
         layout: 6,
      },
   ];

   const handleClickVariant = (message, variant) => () => {
      // variant could be success, error, warning, info, or default
      enqueueSnackbar(message, {
         variant,
         anchorOrigin: { horizontal: 'right', vertical: 'top' },
      });
   };

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      defaultValues: {
         username: editUser?.username || 'admin',
         email: editUser?.email || 'admin@gmail.com',
         fullName: editUser?.fullName || 'ABees Dev',
         password: editUser?.password || 'admin',
         address: editUser?.address || 'admin address',
         phoneNumber: editUser?.phoneNumber || '0332414089',
         imageUrl: editUser?.imageUrl || '',
      },
      resolver: yupResolver(schema),
   });
   const getAllCode = async (type, setState) => {
      const res = await axiosConfig.get('/all-code', {
         params: {
            type: type,
         },
      });
      setState(res);
   };

   useEffect(() => {
      getAllCode('GENDER', setGender);
      getAllCode('ROLE', setRole);
      getAllCode('POSITION', setPosition);

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   // const formData = new FormData();
   const handleSubmitForm = async (data) => {
      if (action === 'edit') {
         try {
            await updateUser(data, editUser._id);
            onSuccess(data, editUser._id);
            handleClose();
         } catch (error) {
            return error.response;
         }
      } else if (action === 'create') {
         const formData = new FormData();
         console.log(formData);
         formData.append('username', data.username);
         formData.append('email', data.email);
         formData.append('password', data.password);
         formData.append('fullName', data.fullName);
         formData.append('address', data.address);
         formData.append('phoneNumber', data.phoneNumber);
         formData.append('gender', data.gender);
         formData.append('roleId', data.roleId);
         formData.append('positionId', data.positionId);
         formData.append('imageUrl', image ? image : data.imageUrl);
         try {
            const res = await createUser(formData);

            if (res.newUser) {
               onSuccess(res.newUser);
               handleClose();
               reset();
            } else if (res.success === false) {
               handleClickVariant(res.message, 'error')();
            }
         } catch (error) {
            return error.response;
         }
      }
   };

   const [image, setImage] = useState(null);
   const [preview, setPreview] = useState();

   const onchangeImage = (event) => {
      const file = event.target.files[0];
      setImage(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
   };

   return (
      <>
         <FormControl
            component="form"
            fullWidth
            onSubmit={handleSubmit(handleSubmitForm)}>
            <Grid container spacing={2}>
               {fieldSet.map((field) => (
                  <Grid item key={field.id} xs={field.layout}>
                     <ControlLabelStyled
                        control={
                           <TextField
                              fullWidth
                              margin="dense"
                              size="small"
                              type={
                                 field?.type === 'password' && !showPass
                                    ? 'password'
                                    : 'text'
                              }
                              id={field.id}
                              label={field.label}
                              InputProps={showPass ? field?.hide : field?.show}
                              {...register(field.registerName)}
                           />
                        }
                        labelPlacement="top"
                        label={field.label}
                     />
                     {errors[field.registerName] && (
                        <HelperTextStyles
                           children={`${errors[field.registerName]?.message}`}
                        />
                     )}
                  </Grid>
               ))}
            </Grid>
            <Grid container spacing={2}>
               <Grid item xs={4}>
                  <FormControl fullWidth margin="dense" id="my-form">
                     <FormLabel sx={{ marginBottom: 1 }} component="legend">
                        Gender
                     </FormLabel>

                     <Select
                        native
                        margin="dense"
                        id="grouped-native-select"
                        defaultValue={editUser?.gender || ''}
                        {...register('gender')}
                        size="small">
                        {gender?.data &&
                           gender?.data.map((item) => (
                              <option key={item._id} value={item.valueEn}>
                                 {item.valueEn}
                              </option>
                           ))}
                     </Select>
                     {errors['gender'] && (
                        <HelperTextStyles
                           children={`${errors['gender']?.message}`}
                        />
                     )}
                  </FormControl>
               </Grid>
               <Grid item xs={4}>
                  <FormControl fullWidth margin="dense">
                     <FormLabel sx={{ marginBottom: 1 }} component="legend">
                        Role
                     </FormLabel>

                     <Select
                        {...register('roleId')}
                        native
                        margin="dense"
                        id="grouped-native-select"
                        defaultValue={editUser?.roleId || ''}
                        size="small">
                        {role?.data &&
                           role?.data.map((item) => (
                              <option key={item._id} value={item.valueEn}>
                                 {item.valueEn}
                              </option>
                           ))}
                     </Select>
                     {errors['roleId'] && (
                        <HelperTextStyles
                           children={`${errors['roleId']?.message}`}
                        />
                     )}
                  </FormControl>
               </Grid>
               <Grid item xs={4}>
                  <FormControl fullWidth margin="dense">
                     <FormLabel sx={{ marginBottom: 1 }} component="legend">
                        Position
                     </FormLabel>

                     <Select
                        native
                        margin="dense"
                        id="grouped-native-select"
                        defaultValue={editUser?.positionId || ''}
                        {...register('positionId')}
                        size="small">
                        {position?.data &&
                           position?.data.map((item) => (
                              <option key={item._id} value={item.valueEn}>
                                 {item.valueEn}
                              </option>
                           ))}
                     </Select>
                     {errors['positionId'] && (
                        <HelperTextStyles
                           children={`${errors['positionId']?.message}`}
                        />
                     )}
                  </FormControl>
               </Grid>
            </Grid>
            <UploadImage
               onchangeImage={onchangeImage}
               imageUrl={editUser?.imageUrl}
               image={image}
               preview={preview}></UploadImage>
            <Button type="submit" variant="contained" sx={{ marginY: 3 }}>
               Save
            </Button>
         </FormControl>
      </>
   );
};

export default FormUser;
