import React from 'react';
import Container from '@mui/material/Container';
import {
   styled,
   Grid,
   CardMedia,
   Typography,
   List,
   ListItem,
   ListItemText,
} from '@mui/material';
import logo from '../../../assets/logo.svg';
import { Box } from '@mui/system';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CheckIcon from '@mui/icons-material/Check';

const ContainerFluid = styled('div')(({ theme }) => ({
   padding: theme.spacing(6, 0),
}));
const BoxContent = styled(Box)(({ theme }) => ({
   display: 'flex',
   margin: theme.spacing(1, 0),
}));
const ListItemStyles = styled(ListItem)(({ theme }) => ({
   padding: theme.spacing(0),
}));
const ListItemTextStyles = styled(ListItemText)(({ theme }) => ({
   fontSize: 12,
}));
const Footer = () => {
   return (
      <>
         <ContainerFluid>
            <Container maxWidth="lg">
               <Grid container spacing={2}>
                  <Grid item xs={6}>
                     <CardMedia
                        component="img"
                        src={logo}
                        sx={{ width: '60%' }}
                     />
                     <Typography
                        variant="body1"
                        sx={{
                           fontSize: 18,
                           fontWeight: 500,
                           marginTop: 2,
                        }}>
                        Công ty Cổ phần Công nghệ BookingCare
                     </Typography>
                     <BoxContent>
                        <AddLocationIcon fontSize="small" />
                        <Typography variant="subtitle2">
                           28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội
                        </Typography>
                     </BoxContent>

                     <BoxContent>
                        <CheckIcon fontSize="small" />
                        <Typography variant="subtitle2">
                           ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày
                           16/03/2015
                        </Typography>
                     </BoxContent>
                  </Grid>
                  <Grid item xs={3}>
                     <List
                        component="nav"
                        sx={{
                           fontSize: '12',
                           color: '#45c3d8',
                        }}>
                        <ListItemStyles>
                           <ListItemTextStyles primary="Liên hệ hợp tác" />
                        </ListItemStyles>
                        <ListItemStyles>
                           <ListItemTextStyles primary="Câu hỏi thường gặp" />
                        </ListItemStyles>
                        <ListItemStyles>
                           <ListItemTextStyles primary="Điều khoản sử dụng" />
                        </ListItemStyles>
                        <ListItemStyles>
                           <ListItemTextStyles primary="Trụ sở tại Hà Nội" />
                        </ListItemStyles>
                        <ListItemStyles>
                           <ListItemTextStyles primary="Chính sách Bảo mật" />
                        </ListItemStyles>
                        <ListItemStyles>
                           <ListItemTextStyles primary="Quy trình hỗ trợ giải quyết khiếu nại" />
                        </ListItemStyles>
                     </List>
                  </Grid>
                  <Grid item xs={3}>
                     <List
                        component="nav"
                        sx={{
                           fontSize: '12',
                           fontWeight: 600,
                        }}>
                        <ListItemStyles>
                           <ListItemText
                              primary="Trụ sở tại Hà Nội"
                              secondary="28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội"
                           />
                        </ListItemStyles>
                        <ListItemStyles>
                           <ListItemText
                              primary="Văn phòng tại TP Hồ Chí Minh"
                              secondary="6/6 Cách Mạch Tháng Tám, P. Bến Thành, Quận 1"
                           />
                        </ListItemStyles>
                        <ListItemStyles>
                           <ListItemText
                              primary="Hỗ trợ khách hàng"
                              secondary="support@bookingcare.vn (7h - 18h)"
                           />
                        </ListItemStyles>
                     </List>
                  </Grid>
               </Grid>
            </Container>
         </ContainerFluid>
      </>
   );
};

export default Footer;
