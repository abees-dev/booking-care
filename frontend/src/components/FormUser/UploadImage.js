import { CardMedia, FormControlLabel, Box } from '@mui/material';
import React from 'react';
import UploadIcon from '@mui/icons-material/Upload';

const UploadImage = ({ image, preview, onchangeImage, imageUrl }) => {
   return (
      <>
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
                     <input type="file" hidden onChange={onchangeImage} />
                  }
               />
               <CardMedia
                  component="img"
                  src={imageUrl ? imageUrl : preview}
                  sx={{
                     width: 240,
                     height: 100,
                     objectFit: 'contain',
                     objectPosition: 'center',
                  }}
               />
            </Box>
         </Box>
      </>
   );
};

export default UploadImage;
