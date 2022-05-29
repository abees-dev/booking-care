import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';
import { Trans, withNamespaces } from 'react-i18next';
import specialtyImg from '../../assets/specialty/bv-viet-duc.jpg';
import { grey } from '@mui/material/colors';

const CardDoctor = ({ t, name, imageUrl, position }) => {
   return (
      <Stack
         sx={{
            border: '1px solid #e0e0e0',
            padding: '0 12px 24px',
            textAlign: 'center',
         }}>
         <Avatar
            alt="Remy Sharp"
            src={imageUrl}
            sx={{ width: 120, height: 120, margin: '12px auto', boxShadow: 1 }}
         />
         <Typography
            variant="body1"
            color="initial"
            align="center"
            sx={{
               fontSize: 13,
            }}>
            {t(position)} {t(name)}
         </Typography>
         <Typography variant="body1" color={grey[600]} sx={{ fontSize: 12 }}>
            Thần Kinh
         </Typography>
      </Stack>
   );
};

export default withNamespaces()(CardDoctor);
