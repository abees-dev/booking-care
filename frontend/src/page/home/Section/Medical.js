import React from 'react';
import { Container, Stack, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

import 'swiper/css/navigation';
import NavigationButton from '../../../components/NavigationButton';
import SwiperParent from '../../../components/Card/SwiperParent';
import { SwiperSlide } from 'swiper/react';
import specialtyImg from '../../../assets/specialty/bv-viet-duc.jpg';

const ContainerFluid = styled(Stack)(({ theme }) => ({
   // backgroundColor: '#f5f5f5',
   borderBottom: '3px solid #efeef5',
   padding: theme.spacing(0, 0, 4, 0),
   justifyContent: 'center',
}));
const HeadingStyles = styled(Stack)(({ theme }) => ({
   flexDirection: 'row',
   justifyContent: 'space-between',
   margin: theme.spacing(4, 0),
}));

const Medical = () => {
   const className = {
      next: 'nextMedical',
      prev: 'prevMedical',
   };

   return (
      <>
         <ContainerFluid>
            <Container
               maxWidth="lg"
               sx={{ position: 'relative', paddingBottom: '75px' }}>
               <HeadingStyles>
                  <Typography variant="h5">Cơ Sở Nổi Bật</Typography>
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

export default Medical;
