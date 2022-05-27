import React from 'react';
import { Container, Stack, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

import 'swiper/css/navigation';
import NavigationButton from '../../../components/NavigationButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import specialtyImg from '../../../assets/specialty/bv-viet-duc.jpg';

const ContainerFluid = styled(Stack)(({ theme }) => ({
   backgroundColor: '#f5f5f5',
   borderBottom: '3px solid #efeef5',
   padding: theme.spacing(0, 0, 4, 0),
   justifyContent: 'center',
}));
const HeadingStyles = styled(Stack)(({ theme }) => ({
   flexDirection: 'row',
   justifyContent: 'space-between',
   margin: theme.spacing(4, 0),
}));

const HandBook = () => {
   const className = {
      next: 'nextHandBook',
      prev: 'prevHandBook',
   };

   return (
      <>
         <ContainerFluid>
            <Container
               maxWidth="lg"
               sx={{ position: 'relative', paddingBottom: '75px' }}>
               <HeadingStyles>
                  <Typography variant="h5">Cẩm Nang</Typography>
                  <Button variant="contained" color="primary">
                     tất cả bài viết
                  </Button>
               </HeadingStyles>
               <Swiper
                  modules={[Navigation]}
                  slidesPerView={2}
                  spaceBetween={20}
                  loop={true}
                  navigation={{
                     prevEl: `.${className.next}`,
                     nextEl: `.${className.prev}`,
                  }}>
                  <SwiperSlide>
                     <Stack
                        sx={{
                           flexDirection: 'row',
                           justifyContent: 'space-evenly',
                        }}>
                        <Box
                           component="img"
                           src={specialtyImg}
                           sx={{ width: '100%', marginRight: '12px' }}></Box>
                        <Typography variant="body1" color="initial">
                           8 bệnh viện, phòng khám chữa Đau vai gáy uy tín tại
                           hà nội
                        </Typography>
                     </Stack>
                  </SwiperSlide>
               </Swiper>

               <NavigationButton next={className.next} prev={className.prev} />
            </Container>
         </ContainerFluid>
      </>
   );
};

export default HandBook;
