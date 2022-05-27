import React from 'react';
import { Container, Stack, Grid, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import video from '../../../assets/video/video.webm';
import logo from '../../../assets/logo.svg';

const ContainerFluid = styled(Stack)(({ theme }) => ({
   backgroundColor: '#f5f5f5',
   borderBottom: '3px solid #efeef5',
   padding: theme.spacing(0, 0, 4, 0),
   justifyContent: 'center',
}));

const About = () => {
   return (
      <>
         <ContainerFluid>
            <Container
               maxWidth="lg"
               sx={{ position: 'relative', paddingBottom: '75px' }}>
               <Typography
                  variant="h4"
                  color="initial"
                  sx={{
                     margin: '24px 0',
                     fontWeight: 600,
                     fontSize: 24,
                  }}>
                  Truyền thông nói về BookingCare
               </Typography>
               <Grid container spacing={2}>
                  <Grid item lg={6}>
                     <CardMedia component="video" image={video} controls />
                  </Grid>
                  <Grid item lg={6}>
                     <Grid container spacing={2}>
                        <Grid item lg={6}>
                           <CardMedia component="img" src={logo} />
                        </Grid>
                        <Grid item lg={6}>
                           <CardMedia component="img" src={logo} />
                        </Grid>
                        <Grid item lg={6}>
                           <CardMedia component="img" src={logo} />
                        </Grid>
                        <Grid item lg={6}>
                           <CardMedia component="img" src={logo} />
                        </Grid>
                     </Grid>
                  </Grid>
               </Grid>
            </Container>
         </ContainerFluid>
      </>
   );
};

export default About;
