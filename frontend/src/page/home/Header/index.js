import React from 'react';
import {
   Container,
   Box,
   IconButton,
   Grid,
   Typography,
   Button,
} from '@mui/material';
import { styled } from '@mui/system';
import logo from '../../../assets/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help';

const WrapperStyle = styled('div')(({ theme }) => ({
   height: '70px',
   backgroundColor: '#f5f5f5',
   boxShadow: '0px 0px 4px #616161',
   position: 'fixed',
   right: 0,
   left: 0,
   top: 0,
   zIndex: 1000,
}));
const ContainerStyle = styled(Container)(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   height: '100%',
   // backgroundColor: '#ccc',
}));
const LogoContentStyle = styled('div')(({ theme }) => ({
   display: 'flex',
}));
const LogoStyle = styled(Box)(({ theme }) => ({
   width: '160px',
   objectFit: 'contain',
}));
const ItemStyle = styled(Typography)(({ theme }) => ({
   fontSize: '12px',
   fontWeight: '500',
}));
const HelpTextStyle = styled(Typography)(({ theme }) => ({
   fontSize: '10px',
   color: '#757575',
   fontWeight: '400',
}));

const Header = () => {
   return (
      <>
         <WrapperStyle>
            <ContainerStyle maxWidth="lg">
               <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                  <Grid item xs={3}>
                     <LogoContentStyle>
                        <IconButton aria-label="">
                           <MenuIcon />
                        </IconButton>
                        <LogoStyle component="img" src={logo} alt="" />
                     </LogoContentStyle>
                  </Grid>
                  <Grid item xs={7}>
                     <Grid container spacing={1}>
                        <Grid item xs={3}>
                           <ItemStyle variant="h5" color="initial">
                              Chuyên khoa
                           </ItemStyle>
                           <HelpTextStyle variant="body1" color="initial">
                              Tìm bác sĩ theo chuyên khoa
                           </HelpTextStyle>
                        </Grid>
                        <Grid item xs={3}>
                           <ItemStyle variant="h5" color="initial">
                              Cơ sở y tế
                           </ItemStyle>
                           <HelpTextStyle variant="body1" color="initial">
                              Chọn bệnh viện phòng khám
                           </HelpTextStyle>
                        </Grid>
                        <Grid item xs={2}>
                           <ItemStyle variant="h5" color="initial">
                              Bác sĩ
                           </ItemStyle>
                           <HelpTextStyle variant="body1" color="initial">
                              Chọn bác sĩ giỏi
                           </HelpTextStyle>
                        </Grid>
                        <Grid item xs={4}>
                           <ItemStyle variant="h5" color="initial">
                              Gói khám
                           </ItemStyle>
                           <HelpTextStyle variant="body1" color="initial">
                              Khám sức khỏe tổng quát
                           </HelpTextStyle>
                        </Grid>
                     </Grid>
                  </Grid>
                  <Grid item xs={2}>
                     <Button
                        variant="text"
                        color="info"
                        sx={{
                           textTransform: 'none',
                        }}
                        startIcon={<HelpIcon sx={{ margin: '0px' }} />}>
                        Hỗ trợ
                     </Button>
                  </Grid>
               </Grid>
            </ContainerStyle>
         </WrapperStyle>
      </>
   );
};

export default Header;
