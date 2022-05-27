import { CardMedia, FormControlLabel, Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import { createClouds } from '../../service/cloudService';

const UploadImage = () => {
   const [image, setImage] = useState(null);
   const [preview, setPreview] = useState();

   const onImageChange = (event) => {
      const file = event.target.files[0];
      setImage(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();

      formData.append('imageUrl', image);
      console.log([...formData]);
      try {
         const res = await createClouds(formData);
         console.log(res);
      } catch (error) {
         return error.response;
      }
   };
   return (
      <>
         <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
               }}>
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'baseline',
                     marginTop: '12px',
                  }}>
                  <FormControlLabel
                     label={<UploadIcon />}
                     labelPlacement="end"
                     control={
                        <input type="file" hidden onChange={onImageChange} />
                     }
                  />
                  <CardMedia
                     component="img"
                     src={preview}
                     sx={{
                        width: 240,
                        height: 100,
                        objectFit: 'contain',
                        objectPosition: 'center',
                     }}
                  />
               </Box>
            </Box>
            <Button variant="contained" type="submit">
               Submit
            </Button>
         </form>
      </>
   );
};

export default UploadImage;
