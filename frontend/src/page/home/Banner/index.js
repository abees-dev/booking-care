import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import bgImage from '../../../assets/banner.jpg';
import { listItem } from './listItem';

const BannerStyle = styled('div')(({ theme }) => ({
   background: `url(${bgImage}),linear-gradient(rgba(0, 0, 0, 0.25),rgba(255, 255, 255, 0.1))`,

   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'center',
   opacity: 0.9,
   paddingTop: '70px',
}));
const WrapperStyles = styled(Box)(({ theme }) => ({
   textAlign: 'center',
   padding: theme.spacing(8, 0),
}));
const HeadingStyles = styled(Stack)(({ theme }) => ({
   color: '#fff',
   textAlign: 'center',
   textTransform: 'uppercase',
   padding: theme.spacing(0, 0, 6, 0),
   textShadow: '1px 1px 1px #333',
}));
const SearchStyles = styled('div')(({ theme }) => ({
   position: 'relative',
   width: '40%',
   left: '50%',
   transform: 'translateX(-50%)',
   display: 'flex',
   alignItems: 'center',
   backgroundColor: '#f7d800',
   borderRadius: '100px',
}));
const InputStyles = styled('input')(({ theme }) => ({
   border: 'none',
   outline: 'none',
   width: '100%',
   height: '100%',
   backgroundColor: 'transparent',
   padding: theme.spacing(1.5, 0),
}));
const ServiceContainer = styled(Container)(({ theme }) => ({
   maxWidth: '1280px',
}));
const ImageWrapper = styled(Box)(({ theme }) => ({
   width: 50,
   height: 50,
   backgroundColor: '#fff',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 100,
   boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
}));
const ImageStyles = styled(Box)(({ theme }) => ({
   width: '70%',
   objectFit: 'contain',
   objectPosition: 'center',
}));

const ServiceTextStyle = styled(Typography)(({ theme }) => ({
   fontSize: 16,
   marginTop: 4,
   fontWeight: 500,
   whiteSpace: 'pre-line',
}));
const GridItemStyles = styled(Grid)(({ theme }) => ({
   color: '#424242',

   '&:hover': {
      color: '#49bce2',
      cursor: 'pointer',
   },
   // [theme.breakpoints.down('md')]: {
   // 	display: 'none',
   // },
}));

const TitleStyles = styled(Typography)(({ theme }) => ({}));
const Banner = () => {
   return (
      <>
         <BannerStyle component="div">
            <Container maxWidth="lg">
               <WrapperStyles>
                  <HeadingStyles>
                     <TitleStyles variant="h4" color="inherit" m={1}>
                        Nền tảng y tế
                     </TitleStyles>
                     <Typography
                        variant="h4"
                        color="inherit"
                        sx={{
                           fontWeight: '600',
                        }}>
                        chăm sóc sức khỏe toàn diện
                     </Typography>
                  </HeadingStyles>
                  <SearchStyles>
                     <SearchIcon
                        sx={{
                           padding: '12px 12px',
                        }}
                     />
                     <InputStyles
                        id="input-search"
                        placeholder="Tìm bác sĩ"></InputStyles>
                  </SearchStyles>
               </WrapperStyles>
            </Container>
            <Box
               component="div"
               sx={{
                  marginTop: 6,
                  background: 'linear-gradient(360deg, #fff 40%, transparent)',
               }}>
               <ServiceContainer maxWidth={false}>
                  <Grid container spacing={2} align="center">
                     {listItem.map((item, index) => (
                        <GridItemStyles
                           key={index}
                           item
                           lg={1.5}
                           md={3}
                           sm={4}
                           xs={6}>
                           <ImageWrapper component="div">
                              <ImageStyles
                                 component="img"
                                 src={item.img}></ImageStyles>
                           </ImageWrapper>
                           <ServiceTextStyle variant="h5" color="inherit">
                              {item.name}
                           </ServiceTextStyle>
                        </GridItemStyles>
                     ))}
                  </Grid>
               </ServiceContainer>
            </Box>
         </BannerStyle>
      </>
   );
};

export default Banner;
