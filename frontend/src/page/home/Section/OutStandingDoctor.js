import React from 'react';
import { Container, Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import 'swiper/css/navigation';
import NavigationButton from '../../../components/NavigationButton';
import SwiperParent from '../../../components/Card/SwiperParent';
import CardDoctor from '../../../components/Card';
import { SwiperSlide } from 'swiper/react';
import { getAllDoctor } from '../../../service/doctorService';
const ContainerFluid = styled(Stack)(({ theme }) => ({
   // height: 300,
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

const OutStandingDoctor = () => {
   const className = {
      next: 'nextDoctor',
      prev: 'prevDoctor',
   };

   const [doctor, setDoctor] = React.useState(null);

   React.useEffect(() => {
      const feathData = async (limit) => {
         try {
            const res = await getAllDoctor(limit);
            setDoctor(res.doctor);
         } catch (error) {}
      };
      feathData();
   }, []);
   return (
      <>
         <ContainerFluid>
            <Container
               maxWidth="lg"
               sx={{ position: 'relative', paddingBottom: '75px' }}>
               <HeadingStyles>
                  <Typography variant="h5">Bác sĩ nỗi bật tuần qua</Typography>
                  <Button variant="contained" color="primary">
                     Xem thêm
                  </Button>
               </HeadingStyles>
               <SwiperParent next={className.next} prev={className.prev}>
                  {doctor &&
                     doctor.map((item) => (
                        <SwiperSlide key={item._id}>
                           <CardDoctor></CardDoctor>
                        </SwiperSlide>
                     ))}
               </SwiperParent>
               <NavigationButton next={className.next} prev={className.prev} />
            </Container>
         </ContainerFluid>
      </>
   );
};

export default OutStandingDoctor;
