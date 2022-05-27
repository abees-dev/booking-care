import React from 'react';
import { Box, Container, Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { SwiperSlide } from 'swiper/react';
import specialtyImg from '../../../assets/specialty/bv-viet-duc.jpg';
// import 'swiper/css/navigation';
import NavigationButton from '../../../components/NavigationButton';
import SwiperParent from '../../../components/Card/SwiperParent';
const ContainerFluid = styled(Stack)(({ theme }) => ({
   // height: 300,
   backgroundColor: '#f5f5f5',
   borderBottom: '3px solid #efeef5',
   margin: theme.spacing(12, 0, 4, 0),
   justifyContent: 'center',
}));
const HeadingStyles = styled(Stack)(({ theme }) => ({
   flexDirection: 'row',
   justifyContent: 'space-between',
   margin: theme.spacing(4, 0),
}));

const Specialist = () => {
   const className = {
      next: 'nextSpecial',
      prev: 'prevSpecial',
   };

   return (
      <>
         <ContainerFluid>
            <Container
               maxWidth="lg"
               sx={{ position: 'relative', paddingBottom: '75px' }}>
               <HeadingStyles>
                  <Typography variant="h5">Chuyên khoa phổ biến</Typography>
                  <Button variant="contained" color="primary">
                     Xem thêm
                  </Button>
               </HeadingStyles>
               <SwiperParent next={className.next} prev={className.prev}>
                  <SwiperSlide>
                     <Box>
                        <Box
                           component="img"
                           src={specialtyImg}
                           sx={{ width: '100%' }}></Box>
                        <Typography variant="body1" color="initial">
                           Cơ xương khớp
                        </Typography>
                     </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                     <Box>
                        <Box
                           component="img"
                           src={specialtyImg}
                           sx={{ width: '100%' }}></Box>
                        <Typography variant="body1" color="initial">
                           Cơ xương khớp
                        </Typography>
                     </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                     <Box>
                        <Box
                           component="img"
                           src={specialtyImg}
                           sx={{ width: '100%' }}></Box>
                        <Typography variant="body1" color="initial">
                           Cơ xương khớp
                        </Typography>
                     </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                     <Box>
                        <Box
                           component="img"
                           src={specialtyImg}
                           sx={{ width: '100%' }}></Box>
                        <Typography variant="body1" color="initial">
                           Cơ xương khớp
                        </Typography>
                     </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                     <Box>
                        <Box
                           component="img"
                           src={specialtyImg}
                           sx={{ width: '100%' }}></Box>
                        <Typography variant="body1" color="initial">
                           Cơ xương khớp
                        </Typography>
                     </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                     <Box>
                        <Box
                           component="img"
                           src={specialtyImg}
                           sx={{ width: '100%' }}></Box>
                        <Typography variant="body1" color="initial">
                           Cơ xương khớp
                        </Typography>
                     </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                     <Box>
                        <Box
                           component="img"
                           src={specialtyImg}
                           sx={{ width: '100%' }}></Box>
                        <Typography variant="body1" color="initial">
                           Cơ xương khớp
                        </Typography>
                     </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                     <Box>
                        <Box
                           component="img"
                           src={specialtyImg}
                           sx={{ width: '100%' }}></Box>
                        <Typography variant="body1" color="initial">
                           Cơ xương khớp
                        </Typography>
                     </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                     <Box>
                        <Box
                           component="img"
                           src={specialtyImg}
                           sx={{ width: '100%' }}></Box>
                        <Typography variant="body1" color="initial">
                           Cơ xương khớp
                        </Typography>
                     </Box>
                  </SwiperSlide>
               </SwiperParent>
               <NavigationButton next={className.next} prev={className.prev} />
            </Container>
         </ContainerFluid>
      </>
   );
};

export default Specialist;
