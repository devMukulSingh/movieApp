import React from 'react';
import { Box, styled } from "@mui/material";
import HeroBanner from './HeroBanner';
import Trending from '../Components/Home/Trending.jsx';
import Popular from '../Components/Home/Popular.jsx';
import TopRated from '../Components/Home/TopRated.jsx';

/////////////////////////////////
const MainBox = styled(Box) (({theme}) => ({
  width:'100%',
  height:"90vh",
  display:'flex',
  flexDirection:'column',
  gap:'1rem',
  [theme.breakpoints.down('sm')]:{
    gap:0
  }
}))

/////////////////////////////////MAIN FUNCTION STARTS//////////////////////
const Home = () => {

  return (
      
        <MainBox>
          <HeroBanner/>
          <Trending />
          <Popular />
          <TopRated/>
        </MainBox>
  )
}

export default Home