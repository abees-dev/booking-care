import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';
import specialtyImg from '../../assets/specialty/bv-viet-duc.jpg';
import { grey } from '@mui/material/colors';

const CardDoctor = () => {
   return (
      <Stack
         sx={{
            border: '1px solid #e0e0e0',
            padding: '0 12px 24px',
            textAlign: 'center',
         }}>
         <Avatar
            alt="Remy Sharp"
            src={specialtyImg}
            sx={{ width: 120, height: 120, margin: '12px auto' }}
         />
         <Typography
            variant="body1"
            color="initial"
            align="center"
            sx={{
               fontSize: 13,
            }}>
            Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thi Hùng
         </Typography>
         <Typography variant="body1" color={grey[600]} sx={{ fontSize: 12 }}>
            Thần Kinh
         </Typography>
      </Stack>
   );
};

export default CardDoctor;
