import React from 'react';
import Carousel from './Components/carousel';
import Highlights from './Components/highlights';
import Description from './Components/description';
import Details from './Components/details';
import Contact from './Components/contact';
import ImageList from './Components/imageList';
import { Box, Typography, Chip } from '@mui/material';
import CopyToClipboardButton from './Components/copyToClipboard';

function App() {
  const isMobile = window.innerWidth <= 1000;

  return (
    <Box
      sx={isMobile ? {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      } : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2em'
      }}
    >
      {!isMobile && 
        <Box sx={{marginLeft: '-28em', marginBottom: '1em'}}>
          <Typography variant='h4' fontWeight='bold'>
            2022 Ford Transit T250
          </Typography>
          <Chip label='$85,000' variant='outlined' color='primary'/>
          <Chip label='14K Miles' variant='outlined' sx={{marginLeft: '.5em'}} color='primary'/>
          <Chip label='Bentonville, Arkansas' variant='outlined' sx={{marginLeft: '.5em'}} color='primary'/>
          <CopyToClipboardButton/>
        </Box>
      }

      <ImageList isMobile={isMobile}/>

      {isMobile && 
        <Box sx={{width: '98%', marginTop: '.5em'}}>
          <Typography variant='h5' fontWeight='bold'>
            2022 Ford Transit T250
          </Typography>
          <Chip label='$85,000' variant='outlined' color='primary'/>
          <Chip label='14K Miles' variant='outlined' sx={{marginLeft: '.5em'}} color='primary'/>
          <Chip label='Bentonville, Arkansas' variant='outlined' sx={{marginLeft: '.5em'}} color='primary'/>
        </Box>
      }

      <Contact isMobile={isMobile} />
      <Highlights isMobile={isMobile} />
      <Description isMobile={isMobile} />
      <Box sx={isMobile ? {width: '98%'} : {marginTop: '1em', marginBottom: '.75em', marginLeft: '-4em', width: '45em'}}>
        <Typography variant='h6' fontWeight={'bold'}>Gallery</Typography>
      </Box>
      <Carousel isMobile={isMobile}/>
      <Details isMobile={isMobile} />
    </Box>
  );
}

export default App;
