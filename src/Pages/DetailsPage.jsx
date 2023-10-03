import React from 'react';
import { Box,LinearProgress,styled } from "@mui/material";
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch.js';
import MovieDetails from '../Components/Details/MovieDetails.jsx';
import CastSection from '../Components/Details/CastSection.jsx';
import { useSelector } from 'react-redux';
import MovieVideosSection from '../Components/Details/MovieVideosSection.jsx';
import Recommendations from '../Components/Details/Recommendations.jsx';
////////////////////////////////////////////////////////////////////////////////

const MainBox = styled(Box) (({theme})=> ({
  marginTop:'10vh',
  [theme.breakpoints.down('sm')]:{
    marginTop:0,
  }
}))

//////////////////////////MAIN FUNCTION STARTS///////////////////////////////

const Details = () => {
  const{ mediaType, id } = useParams();
  const { url } = useSelector(state  => state.home );
  const{ data, loading} = useFetch(`/${mediaType}/${id}`);

  return (
    <>
    {
      loading ? <LinearProgress/> :
      <MainBox>
            <MovieDetails data={data} loading={loading} url={url}/>
            <CastSection data={data} loading={loading} url={url}/>
            <MovieVideosSection mediaType={mediaType} id={id}/>
            <Recommendations mediaType={mediaType} id={id}/>
            </MainBox>  
          }    
          </>  
  )
}

export default Details